<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="420"
    persistent
    :scrim="true"
    scrim-color="rgba(0,0,0,0.75)"
    transition="dialog-bottom-transition"
    :fullscreen="$vuetify.display.xs"
  >
    <v-card class="logout-card" rounded="xl">
      <v-card-title class="logout-header d-flex align-center gap-3 pa-4">
        <div class="header-icon">
          <v-icon color="#fac775" size="20">mdi-logout</v-icon>
        </div>
        <span class="text-subtitle-1 font-weight-medium text-white">
          {{ t('logout.title') }}
        </span>
        <v-spacer />
        <v-btn icon variant="text" size="small" @click="close">
          <v-icon color="rgba(173,228,242,0.5)" size="18">mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider color="rgba(58,168,232,0.15)" />

      <v-card-text class="pa-5">
        <p class="logout-subtitle">
          {{ t('logout.message') }}
        </p>
      </v-card-text>

      <v-card-actions class="px-5 pb-5 pt-0 gap-3">
        <v-btn
          variant="outlined"
          color="rgba(173,228,242,0.4)"
          class="logout-btn-cancel flex-grow-1"
          @click="close"
        >
          {{ t('common.cancel') }}
        </v-btn>
        <v-btn
          variant="flat"
          class="logout-btn-confirm flex-grow-1"
          @click="confirm"
        >
          <v-icon start size="16">mdi-logout</v-icon>
          {{ t('logout.action') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const { t } = useFrontendI18n()
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  confirm: []
}>()

const dialogVisible = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

function close() {
  emit('update:modelValue', false)
}

function confirm() {
  emit('confirm')
  emit('update:modelValue', false)
}
</script>

<style scoped>
.logout-card {
  background: linear-gradient(180deg, #0a1929 0%, #051928 55%, #0a2240 100%) !important;
  border: 1.5px solid rgba(26, 111, 168, 0.5) !important;
  overflow: hidden;
}

.logout-header {
  background: linear-gradient(90deg, rgba(26, 111, 168, 0.22), transparent);
  border-bottom: 1px solid rgba(58, 168, 232, 0.15);
}

.header-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: rgba(186, 117, 23, 0.18);
  border: 1px solid rgba(186, 117, 23, 0.38);
}

.logout-subtitle {
  font-size: 13px;
  color: rgba(173, 228, 242, 0.72);
  line-height: 1.6;
}

.logout-btn-cancel {
  border-color: rgba(173, 228, 242, 0.24) !important;
  color: #d8f8ff !important;
}

.logout-btn-confirm {
  background: linear-gradient(135deg, #f08b5b, #dd4d63) !important;
  color: #ffffff !important;
}
</style>
