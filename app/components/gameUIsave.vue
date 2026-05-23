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
            <v-btn color="#00C2D4"  class="text-capitalize filter-btn">Today</v-btn>
            <v-btn color="#FFD54F"  class="text-capitalize filter-btn">Yesterday</v-btn>
            <v-btn color="#FF6B35"  class="text-capitalize filter-btn">Week</v-btn>
          </div>
        </div>

        <!-- Table -->
        <v-table class="report-table" fixed-header height="calc(100vh - 220px)">
          <thead>
            <tr>
              <th>លេខរៀង</th>
              <th>ប្រតិបត្តិការអាយឌី</th>
              <th>ចំណាំ</th>
              <th>កាលបរិច្ឆេទ</th>
              <th>ចំនួនលុយមិនបានការ</th>
              <th>ចំនួនលុយបានការ</th>
              <th>លួះ/បាញ់</th>
              <th>កម្រៃដឹងសារ</th>
              <th>រូបិយបណ្ណ</th>
              <th>សរុករួម</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in paginatedData" :key="item.no">
              <td>{{ item.no }}</td>
              <td>{{ item.id }}</td>
              <td>{{ item.note }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.bet.toLocaleString() }}</td>
              <td>{{ item.win.toLocaleString() }}</td>
              <td :class="item.wl >= 0 ? 'positive' : 'negative'">
                {{ item.wl.toLocaleString() }}
              </td>
              <td>{{ item.fee }}</td>
              <td>{{ item.currency }}</td>
              <td :class="item.total >= 0 ? 'positive' : 'negative'">
                {{ item.total.toLocaleString() }}
              </td>
            </tr>

            <tr v-if="paginatedData.length === 0">
              <td colspan="10" class="empty">គ្មានទិន្នន័យ</td>
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
  { no: 1,  id: '41487051', note: 'Fish ',  date: '2026-03-11', bet: 30000, win: 30000, wl:  9500,   fee: 0, currency: 'KHR', total:  9500  },
  { no: 2,  id: '41134653', note: 'Keno-Jackpot',  date: '2026-03-10', bet: 10000, win: 10000, wl: -10000,  fee: 0, currency: 'KHR', total: -10000 },
  { no: 3,  id: '41103619', note: 'Keno',           date: '2026-03-10', bet: 59000, win: 59000, wl:  40800,  fee: 0, currency: 'KHR', total:  40800 },
  { no: 4,  id: '41094236', note: 'Poker',          date: '2026-03-10', bet: 1000,  win: 1000,  wl: -1000,   fee: 0, currency: 'KHR', total: -1000  },
  { no: 5,  id: '41023100', note: 'Fish Game',      date: '2026-03-09', bet: 5000,  win: 5000,  wl:  2500,   fee: 0, currency: 'KHR', total:  2500  },
  { no: 6,  id: '40998745', note: 'Slot Machine',   date: '2026-03-09', bet: 20000, win: 20000, wl: -5000,   fee: 0, currency: 'KHR', total: -5000  },
  { no: 7,  id: '40876543', note: 'Baccarat',       date: '2026-03-08', bet: 15000, win: 15000, wl:  7500,   fee: 0, currency: 'KHR', total:  7500  },
  { no: 8,  id: '40754321', note: 'Dragon Tiger',   date: '2026-03-08', bet: 8000,  win: 8000,  wl: -8000,   fee: 0, currency: 'KHR', total: -8000  },
  { no: 9,  id: '40632100', note: 'Roulette',       date: '2026-03-07', bet: 25000, win: 25000, wl:  12000,  fee: 0, currency: 'KHR', total:  12000 },
  { no: 10, id: '40510987', note: 'Hi-Lo',          date: '2026-03-07', bet: 3000,  win: 3000,  wl: -3000,   fee: 0, currency: 'KHR', total: -3000  },
])

const totalPages = computed(() => Math.ceil(reportData.value.length / itemsPerPage))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return reportData.value.slice(start, start + itemsPerPage)
})

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
  /* letter-spacing: 1px; */
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

/* ── Positive / Negative ── */
/* Must be scoped into td to override Vuetify's tbody td color */
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