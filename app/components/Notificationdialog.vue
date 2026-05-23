<!-- components/dialogs/NotificationDialog.vue -->
<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="440"
    :scrim="true"
    scrim-color="rgba(0,0,0,0.65)"
    transition="dialog-bottom-transition"
    :fullscreen="$vuetify.display.xs"
    @click:outside="close"
  >
    <v-card class="ocean-card" rounded="xl">

      <!-- Header -->
      <v-card-title class="ocean-header d-flex align-center gap-3 pa-4">
        <div class="header-icon">
          <v-icon color="#44d7c5" size="20">mdi-bell-outline</v-icon>
        </div>
        <span class="text-subtitle-1 font-weight-medium text-white">{{ t('notifications.title') }}</span>
        <v-spacer />
        <v-btn
          v-if="unreadCount > 0"
          variant="text"
          size="x-small"
          class="mark-all-btn mr-1"
          @click="markAllRead"
        >
          {{ t('notifications.markAllRead') }}
        </v-btn>
        <v-btn icon variant="text" size="small" @click="close">
          <v-icon color="rgba(173,228,242,0.5)" size="18">mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider color="rgba(58,168,232,0.15)" />

      <!-- Filter tabs -->
      <div class="filter-tabs px-4 pt-3 pb-1">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="filter-tab"
          :class="{ 'filter-tab-active': activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
          <span v-if="tab.count > 0" class="tab-badge">{{ tab.count }}</span>
        </button>
      </div>

      <!-- Notification list -->
      <v-card-text class="pa-0 notif-scroll">
        <div v-if="filteredNotifications.length === 0" class="empty-state">
          <v-icon size="38" color="rgba(173,228,242,0.25)">mdi-bell-off-outline</v-icon>
          <p class="empty-text mt-3">{{ t('notifications.empty') }}</p>
        </div>

        <transition-group name="notif-list" tag="div">
          <div
            v-for="notif in filteredNotifications"
            :key="notif.id"
            class="notif-item"
            :class="{ 'notif-unread': !notif.read }"
            @click="markRead(notif.id)"
          >
            <!-- Unread dot -->
            <div class="unread-dot" v-if="!notif.read" />

            <!-- Icon -->
            <div class="notif-icon-wrap" :class="`notif-icon-${notif.type}`">
              <v-icon size="18" :color="typeColor(notif.type)">{{ typeIcon(notif.type) }}</v-icon>
            </div>

            <!-- Content -->
            <div class="notif-body">
              <div class="notif-title">{{ notif.title }}</div>
              <div class="notif-message">{{ notif.message }}</div>
              <div class="notif-time">{{ notif.time }}</div>
            </div>

            <!-- Delete -->
            <v-btn
              icon
              variant="text"
              size="x-small"
              class="notif-delete"
              @click.stop="deleteNotif(notif.id)"
            >
              <v-icon size="14" color="rgba(173,228,242,0.35)">mdi-close</v-icon>
            </v-btn>
          </div>
        </transition-group>
      </v-card-text>

      <!-- Footer -->
      <v-divider color="rgba(58,168,232,0.1)" />
      <v-card-actions class="px-4 py-3 d-flex justify-space-between">
        <span class="footer-count">{{ t('notifications.totalUnread', { total: notifications.length, unread: unreadCount }) }}</span>
        <v-btn
          variant="text"
          size="small"
          class="clear-btn"
          :disabled="notifications.length === 0"
          @click="clearAll"
        >
          <v-icon start size="14">mdi-trash-can-outline</v-icon>
          {{ t('notifications.clearAll') }}
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
const { t } = useFrontendI18n()

export type NotifType = 'success' | 'error' | 'info' | 'warning' | 'system'

export interface Notification {
  id: string
  type: NotifType
  title: string
  message: string
  time: string
  read: boolean
}

const props = defineProps<{
  modelValue: boolean
  notifications?: Notification[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update:notifications': [list: Notification[]]
  'mark-read': [id: string]
  'mark-all-read': []
  'delete': [id: string]
  'clear-all': []
}>()

const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val: boolean) => emit('update:modelValue', val),
})

