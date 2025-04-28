<script setup lang="ts">
import { mdiMessageOutline, mdiAccountOutline } from '@mdi/js';
import Home from '@/components/Home.vue';
import Messages from '@/components/Messages.vue';
import Management from '@/components/Management.vue';
import { useMainStore } from '@/stores/main';

const mainStore = useMainStore();
</script>

<template>
  <div>
    <v-main>
      <v-window v-model="mainStore.window">
        <v-window-item class="fill-height">
          <Home />
        </v-window-item>

        <v-window-item class="fill-height">
          <Messages />
        </v-window-item>

        <v-window-item class="fill-height">
          <Management />
        </v-window-item>
      </v-window>
    </v-main>

    <v-bottom-navigation
      base-color="grey-darken-1"
      v-model="mainStore.window"
      mandatory="force"
      elevation="0"
      color="secondary"
      grow
      style="bottom: 24px"
    >
      <v-btn value="0"><v-icon size="36" icon="$homeIcon" /></v-btn>
      <v-btn value="1">
        <span
          style="
            color: white;
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: radial-gradient(
              rgb(var(--v-theme-secondary)) 36%,
              white 37%,
              white 40%,
              rgb(var(--v-theme-secondary)) 41%,
              rgb(var(--v-theme-secondary))
            );
            border-radius: 28px;
          "
        >
          <v-icon :icon="mdiMessageOutline"
        /></span>
      </v-btn>
      <v-btn value="2"><v-icon :icon="mdiAccountOutline" size="36" /></v-btn>
    </v-bottom-navigation>
  </div>
</template>

<style></style>
