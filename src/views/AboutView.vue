<script setup lang="ts">
const contributors = [
  { type: 'subheader', title: 'Leader' },
  { title: 'Wangzi Zeng' },
  { type: 'divider' },
  { type: 'subheader', title: 'Design and Prototype' },
  { title: 'Wangzi Zeng', subtitle: 'Mailbox page and subpage' },
  { title: 'Jinxiang Chen', subtitle: 'Logo, Booking page and subpages' },
  { title: 'Yu Yang', subtitle: 'Main page and AI chat page' },
  { title: 'Jiawei Zhang', subtitle: 'Logo and Management Page' },
  { title: 'Haobo Zhang', subtitle: 'Courses page' },
  { type: 'divider' },
  { type: 'subheader', title: 'Development' },
  { title: 'Yu Yang' },
  { type: 'divider' },
  { type: 'subheader', title: 'Open-source projects' },
  { title: 'Vue.js' },
  { title: 'Vue Router' },
  { title: 'Pinia' },
  { title: 'Vuetify' },
  { title: 'Chart.js' },
  { title: 'vue-chartjs', class: 'mb-6' },
];
</script>

<template>
  <div>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon icon="$prev" @click="$router.go(-1)" />
      </template>
      <v-app-bar-title>About</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-list :items="contributors" item-props />
    </v-main>
  </div>
</template>