const activeTab = ref<'all' | 'unread' | 'success' | 'warning'>('all')

const notifications = ref<Notification[]>(
  props.notifications ?? sampleNotifications(),
)

watch(() => props.notifications, (val) => {
  if (val) notifications.value = val
}, { deep: true })

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

const tabs = computed(() => [
  { key: 'all'     as const, label: t('notifications.all'),     count: notifications.value.length },
  { key: 'unread'  as const, label: t('notifications.unread'),  count: unreadCount.value           },
  { key: 'success' as const, label: t('notifications.rewards'), count: notifications.value.filter(n => n.type === 'success').length },
  { key: 'warning' as const, label: t('notifications.alerts'),  count: notifications.value.filter(n => n.type === 'warning' || n.type === 'error').length },
])

const filteredNotifications = computed(() => {
  switch (activeTab.value) {
    case 'unread':  return notifications.value.filter(n => !n.read)
    case 'success': return notifications.value.filter(n => n.type === 'success')
    case 'warning': return notifications.value.filter(n => n.type === 'warning' || n.type === 'error')
    default:        return notifications.value
  }
})

function markRead(id: string) {
  const n = notifications.value.find(n => n.id === id)
  if (n) n.read = true
  emit('mark-read', id)
}

function markAllRead() {
  notifications.value.forEach(n => { n.read = true })
  emit('mark-all-read')
}

function deleteNotif(id: string) {
  notifications.value = notifications.value.filter(n => n.id !== id)
  emit('delete', id)
}

function clearAll() {
  notifications.value = []
  emit('clear-all')
}

function close() {
  dialogVisible.value = false
}

function typeIcon(type: NotifType): string {
  const map: Record<NotifType, string> = {
    success: 'mdi-check-circle-outline',
    error:   'mdi-alert-circle-outline',
    info:    'mdi-information-outline',
    warning: 'mdi-alert-outline',
    system:  'mdi-cog-outline',
  }
  return map[type]
}

function typeColor(type: NotifType): string {
  const map: Record<NotifType, string> = {
    success: '#44d7c5',
    error:   '#f09595',
    info:    '#378add',
    warning: '#fac775',
    system:  'rgba(173,228,242,0.6)',
  }
  return map[type]
}

function push(notif: Omit<Notification, 'id' | 'read'>) {
  notifications.value.unshift({
    ...notif,
    id: `notif_${Date.now()}`,
    read: false,
  })
}

defineExpose({ push })

function sampleNotifications(): Notification[] {
  return [
    {
      id: '1',
      type: 'success',
      title: t('notifications.exchangeSuccessful'),
      message: '+5,000 coins · -$4.50 USD',
      time: t('notifications.justNow'),
      read: false,
    },
    {
      id: '2',
      type: 'success',
      title: t('notifications.bossDefeated'),
      message: t('notifications.bossDefeatedMessage'),
      time: t('notifications.minutesAgo', { count: 2 }),
      read: false,
    },
    {
      id: '3',
      type: 'warning',
      title: t('notifications.lowBalance'),
      message: t('notifications.lowBalanceMessage'),
      time: t('notifications.minutesAgo', { count: 5 }),
      read: false,
    },
    {
      id: '4',
      type: 'info',
      title: t('notifications.newSession'),
      message: t('notifications.newSessionMessage'),
      time: t('notifications.minutesAgo', { count: 8 }),
      read: true,
    },
    {
      id: '5',
      type: 'system',
      title: t('notifications.maintenanceNotice'),
      message: t('notifications.maintenanceMessage'),
      time: t('notifications.hoursAgo', { count: 1 }),
      read: true,
    },
  ]
}
</script>

