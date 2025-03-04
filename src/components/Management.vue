<script setup lang="ts">
import { mdiAccountCircle } from "@mdi/js";
</script>

<template>
  <article>
    <v-list lines="two">
      <v-list-item title="John Doe" subtitle="John.Doe@xjtlu.edu.cn" value="0">
        <template #prepend>
          <v-avatar>
            <v-icon :icon="mdiAccountCircle"></v-icon>
          </v-avatar>
        </template>
      </v-list-item>
      <v-list-item value="1">Settings</v-list-item>
      <v-list-item value="2">About</v-list-item>
    </v-list>
  </article>
</template>