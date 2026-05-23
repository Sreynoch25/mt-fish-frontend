<template>
    <v-dialog v-model="dialogVisible" max-width="360" :scrim="true" scrim-color="rgba(0,0,0,0.75)" persistent>
        <v-card class="ocean-card" rounded="xl">
            <v-card-title class="ocean-header d-flex align-center gap-3 pa-4">
                <div class="header-icon">
                    <v-icon color="#44d7c5" size="20">mdi-pause-circle-outline</v-icon>
                </div>
                <span class="text-subtitle-1 font-weight-medium text-white">Game Paused</span>
            </v-card-title>

            <v-divider color="rgba(58,168,232,0.15)" />

            <v-card-text class="pa-5 text-center">
                <p class="pause-message">The game was paused because you left the window.</p>
                <p class="pause-sub">Click resume to continue playing.</p>
            </v-card-text>

            <v-divider color="rgba(58,168,232,0.1)" />

            <v-card-actions class="pa-4">
                <v-btn block class="resume-btn" @click="emit('resume')">
                    <v-icon start size="18">mdi-play</v-icon>
                    Resume
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{
    'update:modelValue': [value: boolean]
    'resume': []
}>()

const dialogVisible = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
})
</script>

<style scoped>
.ocean-card {
    background: linear-gradient(180deg, #0a1929 0%, #051928 55%, #0a2240 100%) !important;
    border: 1.5px solid rgba(26, 111, 168, 0.5) !important;
    overflow: hidden;
}

.ocean-header {
    background: linear-gradient(90deg, rgba(26, 111, 168, 0.22), transparent);
}

.header-icon {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(68, 215, 197, 0.12);
    border: 1px solid rgba(68, 215, 197, 0.3);
}

.pause-message {
    font-size: 14px;
    color: rgba(173, 228, 242, 0.85);
    margin-bottom: 8px;
}

.pause-sub {
    font-size: 12px;
    color: rgba(173, 228, 242, 0.45);
    margin: 0;
}

.resume-btn {
    background: linear-gradient(90deg, rgba(68, 215, 197, 0.2), rgba(55, 138, 221, 0.2)) !important;
    border: 1px solid rgba(68, 215, 197, 0.4) !important;
    color: #44d7c5 !important;
    text-transform: none !important;
    font-weight: 600;
    letter-spacing: 0.05em;
    height: 44px !important;
}

.resume-btn:hover {
    background: linear-gradient(90deg, rgba(68, 215, 197, 0.3), rgba(55, 138, 221, 0.3)) !important;
}
</style>