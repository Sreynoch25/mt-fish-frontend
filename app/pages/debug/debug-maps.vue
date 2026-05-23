<template>
  <section class="map-debug-page">
    <div ref="pixiMountRef" class="game-container" />

    <aside class="map-debug-panel">
      <div class="map-debug-panel__group">
        <span class="map-debug-panel__label">Current</span>
        <strong class="map-debug-panel__value">{{ currentSceneId }}</strong>
      </div>

      <label class="map-debug-panel__group">
        <span class="map-debug-panel__label">Transition</span>
        <select v-model="transitionMode" class="map-debug-panel__select">
          <option value="normal">Normal</option>
          <option value="boss">Boss</option>
          <option value="context_wipe">Context Wipe</option>
        </select>
      </label>

      <div class="map-debug-panel__buttons">
        <button v-for="scene in scenes" :key="scene.id" type="button" class="map-debug-panel__button"
          :class="{ 'map-debug-panel__button--active': currentSceneId === scene.id }"
          @click="switchSceneById(scene.id)">
          {{ scene.label }}
        </button>
      </div>
    </aside>
  </section>
</template>

<script setup lang="ts">
import { useFishGameplayScene } from '~/composables/game_core/game/useFishGameplayScene'

const pixiMountRef = ref<HTMLDivElement | null>(null)
const { scenes, currentSceneId, transitionMode, mount, destroy, switchSceneById } =
  useFishGameplayScene()

onMounted(async () => {
  if (!pixiMountRef.value) return
  await mount(pixiMountRef.value)
})

onBeforeUnmount(() => {
  destroy()
})

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    window.location.reload()
  })

  import.meta.hot.dispose(() => {
    destroy()
  })
}
</script>

<style scoped>
.map-debug-page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: red;
}

.game-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: block;
  background: #010b16;
}

.game-container :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
}

.map-debug-panel {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 10;
  width: min(320px, calc(100vw - 32px));
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px;
  border-radius: 18px;
  background: rgba(4, 16, 27, 0.82);
  border: 1px solid rgba(137, 211, 255, 0.22);
  backdrop-filter: blur(12px);
  color: #f2fbff;
}

.map-debug-panel__group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.map-debug-panel__label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(182, 222, 245, 0.72);
}

.map-debug-panel__value {
  font-size: 16px;
  font-weight: 700;
}

.map-debug-panel__select {
  height: 42px;
  border: 1px solid rgba(137, 211, 255, 0.24);
  border-radius: 12px;
  background: rgba(7, 23, 38, 0.92);
  color: #f2fbff;
  padding: 0 12px;
  font: inherit;
}

.map-debug-panel__buttons {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.map-debug-panel__button {
  min-height: 42px;
  padding: 10px 12px;
  border: 1px solid rgba(137, 211, 255, 0.22);
  border-radius: 12px;
  background: rgba(8, 24, 39, 0.92);
  color: #f2fbff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.map-debug-panel__button--active {
  background: linear-gradient(180deg, rgba(74, 161, 220, 0.98), rgba(30, 105, 170, 0.98));
  border-color: rgba(169, 227, 255, 0.72);
}

@media (max-width: 640px) {
  .map-debug-panel {
    top: 12px;
    left: 12px;
    width: min(300px, calc(100vw - 24px));
    padding: 12px;
  }
}
</style>
