<template>
    <v-dialog v-model="dialogVisible" max-width="360" :scrim="true" scrim-color="rgba(0,0,0,0.85)" persistent>
        <v-card class="ocean-card" rounded="xl">
            <v-card-title class="ocean-header d-flex align-center gap-3 pa-4">
                <div class="header-icon">
                    <v-icon color="#f09595" size="20">mdi-timer-sand</v-icon>
                </div>
                <span class="text-subtitle-1 font-weight-medium text-white">Session Expired</span>
            </v-card-title>

            <v-divider color="rgba(58,168,232,0.15)" />

            <v-card-text class="pa-5 text-center">
                <!-- Only show countdown ring for auto refresh -->
                <div v-if="props.autoCountdown" class="countdown-ring mb-4">
                    <svg viewBox="0 0 64 64" class="ring-svg">
                        <circle class="ring-bg" cx="32" cy="32" r="28" />
                        <circle class="ring-fill" cx="32" cy="32" r="28" :stroke-dasharray="`${circumference}`"
                            :stroke-dashoffset="dashOffset" />
                    </svg>
                    <span class="countdown-number">{{ countdown }}</span>
                </div>

                <!-- Different message per case -->
                <v-icon v-if="!props.autoCountdown" color="#f09595" size="48" class="mb-4">
                    mdi-clock-alert-outline
                </v-icon>

                <p class="expire-message">
                    {{ props.autoCountdown ? 'Session error detected.' : 'You were away too long.' }}
                </p>
                <p class="expire-sub">
                    {{ props.autoCountdown
                        ? 'The game will refresh automatically.'
                        : 'Please refresh to continue playing.' }}
                </p>
            </v-card-text>

            <v-divider color="rgba(58,168,232,0.1)" />

            <v-card-actions class="pa-4">
                <v-btn block class="refresh-btn" @click="emit('refresh')">
                    <v-icon start size="18">mdi-refresh</v-icon>
                    Refresh Now
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{
    modelValue: boolean
    countdownSeconds?: number  // default 10
    autoCountdown?: boolean
}>()

const emit = defineEmits<{
    'update:modelValue': [value: boolean]
    'refresh': []
}>()

const dialogVisible = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
})

const total = computed(() => props.countdownSeconds ?? 10)
const countdown = ref(total.value)
const circumference = 2 * Math.PI * 28  // r=28

const dashOffset = computed(() => {
    const progress = countdown.value / total.value
    return circumference * (1 - progress)
})

let timer: ReturnType<typeof setInterval> | null = null

function startCountdown() {
    countdown.value = total.value
    if (timer) clearInterval(timer)
    timer = setInterval(() => {
        countdown.value -= 1
        if (countdown.value <= 0) {
            stopCountdown()
            emit('refresh')
        }
    }, 1000)
}

function stopCountdown() {
    if (timer) {
        clearInterval(timer)
        timer = null
    }
}

watch(() => props.modelValue, (val) => {
    if (val && props.autoCountdown) startCountdown()
    else stopCountdown()
}, { immediate: true })

onUnmounted(() => stopCountdown())
</script>

<style scoped>
.ocean-card {
    background: linear-gradient(180deg, #0a1929 0%, #051928 55%, #0a2240 100%) !important;
    border: 1.5px solid rgba(168, 58, 58, 0.5) !important;
    overflow: hidden;
}

.ocean-header {
    background: linear-gradient(90deg, rgba(168, 58, 58, 0.22), transparent);
}

.header-icon {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(240, 149, 149, 0.12);
    border: 1px solid rgba(240, 149, 149, 0.3);
}

.countdown-ring {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto;
}

.ring-svg {
    width: 80px;
    height: 80px;
    transform: rotate(-90deg);
}

.ring-bg {
    fill: none;
    stroke: rgba(240, 149, 149, 0.12);
    stroke-width: 5;
}

.ring-fill {
    fill: none;
    stroke: #f09595;
    stroke-width: 5;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.9s linear;
}

.countdown-number {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 700;
    color: #f09595;
}

.expire-message {
    font-size: 14px;
    color: rgba(173, 228, 242, 0.85);
    margin-bottom: 6px;
}

.expire-sub {
    font-size: 12px;
    color: rgba(173, 228, 242, 0.4);
    margin: 0;
}

.refresh-btn {
    background: linear-gradient(90deg, rgba(240, 149, 149, 0.2), rgba(168, 58, 58, 0.2)) !important;
    border: 1px solid rgba(240, 149, 149, 0.4) !important;
    color: #f09595 !important;
    text-transform: none !important;
    font-weight: 600;
    letter-spacing: 0.05em;
    height: 44px !important;
}

.refresh-btn:hover {
    background: linear-gradient(90deg, rgba(240, 149, 149, 0.3), rgba(168, 58, 58, 0.3)) !important;
}
</style>