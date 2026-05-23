<template>
  <v-bottom-sheet v-model="showSheet" fullscreen>
    <v-card height="100vh" class="report-card">

      <!-- Toolbar -->
      <v-toolbar class="report-toolbar">
        <v-toolbar-title class="text-bold text-2xl toolbar-title">របាយការណ៍</v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="showSheet = false" class="close-btn">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text>

        <!-- Filter -->
        <div class="filter-row">
          <div class="filter-left">
            <span class="text-xl filter-label">កាលបរិច្ឆេទ</span>

            <v-text-field v-model="filterDate" type="date" density="compact" hide-details variant="outlined"
              style="max-width:180px" class="ocean-input" />

            <v-select v-model="filterCurrency" :items="['KHR', 'USD']" density="compact" hide-details
              variant="outlined" style="max-width:100px" class="ocean-input" />
          </div>

          <div class="filter-right">
            <v-btn color="#00C2D4" class="text-capitalize filter-btn">Today</v-btn>
            <v-btn color="#FFD54F" class="text-capitalize filter-btn">Yesterday</v-btn>
            <v-btn color="#FF6B35" class="text-capitalize filter-btn">Week</v-btn>
          </div>
        </div>

        <!-- Table -->
        <v-table class="report-table" fixed-header height="calc(100vh - 220px)">
          <thead>
            <tr>
              <th>លេខ</th>
              <th>ប្រតិបត្តិការអាយឌី</th>
              <th>លេខសម្គាល់ការចូល</th>
              <th>គណនី</th>
              <th>ហ្គេម</th>
              <th>រូបិយប័ណ្ណ</th>
              <th>លុយចាក់</th>
              <th>ការភ្នាល់លុយ</th>
              <th>កម្រៃដឹងសារ</th>
              <th>លទ្ធផល</th>
              <th>ឈ្នះ/ចាញ់</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in paginatedData" :key="item.no">
              <td>{{ item.no }}</td>
              <td>{{ item.transactionId }}</td>
              <td>{{ item.loginId }}</td>
              <td>{{ item.account }}</td>
              <td>{{ item.game }}</td>
              <td>{{ item.currency }}</td>
              <td>{{ item.bet.toLocaleString() }}</td>
              <td>{{ item.wager.toLocaleString() }}</td>
              <td>{{ item.fee }}</td>
              <td :class="item.result >= 0 ? 'positive' : 'negative'">
                {{ item.result.toLocaleString() }}
              </td>
              <td :class="item.winLose >= 0 ? 'positive' : 'negative'">
                {{ item.winLose.toLocaleString() }}
              </td>
            </tr>

            <!-- Summary rows -->
            <tr class="summary-row">
              <td colspan="6" class="summary-label">សរុបក្នុងមួយទំព័រ</td>
              <td>{{ pageBetTotal.toLocaleString() }}</td>
              <td>{{ pageWagerTotal.toLocaleString() }}</td>
              <td>0</td>
              <td :class="pageResultTotal >= 0 ? 'positive' : 'negative'">{{ pageResultTotal.toLocaleString() }}</td>
              <td :class="pageWinLoseTotal >= 0 ? 'positive' : 'negative'">{{ pageWinLoseTotal.toLocaleString() }}</td>
            </tr>
            <tr class="summary-row">
              <td colspan="6" class="summary-label">សរុបទាំងអស់</td>
              <td>{{ allBetTotal.toLocaleString() }}</td>
              <td>{{ allWagerTotal.toLocaleString() }}</td>
              <td>0</td>
              <td :class="allResultTotal >= 0 ? 'positive' : 'negative'">{{ allResultTotal.toLocaleString() }}</td>
              <td :class="allWinLoseTotal >= 0 ? 'positive' : 'negative'">{{ allWinLoseTotal.toLocaleString() }}</td>
            </tr>

            <tr v-if="paginatedData.length === 0">
              <td colspan="11" class="empty">គ្មានទិន្នន័យ</td>
            </tr>
          </tbody>
        </v-table>

        <!-- Pagination -->
        <div class="pagination">
          <v-pagination v-model="currentPage" :length="totalPages" :total-visible="5" density="compact"
            rounded="circle" />
        </div>

      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const showSheet = ref(false)
