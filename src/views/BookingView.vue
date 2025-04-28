<script setup lang="ts">
import { ref } from 'vue';
import { mdiMapMarker, mdiLineScan } from '@mdi/js';
import { Bar } from 'vue-chartjs';
import {
  Chart,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import type { VItemGroup } from 'vuetify/components';

const buildings = [
  ['FB', 'CB', 'SA', 'SB'],
  ['SC', 'SD', 'PB', 'MA'],
  ['MB', 'EB', 'EE', 'IR'],
  ['IA', 'HS', 'BS', 'DB'],
  ['ES', 'AS', 'GYM', ''],
];
const selected = ref<string>();
const loading = ref(false);

const freeTime = ref(3);
const seatRange = [5, 10, 20, 30, 50];
const freeSeats = ref(20);
const amenities = ['Outlets', 'Printer', 'Water'];

Chart.register(
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors,
  ChartDataLabels
);
Chart.defaults.backgroundColor;

const seats = [51, 280, 24, 95];
const occupied = [249, 20, 76, 5];
const rooms = ['G05', 'G03', 'G02', 'G01'];
const data = {
  labels: rooms,
  datasets: [
    { data: seats, label: 'available' },
    { data: occupied, label: 'occupied' },
  ],
};
const options = {
  responsive: true,
  indexAxis: <'y'>'y',
  scales: { x: { stacked: true }, y: { stacked: true } },
  plugins: { tooltip: { enabled: false } },
};

function onUpdateSelected(s: string) {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 600);
}
</script>

<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon icon="$prev" @click="$router.go(-1)" />
      <v-app-bar-title>Seat Occupancy Inquiry</v-app-bar-title>
      <v-btn :icon="mdiMapMarker" to="/booking/location" />
      <v-btn :icon="mdiLineScan" to="/booking/scan" />
    </v-app-bar>

    <v-main>
      <v-container>
        <v-table>
          <caption class="text-subtitle-1 mb-2 text-left">
            Click on a building to view rooms
          </caption>
          <v-item-group
            v-model="selected"
            tag="tbody"
            ref="group"
            @update:model-value="onUpdateSelected"
          >
            <tr v-for="row of buildings">
              <template v-for="cell of row">
                <v-item
                  v-if="cell"
                  :value="cell"
                  v-slot="{ toggle, selectedClass }"
                >
                  <td
                    @click="toggle"
                    :class="{
                      'text-secondary': selectedClass,
                      'position-relative': true,
                      'cursor-pointer': true,
                    }"
                  >
                    <div class="td__underlay"></div>
                    {{ cell }}
                  </td>
                </v-item>
                <td v-else></td>
              </template>
            </tr>
          </v-item-group>
        </v-table>

        <div class="text-subtitle-1 mb-2">Filters</div>
        <v-form>
          <v-number-input
            :min="1"
            :max="6"
            v-model="freeTime"
            suffix="hr"
            label="Free in"
            hide-details
          />
          <v-select
            :items="seatRange"
            label="Minimum free seats"
            v-model="freeSeats"
            hide-details
          />
          <v-select :items="amenities" label="Amenities" chips multiple />
        </v-form>

        <div class="text-subtitle-1 mb-2">
          Current building: <span class="text-secondary">{{ selected }}</span>
        </div>
        <Bar :data="data" :options="options" v-if="selected && !loading" />
        <v-row v-if="loading">
          <v-col class="d-flex justify-center">
            <v-progress-circular indeterminate />
          </v-col>
        </v-row>
        <div class="text-body-1 mt-2 mb-6">
          For more detailed recommendations, you can ask AI for suggestions.
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<style scoped>
.td__underlay {
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: var(--v-activated-opacity);
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
td.text-secondary .td__underlay {
  background: currentColor;
}
</style>