<style scoped>
.ocean-card {
  background: linear-gradient(180deg, #0a1929 0%, #051928 55%, #0a2240 100%) !important;
  border: 1.5px solid rgba(26, 111, 168, 0.5) !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 88dvh;
}

.ocean-header {
  background: linear-gradient(90deg, rgba(26, 111, 168, 0.22), transparent);
  border-bottom: 1px solid rgba(58, 168, 232, 0.15);
  flex-shrink: 0;
}

.header-icon {
  width: 34px; height: 34px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  background: rgba(68, 215, 197, 0.12);
  border: 1px solid rgba(68, 215, 197, 0.3);
}

/* Mark all button */
.mark-all-btn {
  font-size: 11px !important;
  color: rgba(68, 215, 197, 0.75) !important;
  text-transform: none !important;
  letter-spacing: 0.02em;
}

/* Filter tabs */
.filter-tabs {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}

.filter-tab {
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid transparent;
  background: transparent;
  color: rgba(173, 228, 242, 0.5);
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.15s;
  white-space: nowrap;
}

.filter-tab:hover {
  color: rgba(173, 228, 242, 0.85);
  background: rgba(26, 111, 168, 0.1);
}

.filter-tab-active {
  background: rgba(68, 215, 197, 0.12) !important;
  border-color: rgba(68, 215, 197, 0.35) !important;
  color: #44d7c5 !important;
}

.tab-badge {
  background: rgba(68, 215, 197, 0.2);
  color: #44d7c5;
  border-radius: 10px;
  padding: 0px 6px;
  font-size: 10px;
  font-weight: 600;
  min-width: 18px;
  text-align: center;
}

/* Scrollable list */
.notif-scroll {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1 1 auto;
  min-height: 0;
  max-height: 420px;
}

/* Empty state */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
}

.empty-text {
  font-size: 13px;
  color: rgba(173, 228, 242, 0.35);
  margin: 0;
}

/* Notification item */
.notif-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(58, 168, 232, 0.08);
  cursor: pointer;
  transition: background 0.15s;
}

.notif-item:hover {
  background: rgba(26, 111, 168, 0.08);
}

.notif-item.notif-unread {
  background: rgba(68, 215, 197, 0.04);
}

.notif-item:last-child {
  border-bottom: none;
}

/* Unread dot */
.unread-dot {
  position: absolute;
  top: 18px;
  left: 6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #44d7c5;
  flex-shrink: 0;
}

/* Icon */
.notif-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 8px;
}

.notif-icon-success { background: rgba(68, 215, 197, 0.12);  border: 1px solid rgba(68, 215, 197, 0.28);  }
.notif-icon-error   { background: rgba(240, 149, 149, 0.12); border: 1px solid rgba(240, 149, 149, 0.28); }
.notif-icon-info    { background: rgba(55, 138, 221, 0.12);  border: 1px solid rgba(55, 138, 221, 0.28);  }
.notif-icon-warning { background: rgba(250, 199, 117, 0.12); border: 1px solid rgba(250, 199, 117, 0.28); }
.notif-icon-system  { background: rgba(173, 228, 242, 0.08); border: 1px solid rgba(173, 228, 242, 0.15); }

/* Body */
.notif-body {
  flex: 1;
  min-width: 0;
}

.notif-title {
  font-size: 13px;
  font-weight: 600;
  color: #edf9ff;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.notif-message {
  font-size: 12px;
  color: rgba(173, 228, 242, 0.65);
  line-height: 1.45;
}

.notif-time {
  font-size: 10px;
  color: rgba(173, 228, 242, 0.35);
  margin-top: 4px;
  letter-spacing: 0.03em;
}

/* Delete button */
.notif-delete {
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.15s;
}

.notif-item:hover .notif-delete {
  opacity: 1;
}

/* Footer */
.footer-count {
  font-size: 11px;
  color: rgba(173, 228, 242, 0.38);
}

.clear-btn {
  font-size: 11px !important;
  color: rgba(240, 149, 149, 0.65) !important;
  text-transform: none !important;
  letter-spacing: 0.02em;
}

/* Transition */
.notif-list-enter-active,
.notif-list-leave-active {
  transition: all 0.2s ease;
}
.notif-list-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
.notif-list-leave-to {
  opacity: 0;
  transform: translateX(16px);
}

/* Fullscreen xs */
:deep(.v-dialog--fullscreen) .ocean-card {
  border-radius: 0 !important;
  border: none !important;
  max-height: 100dvh;
}
</style>
