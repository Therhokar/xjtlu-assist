<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";
import { mdiMessageText, mdiAccountWrench } from '@mdi/js'
import Schedule from '@/components/Schedule.vue'
import Messages from "@/components/Messages.vue";
import Management from '@/components/Management.vue'

const window = ref(0);
const titles = ['Schedule', 'Messages', 'Management']
const theme = useTheme()
</script>

<template>
  <v-main theme="light">
    <v-window v-model="window" class="fill-height">
      <v-window-item class="fill-height">
        <Schedule />
      </v-window-item>
      
      <v-window-item class="fill-height">
        <Messages />
      </v-window-item>
      
      <v-window-item class="fill-height">
        <Management />
      </v-window-item>
    </v-window>
    
    <v-bottom-navigation v-model="window" bg-color="primary-lighten-2">
      <v-btn value="0" prepend-icon="$calendar" stacked>Schedule</v-btn>
      <v-btn value="1" :prepend-icon="mdiMessageText" stacked>Messages</v-btn>
      <v-btn value="2" :prepend-icon="mdiAccountWrench" stacked>Management</v-btn>
    </v-bottom-navigation>
  </v-main>
</template>