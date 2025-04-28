<script setup lang="ts">
import { mdiChevronLeft } from '@mdi/js';
import { ref } from 'vue';

const retention = ['1 day', '2 days', '3 days', '1 week'];
const curRetention = ref('2 days');
const curSync = ref(1);
</script>

<template>
  <div>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon :icon="mdiChevronLeft" @click="$router.go(-1)" />
      </template>
      <v-app-bar-title>Data Configuration</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-form>
          <v-select
            label="Data retention period"
            :items="retention"
            v-model="curRetention"
          />
          <v-number-input
            label="Sync interval"
            suffix="min"
            :min="1"
            v-model="curSync"
          />
        </v-form>
      </v-container>
    </v-main>
  </div>
</template>
