<script setup lang="ts">
import { RouterView } from 'vue-router'
import {
  mdiWifiStrength3,
  mdiNetworkStrength3,
  mdiBattery70
} from "@mdi/js";
</script>

<template>
  <v-app theme="light">
    <v-system-bar color="primary-darken-1">
      <v-icon :icon="mdiWifiStrength3"></v-icon>
      <v-icon :icon="mdiNetworkStrength3"></v-icon>
      <v-icon :icon="mdiBattery70"></v-icon>

      <span class="ms-2">16:02</span>
    </v-system-bar>

    <v-app-bar title="XJTLU Assistant" color="primary" />

    <RouterView />
  </v-app>
</template>

<style scoped></style>
