<script setup lang="ts">
import { RouterView } from 'vue-router';
import { mdiWifiStrength3, mdiNetworkStrength3, mdiBattery70 } from '@mdi/js';
import { useMainStore } from '@/stores/main';

const mainStore = useMainStore();
</script>

<template>
  <v-app theme="light">
    <v-system-bar color="primary-darken-1" :theme="mainStore.theme">
      <span class="ms-2">14:02</span>
      <v-spacer />
      <v-icon :icon="mdiNetworkStrength3" class="mr-1" />
      <v-icon :icon="mdiWifiStrength3" class="mr-1" />
      <v-icon :icon="mdiBattery70" />
    </v-system-bar>

    <RouterView v-slot="{ Component, route }">
      <Transition :name="<string>route.meta.transition">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </v-app>
</template>
