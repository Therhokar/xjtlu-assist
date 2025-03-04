<script setup lang="ts">
import { ref } from "vue";
import {
  mdiCheckCircle,
  mdiDotsHorizontalCircle,
  mdiClock,
  mdiChevronRight,
  mdiPlus as $plus,
  mdiClose as $close
} from "@mdi/js";

const open = ref(false)
</script>

<template>
  <v-layout full-height>
    <v-list class="w-100">
      <v-list-subheader>Timetable</v-list-subheader>
      <v-list-item title="CPT208" subtitle="Lecture" disabled>
        <template #prepend>
          <v-icon :icon="mdiCheckCircle" color="success" />
        </template>
        11:00-12:50, BSG02
      </v-list-item>
      <v-list-item title="CPT208" subtitle="Seminar">
        <template #prepend>
          <v-icon :icon="mdiClock" color="info" />
        </template>
        <template #append>
          <v-btn :append-icon="mdiChevronRight" variant="plain">Sign in</v-btn>
        </template>
        14:00-15:50, SA169
      </v-list-item>
      <v-list-item
        title="CPT202"
        subtitle="Lecture"
        :prepend-icon="mdiDotsHorizontalCircle"
      >16:00-18:50, SA169</v-list-item>
      <v-divider />
      <v-list-subheader title="Reservations" />
      <v-list-item
        title="CPT208 Group meeting"
        subtitle="Tomorrow, 15:00-17:00"
      >CB3XX</v-list-item>
      <v-divider />
      <v-list-subheader title="Explore" />
      <v-list-item
        title="Xinyu Gourmet Club muffin making event"
        subtitle="Mar 05, 19:30-21:00, BS394"></v-list-item>
      <v-list-item
        title="Jueyi Chess association weekly activity"
        subtitle="Mar 05, 18:00-22:00, FB264"></v-list-item>
    </v-list>

    <v-fab
      app
      location="bottom right"
      :color="open ? '' : 'secondary'"
      size="large"
      icon
      @click="() => {open = !open}"
    >
      <v-icon :icon="open ? $close : $plus" />
      <v-speed-dial v-model="open" location="top center" activator="parent">
        <v-btn key="1" color="success" icon>
          <v-icon size="24">$success</v-icon>
        </v-btn>
        
        <v-btn key="2" color="info" icon>
          <v-icon size="24">$info</v-icon>
        </v-btn>
        
        <v-btn key="3" color="warning" icon>
          <v-icon size="24">$warning</v-icon>
        </v-btn>
        
        <v-btn key="4" color="error" icon>
          <v-icon size="24">$error</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-fab>
  </v-layout>
</template>