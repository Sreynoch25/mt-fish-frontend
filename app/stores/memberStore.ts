import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getMyInfo, updateAvatar } from '~/composables/service/memberApi'
import type { MyInfoData } from '~/composables/service/memberApi'

const createEmptyMyInfo = (): MyInfoData => ({
  user_name: '',
  avatar: '',
  balances: [],
  coin_amount: '0',
})

export const useMemberStore = defineStore('useMemberStore', () => {
  const info = ref<MyInfoData>(createEmptyMyInfo())
  const isFetching = ref(false)
  const fetched = ref(false)

  const fetchMyInfo = async (force = false): Promise<void> => {
    if (fetched.value && !force) return
    isFetching.value = true

    try {
      const response = await getMyInfo()
      const data = response?.data?.value

      if (data?.success) {
        info.value = data.data
        fetched.value = true
        return
      }

      throw data ?? { message: 'Unknown error' }
    } catch (error: unknown) {
      if (error && typeof error === 'object') {
        if ('message' in error || 'error' in error) {
          throw error
        }
      }

      throw { message: 'Unknown error' }
    } finally {
      isFetching.value = false
    }
  }

  const changeAvatar = async (avatarPath: string): Promise<void> => {
    try {
      const response = await updateAvatar({ avatar: avatarPath })
      const data = response?.data?.value

      if (data?.success) {
        info.value.avatar = data.data.avatar
        return
      }

      throw data ?? { message: 'Unknown error' }
    } catch (error: unknown) {
      if (error && typeof error === 'object') {
        if ('message' in error || 'error' in error) {
          throw error
        }
      }

      throw { message: 'Unknown error' }
    }
  }

  const setCoins = (amount: string): void => {
    info.value.coin_amount = amount
  }

  const reset = (): void => {
    info.value = createEmptyMyInfo()
    fetched.value = false
  }

  return {
    info,
    isFetching,
    fetched,
    fetchMyInfo,
    changeAvatar,
    setCoins,
    reset,
  }
})