const filterDate = ref('2026-03-13')
const filterCurrency = ref('KHR')
const currentPage = ref(1)
const itemsPerPage = 5

const reportData = ref([
  { no: 1,  transactionId: '41487051', loginId: 'USR-0011', account: 'player01', game: 'Fish',         currency: 'KHR', bet: 30000, wager: 30000, fee: 0, result:  39500,  winLose:  9500  },
  { no: 2,  transactionId: '41134653', loginId: 'USR-0011', account: 'player01', game: 'Keno-Jackpot', currency: 'KHR', bet: 10000, wager: 10000, fee: 0, result:      0,  winLose: -10000 },
  { no: 3,  transactionId: '41103619', loginId: 'USR-0011', account: 'player01', game: 'Keno',         currency: 'KHR', bet: 59000, wager: 59000, fee: 0, result:  99800,  winLose:  40800 },
  { no: 4,  transactionId: '41094236', loginId: 'USR-0011', account: 'player01', game: 'Poker',        currency: 'KHR', bet: 1000,  wager: 1000,  fee: 0, result:      0,  winLose:  -1000 },
  { no: 5,  transactionId: '41023100', loginId: 'USR-0012', account: 'player02', game: 'Fish Game',    currency: 'KHR', bet: 5000,  wager: 5000,  fee: 0, result:   7500,  winLose:   2500 },
  { no: 6,  transactionId: '40998745', loginId: 'USR-0012', account: 'player02', game: 'Slot Machine', currency: 'KHR', bet: 20000, wager: 20000, fee: 0, result:  15000,  winLose:  -5000 },
  { no: 7,  transactionId: '40876543', loginId: 'USR-0013', account: 'player03', game: 'Baccarat',     currency: 'KHR', bet: 15000, wager: 15000, fee: 0, result:  22500,  winLose:   7500 },
  { no: 8,  transactionId: '40754321', loginId: 'USR-0013', account: 'player03', game: 'Dragon Tiger', currency: 'KHR', bet: 8000,  wager: 8000,  fee: 0, result:      0,  winLose:  -8000 },
  { no: 9,  transactionId: '40632100', loginId: 'USR-0014', account: 'player04', game: 'Roulette',     currency: 'KHR', bet: 25000, wager: 25000, fee: 0, result:  37000,  winLose:  12000 },
  { no: 10, transactionId: '40510987', loginId: 'USR-0014', account: 'player04', game: 'Hi-Lo',        currency: 'KHR', bet: 3000,  wager: 3000,  fee: 0, result:      0,  winLose:  -3000 },
])

const totalPages = computed(() => Math.ceil(reportData.value.length / itemsPerPage))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return reportData.value.slice(start, start + itemsPerPage)
})

// Page totals
const pageBetTotal    = computed(() => paginatedData.value.reduce((s, i) => s + i.bet, 0))
const pageWagerTotal  = computed(() => paginatedData.value.reduce((s, i) => s + i.wager, 0))
const pageResultTotal = computed(() => paginatedData.value.reduce((s, i) => s + i.result, 0))
const pageWinLoseTotal= computed(() => paginatedData.value.reduce((s, i) => s + i.winLose, 0))

// All totals
const allBetTotal     = computed(() => reportData.value.reduce((s, i) => s + i.bet, 0))
const allWagerTotal   = computed(() => reportData.value.reduce((s, i) => s + i.wager, 0))
const allResultTotal  = computed(() => reportData.value.reduce((s, i) => s + i.result, 0))
const allWinLoseTotal = computed(() => reportData.value.reduce((s, i) => s + i.winLose, 0))

function open() {
  showSheet.value = true
}

defineExpose({ open })
</script>

<style scoped>
/* ── Card ── */
.report-card {
  background: rgb(var(--v-theme-background)) !important;
  color: rgb(var(--v-theme-on-background)) !important;
}

/* ── Toolbar ── */
.report-toolbar {
  background: rgb(var(--v-theme-surface)) !important;
  border-bottom: 2px solid rgb(var(--v-theme-secondary)) !important;
}

