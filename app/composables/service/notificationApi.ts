import { useApiInterceptor } from '~/composables/api/useApiInterceptor'

export interface ApiResponse<T> {
  success: boolean
  message: string
  status_code: number
  data: T
}

export interface NotificationItem {
  id: number
  notification_type_id: number
  notification_type_name: string
  icon: string
  context: string
  subject: string
  description: string
  status_id: number
  order: number
  created_by: number
  created_at: string
}

export interface NotificationListData {
  notifications: NotificationItem[]
  total: number
}

export async function getMyNotifications() {
  return useApiInterceptor<ApiResponse<NotificationListData>>('/notifications/', {
    method: 'GET',
  })
}

export async function markNotificationAsRead(id: number) {
  return useApiInterceptor<ApiResponse<null>>(`/notifications/${id}/read`, {
    method: 'PATCH',
  })
}

export async function deleteNotification(id: number) {
  return useApiInterceptor<ApiResponse<null>>(`/notifications/${id}`, {
    method: 'DELETE',
  })
}
