<script setup lang="ts">
import { ref } from "vue";
import { mdiFilterVariant, mdiStar, mdiStarOutline } from "@mdi/js";

const messages = ref([
  {
    title: 'Mail 1',
    subtitle: 'sender1@xjtlu.edu.cn',
    value: 0,
    time: 'time 1',
    starred: false
  },
  {
    title: 'Mail 2',
    subtitle: 'sender2@xjtlu.edu.cn',
    value: 1,
    time: 'time 2',
    starred: true
  }
])
</script>

<template>
  <article>
    <v-toolbar density="compact">
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon :icon="mdiFilterVariant" />
      </v-btn>
    </v-toolbar>
    <v-list>
      <template v-for="message in messages" :key="message.title">
        <v-list-item
          :title="message.title"
          :subtitle="message.subtitle"
          :value="message.value"
        >
          {{ message.time }}
          <template #append>
            <v-btn v-if="message.starred" icon variant="plain" @click="() => {messages[message.value].starred = false}">
              <v-icon :icon="mdiStar" color="#fc0" />
            </v-btn>
            <v-btn v-else icon variant="plain" @click="() => {messages[message.value].starred = true}">
              <v-icon :icon="mdiStarOutline" />
            </v-btn>
          </template>
        </v-list-item>
        <v-divider />
      </template>
    </v-list>
  </article>
</template>