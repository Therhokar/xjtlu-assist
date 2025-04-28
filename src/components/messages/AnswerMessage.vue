<script setup lang="ts">
const props = defineProps<{ data: { time: string; task: string }[] }>();
</script>

<template>
  <v-sheet rounded color="#f0f0f0" class="pa-2">
    <span class="d-block text-subtitle-2 text-grey-darken-2 pa-1"
      >Assistant</span
    >
    <v-table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="slot in data">
          <td>{{ slot.time }}</td>
          <td>{{ slot.task }}</td>
        </tr>
      </tbody>
    </v-table>
    <div class="d-flex justify-end">
      <v-btn variant="text" color="secondary" class="mt-2"
        >ADD TO CALENDAR</v-btn
      >
    </div>
  </v-sheet>
</template>