.toolbar-title {
  color: rgb(var(--v-theme-primary)) !important;
  font-weight: bold;
}

.close-btn {
  color: rgb(var(--v-theme-close-btn)) !important;
}

/* ── Filter Row ── */
.filter-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.filter-left {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-right {
  display: flex;
  gap: 10px;
}

.filter-label {
  color: rgb(var(--v-theme-primary)) !important;
}

.filter-btn {
  border-width: 1.5px !important;
  font-weight: 600 !important;
  letter-spacing: 0.5px;
  color: white !important;
}

/* ── Inputs ── */
.ocean-input :deep(.v-field) {
  background: rgb(var(--v-theme-surface)) !important;
  color: rgb(var(--v-theme-on-surface)) !important;
}

.ocean-input :deep(.v-field__outline) {
  color: rgb(var(--v-theme-secondary)) !important;
}

.ocean-input :deep(input),
.ocean-input :deep(.v-select__selection-text) {
  color: rgb(var(--v-theme-on-surface)) !important;
}

/* ── Table ── */
.report-table {
  background: transparent !important;
  border: 1.5px solid rgb(var(--v-theme-secondary));
  border-radius: 10px;
  overflow: hidden;
}

.report-table :deep(table) {
  border-collapse: collapse;
  width: 100%;
}

/* Header */
.report-table :deep(thead th) {
  background: rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-on-primary)) !important;
  font-weight: 700 !important;
  font-size: 15px !important;
  text-align: center !important;
  border: 1.5px solid rgb(var(--v-theme-secondary)) !important;
  white-space: nowrap;
}

/* Body cells */
.report-table :deep(tbody td) {
  background: rgb(var(--v-theme-surface)) !important;
  color: rgb(var(--v-theme-on-surface)) !important;
  border: 1px solid rgb(var(--v-theme-secondary)) !important;
  text-align: center !important;
  font-size: 14px;
}

/* Even rows */
.report-table :deep(tbody tr:nth-child(even) td) {
  background: rgba(var(--v-theme-primary), 0.06) !important;
}

/* Hover */
.report-table :deep(tbody tr:hover td) {
  background: rgba(var(--v-theme-primary), 0.14) !important;
  transition: background 0.2s ease;
}

/* ── Summary rows ── */
.report-table :deep(tbody tr.summary-row td) {
  background: rgba(var(--v-theme-primary), 0.10) !important;
  font-weight: 700 !important;
  font-size: 14px !important;
}

.report-table :deep(tbody tr.summary-row td.summary-label) {
  text-align: right !important;
  color: rgb(var(--v-theme-primary)) !important;
  padding-right: 12px !important;
}

/* ── Positive / Negative ── */
.report-table :deep(tbody td.positive) {
  color: rgb(var(--v-theme-success)) !important;
  font-weight: 700 !important;
}

.report-table :deep(tbody td.negative) {
  color: rgb(var(--v-theme-warning)) !important;
  font-weight: 700 !important;
}

/* ── Empty ── */
.empty {
  padding: 20px;
  color: rgb(var(--v-theme-primary));
  text-align: center;
  background: rgb(var(--v-theme-background)) !important;
}

/* ── Pagination ── */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.pagination :deep(.v-pagination__item button),
.pagination :deep(.v-pagination__prev button),
.pagination :deep(.v-pagination__next button) {
  background: rgb(var(--v-theme-surface)) !important;
  color: rgb(var(--v-theme-primary)) !important;
  border: 1px solid rgb(var(--v-theme-secondary)) !important;
}

.pagination :deep(.v-pagination__item--is-active button) {
  background: rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-on-primary)) !important;
  border-color: rgb(var(--v-theme-secondary)) !important;
}

.pagination :deep(.v-pagination__item button:hover),
.pagination :deep(.v-pagination__prev button:hover),
.pagination :deep(.v-pagination__next button:hover) {
  background: rgba(var(--v-theme-primary), 0.14) !important;
  color: rgb(var(--v-theme-primary)) !important;
}
</style>