import { useApiInterceptor } from '~/composables/api/useApiInterceptor'

export interface ApiResponse<T> {
  success: boolean
  message: string
  status_code: number
  data: T
}

export interface ExchangeFormBalance {
  currency_id: number
  currency_code: string
  currency_symbol: string
  amount: string
}

export interface ExchangeCoinFormItem {
  member_id: number
  currency_id: number
  amount: string
  balance: ExchangeFormBalance[]
  reference: string
  remark: string
  exchange_rate: string
  balance_available: string
  coin_available: string
}

export interface ExchangeCoinFormData {
  exchange_coin_form: ExchangeCoinFormItem[]
}

export interface ExchangeBalanceFormItem {
  member_id: number
  currency_id: number
  amount: string
  balance: ExchangeFormBalance[]
  reference: string
  remark: string
  exchange_rate: string
  balance_available: string
  coin_available: string
}

export interface ExchangeBalanceFormData {
  exchange_balance_form: ExchangeBalanceFormItem[]
}

export interface ExchangeCoinRequest {
  currency_id: number
  amount_coin: string
  reference?: string
  remark?: string
}

export interface ExchangeCoinData {
  member_id: number
  currency_id: number
  exchange_rate: string
  balance_before: string
  balance_exchanged: string
  balance_after: string
  coin_before: string
  coin_received: string
  coin_after: string
  reference: string
  remark: string
  notification_id: number
}

export interface ExchangeBalanceRequest {
  currency_id: number
  amount_coin: string
  reference?: string
  remark?: string
}

export interface ExchangeBalanceData {
  member_id: number
  currency_id: number
  exchange_rate: string
  coin_before: string
  coin_exchanged: string
  coin_after: string
  balance_before: string
  balance_received: string
  balance_after: string
  reference: string
  remark: string
  notification_id: number
}

export interface ExchangePackage {
  id: number
  package_name: string
  package_description: string
  currency_id: number
  currency_code: string
  currency_symbol: string
  price_amount: string
  coin_amount: string
  order: number
  status_id: number
}

export interface ExchangePackageListData {
  packages: ExchangePackage[]
  total: number
}

export interface ExchangePackagePurchaseData {
  package_id: number
  package_name: string
  member_id: number
  currency_id: number
  price_amount: string
  balance_before: string
  balance_after: string
  coin_before: string
  coin_received: string
  coin_after: string
  reference: string
  remark: string
  notification_id: number
}

export async function getExchangeCoinForm(currencyId?: number) {
  return useApiInterceptor<ApiResponse<ExchangeCoinFormData>>('/balances/exchange-coins/form', {
    method: 'GET',
    query: currencyId ? { currency_id: currencyId } : undefined,
  })
}

export async function getExchangeBalanceForm(currencyId?: number) {
  return useApiInterceptor<ApiResponse<ExchangeBalanceFormData>>('/balances/exchange-balance/form', {
    method: 'GET',
    query: currencyId ? { currency_id: currencyId } : undefined,
  })
}

export async function exchangeCoin(payload: ExchangeCoinRequest) {
  return useApiInterceptor<ApiResponse<ExchangeCoinData>>('/balances/exchange-coins', {
    method: 'POST',
    body: payload,
  })
}

export async function exchangeBalance(payload: ExchangeBalanceRequest) {
  return useApiInterceptor<ApiResponse<ExchangeBalanceData>>('/balances/exchange-balance', {
    method: 'POST',
    body: payload,
  })
}

export async function getExchangePackages(currencyId: number) {
  return useApiInterceptor<ApiResponse<ExchangePackageListData>>('/coins/exchange-packages', {
    method: 'GET',
    query: { currency_id: currencyId },
  })
}

export async function purchaseExchangePackage(packageId: number) {
  return useApiInterceptor<ApiResponse<ExchangePackagePurchaseData>>(`/coins/exchange-packages/${packageId}/purchase`, {
    method: 'POST',
  })
}
