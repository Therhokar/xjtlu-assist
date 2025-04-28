<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useMainStore } from '../stores/main';

const mainStore = useMainStore();
onMounted(() => {
  mainStore.theme = 'dark';
  if (
    'toggleNavbarTheme' in window &&
    typeof window.toggleNavbarTheme == 'function'
  ) {
    window.toggleNavbarTheme('invert()');
  }
});
onUnmounted(() => {
  mainStore.theme = 'light';
  if (
    'toggleNavbarTheme' in window &&
    typeof window.toggleNavbarTheme == 'function'
  ) {
    window.toggleNavbarTheme(null);
  }
});
</script>

<template>
  <v-theme-provider theme="dark">
    <v-app-bar flat>
      <template #prepend>
        <v-app-bar-nav-icon icon="$prev" @click="$router.go(-1)" />
      </template>
    </v-app-bar>

    <v-main
      class="fill-height d-flex align-center justify-center pb-16"
      style="background: rgb(33 33 33)"
    >
      <div class="scan-area"></div>
    </v-main>
  </v-theme-provider>
</template>

<style scoped>
.scan-area {
  border: 1px solid white;
  height: 300px;
  width: 300px;
}
</style>
