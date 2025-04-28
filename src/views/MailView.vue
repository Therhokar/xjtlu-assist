<script setup lang="ts">
import { ref } from 'vue';
import { mdiDotsVertical } from '@mdi/js';
import { Pie } from 'vue-chartjs';
import { Chart, ArcElement, Colors } from 'chart.js';
import ChartDataLabels, { type Context } from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, Colors, ChartDataLabels);
const data = {
  labels: ['Subject email', 'Private email', 'School information'],
  datasets: [{ data: [3, 2, 4] }],
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      formatter: function (value: any, context: Context) {
        return `${context.chart.data.labels?.[context.dataIndex]}: ${value}`;
      },
    },
    tooltip: {
      enabled: false,
    },
  },
};

const messages = ref([
  { type: 'subheader', title: 'Important notification' },
  {
    title: 'Subject Notification',
    value: 0,
    subtitle:
      '1. <b>CPT204 ICT1</b> will take place in SC176 at <b>2 PM tomorrow</b>.<br>2. MEC202 proposal DDL at 12:00, 3/6',
  },
  {
    title: 'High Priority',
    value: 1,
    subtitle:
      '1. <b>Group Project Workshop:</b> Team presentations are scheduled for <b>10 AM - 12 PM, 3/5</b>.<br>2. Going Office Hour: EB322 <b>2-4 PM, 3/5</b>',
  },
  {
    title: 'Personal Email',
    value: 2,
    subtitle:
      '1. MEC202 Lab partner introduce email<br>2. Notification from <b>Industry Mentor</b>',
  },
  { type: 'divider' },
  { type: 'subheader', title: 'Activity' },
  {
    title: 'Your interest',
    subtitle:
      '1. <b>Guest Lecture:</b> A seminar on "Future Trends in SAT" at <b>3 PM on 3/5</b>.<br>2. <b>Innovation Workshop:</b> Lectures <b>6-8 PM, 3/5</b>',
    value: 3,
  },
  { type: 'divider' },
  { type: 'subheader', title: 'Summary' },
  {
    subtitle:
      '<b>Key Reminders:</b> Attend CPT204 ICT1, submit assignments, and prepare for the midterm.<br><b>Upcoming Activities:</b> Participate in recap sessions.',
    value: 4,
  },
]);
</script>

<template>
  <div>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon icon="$prev" @click="$router.go(-1)" />
      </template>
      <v-app-bar-title>Email Assistant</v-app-bar-title>
      <template #append>
        <v-btn :icon="mdiDotsVertical" to="/mail/config" />
      </template>
    </v-app-bar>

    <v-main>
      <div class="px-16">
        <Pie :data="data" :options="options" />
      </div>
      <v-list :items="messages" lines="three" item-props>
        <template #subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
    </v-main>
  </div>
</template>
