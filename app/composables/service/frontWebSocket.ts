export interface FrontNotificationSocketPayload {
  id: number
  member_id: number
  notification_type_id: number
  context: string
  subject: string
  description: string
  status_id: number
  created_at: string
}

export interface FrontCoinUpdatedPayload {
  member_id: number
  coin_amount: string
}

interface FrontSocketEnvelope {
  topic?: string
  data?: unknown
}

interface UseFrontWebSocketOptions {
  onNotificationCreated?: (payload: FrontNotificationSocketPayload) => void
  onCoinUpdated?: (payload: FrontCoinUpdatedPayload) => void
  onOpen?: () => void
  onClose?: () => void
  onError?: (error: Event) => void
}

export function useFrontWebSocket(options: UseFrontWebSocketOptions = {}) {
  const socket = ref<WebSocket | null>(null)
  let reconnectTimer: ReturnType<typeof setTimeout> | null = null
  let reconnectAttempts = 0
  let shouldReconnect = true

  function clearReconnectTimer() {
    if (reconnectTimer) {
      clearTimeout(reconnectTimer)
      reconnectTimer = null
    }
  }

  function getWsUrl(): string {
    const config = useRuntimeConfig()
    const base = String(config.public.apiEndPoint || '').replace(/\/$/, '')
    const wsBase = base.replace(/^http(s?):\/\//, 'ws$1://')
    return `${wsBase}/websocket/ws`
  }

  function parsePayload(raw: unknown): FrontNotificationSocketPayload | null {
    if (!raw) return null
    try {
      if (typeof raw === 'string') {
        return JSON.parse(raw) as FrontNotificationSocketPayload
      }
      return raw as FrontNotificationSocketPayload
    } catch {
      return null
    }
  }

  function scheduleReconnect() {
    if (!shouldReconnect) return
    clearReconnectTimer()
    const delay = Math.min(30000, 1000 * Math.pow(2, reconnectAttempts))
    reconnectAttempts += 1
    reconnectTimer = setTimeout(() => {
      void connect()
    }, delay)
  }

  async function connect() {
    if (!process.client) return
    if (socket.value && socket.value.readyState === WebSocket.OPEN) return

    const token = useCookie<string | null>('accessToken').value
    if (!token) return

    const wsUrl = getWsUrl()
    try {
      const ws = new WebSocket(wsUrl, ['Bearer', token])
      socket.value = ws

      ws.onopen = () => {
        reconnectAttempts = 0
        options.onOpen?.()
      }

      ws.onmessage = (event) => {
        try {
          const envelope = JSON.parse(event.data) as FrontSocketEnvelope
          if (envelope?.topic === 'front.notification.created') {
            const payload = parsePayload(envelope.data)
            if (!payload) return
            options.onNotificationCreated?.(payload)
            return
          }

          if (envelope?.topic === 'front.coin.updated') {
            const payload = parsePayload(envelope.data) as FrontCoinUpdatedPayload | null
            if (!payload) return
            options.onCoinUpdated?.(payload)
          }
        } catch {
          // ignore malformed socket payload
        }
      }

      ws.onerror = (error) => {
        options.onError?.(error)
      }

      ws.onclose = () => {
        options.onClose?.()
        socket.value = null
        scheduleReconnect()
      }
    } catch {
      scheduleReconnect()
    }
  }

  function disconnect() {
    shouldReconnect = false
    clearReconnectTimer()
    if (socket.value) {
      socket.value.close()
      socket.value = null
    }
  }

  function enableReconnect() {
    shouldReconnect = true
  }

  return {
    connect,
    disconnect,
    enableReconnect,
  }
}
