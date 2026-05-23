<template>
  <div ref="pixiMountRef" class="game-container" />
  <GameResumeDialog v-model="isGamePausedDialogOpen" @resume="handleResume" />

  <GameSessionExpiredDialog v-model="isSessionExpiredDialogOpen" :countdown-seconds="10"
    :auto-countdown="sessionExpiredAutoCountdown" @refresh="handleSessionExpiredRefresh" />

  <ProfileDialog v-model="isProfileDialogOpen" :current-avatar="memberStore.info.avatar || '/avatar/Avatar6.png'"
    :username="memberStore.info.user_name || 'Player'" @avatar-changed="handleAvatarChanged"
    @coin-transaction="handleCoinTransaction" />

  <Notificationdialog v-model="isNotificationDialogOpen" :notifications="notifications" @mark-read="handleMarkRead"
    @mark-all-read="handleMarkAllRead" @delete="handleDeleteNotification" @clear-all="handleClearAllNotifications" />

  <Insufficientbalancedialog v-model="isInsufficientBalanceDialogOpen" :current-balance="currentCoins"
    @purchase-confirmed="handleCoinPurchase" />

  <GameSettingsDialog v-model="isGameSettingsDialogOpen" />

  <LogoutDialog v-model="isLogoutDialogOpen" @confirm="handleLogoutConfirm" />
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import GameSettingsDialog from '~/components/GameSettingsDialog.vue'
import Insufficientbalancedialog from '~/components/Insufficientbalancedialog.vue'
import LogoutDialog from '~/components/LogoutDialog.vue'
import Notificationdialog from '~/components/Notificationdialog.vue'
import ProfileDialog from '~/components/ProfileDialog.vue'
import type { Notification } from '~/components/Notificationdialog.vue'
import type { PurchasePayload } from '~/components/Insufficientbalancedialog.vue'
import { useFishGameplayScene } from '~/composables/game_core/game/useFishGameplayScene'
import {
  deleteNotification,
  getMyNotifications,
  markNotificationAsRead,
  type NotificationItem,
} from '~/composables/service/notificationApi'
import { useAuthStore } from '~/stores/authStore'
import { useMemberStore } from '~/stores/memberStore'

const pixiMountRef = ref<HTMLDivElement | null>(null)
const isProfileDialogOpen = ref(false)
const isNotificationDialogOpen = ref(false)
const isInsufficientBalanceDialogOpen = ref(false)
const isGameSettingsDialogOpen = ref(false)
const isLogoutDialogOpen = ref(false)
const isGamePausedDialogOpen = ref(false)
const isSessionExpiredDialogOpen = ref(false)
const sessionExpiredAutoCountdown = ref(false)
const notifications = ref<Notification[]>([])
const memberStore = useMemberStore()
const authStore = useAuthStore()
const { mount, destroy, setPlayerAvatar, resumeGame } = useFishGameplayScene()

const currentCoins = computed(() => Number(memberStore.info.coin_amount ?? '0') || 0)

function formatNotificationTime(createdAt: string): string {
  const date = new Date(createdAt)

  if (Number.isNaN(date.getTime())) {
    return createdAt || 'Unknown time'
  }

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}

function handleResume() {
  isGamePausedDialogOpen.value = false
  resumeGame()
}

function mapNotificationType(item: NotificationItem): Notification['type'] {
  const name = item.notification_type_name?.toLowerCase() ?? ''

  if (name.includes('success') || name.includes('reward')) return 'success'
  if (name.includes('warn')) return 'warning'
  if (name.includes('error') || name.includes('fail')) return 'error'
  if (name.includes('system')) return 'system'
  return 'info'
}

function mapNotification(item: NotificationItem): Notification {
  return {
    id: String(item.id),
    type: mapNotificationType(item),
    title: item.subject || item.notification_type_name || 'Notification',
    message: item.description || item.context || '',
    time: formatNotificationTime(item.created_at),
    read: item.status_id === 2,
  }
}

async function loadNotifications() {
  try {
    const response = await getMyNotifications()
    const list = response?.data?.value?.data?.notifications ?? []
    notifications.value = list.map(mapNotification)
  } catch (error) {
    console.error('[notifications] failed to load', error)
    notifications.value = []
  }
}

async function handleMarkRead(id: string) {
  const targetId = Number(id)
  if (!Number.isFinite(targetId)) return

  try {
    await markNotificationAsRead(targetId)
  } catch (error) {
    console.error('[notifications] failed to mark read', error)
  }
}

async function handleMarkAllRead() {
  const unreadIds = notifications.value
    .filter((item) => !item.read)
    .map((item) => Number(item.id))
    .filter((id) => Number.isFinite(id))

  await Promise.all(
    unreadIds.map(async (id) => {
      try {
        await markNotificationAsRead(id)
      } catch (error) {
        console.error('[notifications] failed to mark read', error)
      }
    }),
  )
}

async function handleDeleteNotification(id: string) {
  const targetId = Number(id)
  if (!Number.isFinite(targetId)) return

  try {
    await deleteNotification(targetId)
  } catch (error) {
    console.error('[notifications] failed to delete', error)
  }
}

async function handleClearAllNotifications() {
  const ids = notifications.value
    .map((item) => Number(item.id))
    .filter((id) => Number.isFinite(id))

  await Promise.all(
    ids.map(async (id) => {
      try {
        await deleteNotification(id)
      } catch (error) {
        console.error('[notifications] failed to delete', error)
      }
    }),
  )
}

function handleCoinPurchase(_payload: PurchasePayload) {
  // Coin display is now driven by websocket updates through memberStore.
}

function handleSessionExpiredRefresh() {
  window.location.reload()
}

function handleAvatarChanged(path: string) {
  setPlayerAvatar(path)
}

function handleCoinTransaction() {
  isInsufficientBalanceDialogOpen.value = true
}

function handleLogoutConfirm() {
  memberStore.reset()
  destroy()
  authStore.logout()
}

onMounted(async () => {
  await memberStore.fetchMyInfo()
  await loadNotifications()

  if (!pixiMountRef.value) return

  await mount(pixiMountRef.value, {
    onPauseTooLong: () => {
      // Away too long — show expired dialog, manual refresh only
      isGamePausedDialogOpen.value = false
      sessionExpiredAutoCountdown.value = false
      isSessionExpiredDialogOpen.value = true
    },
    onPause: () => {
      isGamePausedDialogOpen.value = true   // ← show dialog when paused
    },
    onAvatarClick: () => {
      isProfileDialogOpen.value = true
    },
    onMute: () => {
      isGameSettingsDialogOpen.value = true
    },
    onBell: () => {
      isNotificationDialogOpen.value = true
    },
    onLogout: () => {
      isLogoutDialogOpen.value = true
    },
    onInsufficientBalance: () => {
      isInsufficientBalanceDialogOpen.value = true
    },
    onSessionSyncLost: () => {
      // API failure — show expired dialog with auto countdown
      isGamePausedDialogOpen.value = false
      sessionExpiredAutoCountdown.value = true
      isSessionExpiredDialogOpen.value = true
    },
  })
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  overflow: auto;
  width: 100%;
  height: 100%;
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
</style>
