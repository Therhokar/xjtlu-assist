<script setup lang="ts">
import {
  mdiEmail,
  mdiClock,
  mdiCheckCircle,
  mdiDotsHorizontalCircle,
  mdiNotebookEdit,
  mdiCalendarCheck,
  mdiQrcodeScan,
} from '@mdi/js';
import OTPInput from './OTPInput.vue';
import { useMainStore } from '@/stores/main';

const functions = [
  {
    text: 'Mailbox',
    icon: mdiEmail,
    to: '/mail',
  },
  {
    text: 'Courses',
    icon: mdiNotebookEdit,
    to: '/courses',
  },
  {
    text: 'Booking',
    icon: mdiCalendarCheck,
    to: '/booking',
  },
];
const mainStore = useMainStore();
</script>

<template>
  <v-layout full-height style="flex-direction: column">
    <v-sheet class="text-h4 weather pl-4 mt-4 mb-4 pr-4" style="display: flex">
      <div>
        <div class="text-subtitle-2">3 March</div>
        <div class="text-h5">Monday, Week 3</div>
      </div>
      <v-spacer />
      <span><span class="emoji">🌧️</span> 8℃</span>
    </v-sheet>

    <div class="text-subtitle-1 mt-2 pl-4">Timetable</div>
    <v-container>
      <v-row>
        <v-col>
          <v-card disabled title="CPT208" subtitle="Lecture" variant="flat">
            <template #prepend>
              <v-icon :icon="mdiCheckCircle" color="success" />
            </template>
            <v-card-text>11:00-12:50, BSG02</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            variant="flat"
            style="
              background: linear-gradient(
                45deg,
                dodgerblue,
                rgb(var(--v-theme-secondary)) 55%
              );
              color: white;
            "
          >
            <div class="v-card-item">
              <div class="v-card-item__prepend">
                <v-icon
                  :icon="mainStore.checked ? mdiCheckCircle : mdiClock"
                  :color="mainStore.color"
                />
              </div>
              <div class="v-card-item__content">
                <v-card-title>CPT208</v-card-title>
                <v-card-subtitle>Seminar</v-card-subtitle>
              </div>
              <div style="grid-area: append">
                <v-card-actions>
                  <OTPInput answer="RIGHTONE" />
                  <v-btn
                    :icon="mdiQrcodeScan"
                    :disabled="mainStore.checked"
                    to="/scan"
                  ></v-btn>
                </v-card-actions>
              </div>
            </div>
            <v-card-text>14:00-15:50, SA169</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            variant="flat"
            color="primary-darken-1"
            title="CPT202"
            subtitle="Lecture"
          >
            <template #prepend>
              <v-icon :icon="mdiDotsHorizontalCircle" />
            </template>
            <v-card-text>16:00-18:50, SA169</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="text-subtitle-1 mt-2 pl-4">Functions</div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="func in functions">
            <v-item>
              <v-btn
                stacked
                variant="tonal"
                color="secondary"
                rounded="sm"
                size="small"
                location="center"
                :prepend-icon="func.icon"
                :text="func.text"
                :to="func.to"
              />
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-layout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap');

.weather {
  font-family: 'Noto Sans SC';

  .emoji {
    font-family: 'Noto Color Emoji';
  }
}
</style>
