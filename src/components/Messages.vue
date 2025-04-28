<script setup lang="ts">
import { mdiArrowUp, mdiPaperclip } from '@mdi/js';
import { ref } from 'vue';
import AskMessage from './messages/AskMessage.vue';
import AnswerMessage from './messages/AnswerMessage.vue';

const messages = ref<string[]>([]);
const suggest = ref(false);

function askPlan(ev: Event) {
  messages.value.push('ask_plan');
  suggest.value = false;
  setTimeout(function () {
    messages.value.push('answer_plan');
  }, 500);
}

const schedule = [
  {
    time: '9:00-10:00',
    task: 'CPT204 Test Prep',
  },
  {
    time: '10:00-11:30',
    task: 'HCI Prototype Work',
  },
  {
    time: '11:30-12:00',
    task: 'Break & Lunch',
  },
  {
    time: '13:00-14:00',
    task: 'Post Lab Review & Break',
  },
  {
    time: '14:00-16:00',
    task: 'SpringBoot Project',
  },
  {
    time: '16:00-17:30',
    task: 'HCI Group Sync',
  },
  {
    time: '17:30-19:00',
    task: 'Dinner & Rest',
  },
  {
    time: '19:00-21:00',
    task: 'OOP Review',
  },
];
</script>

<template>
  <v-layout style="height: calc(100vh - 104px)" class="flex-column">
    <v-container class="overflow-y-scroll flex-1-1">
      <v-row v-for="(msg, i) in messages">
        <transition appear>
          <v-col :class="{ 'd-flex': true, 'justify-end': i % 2 == 0 }">
            <AskMessage v-if="msg.startsWith('ask')" />
            <AnswerMessage v-else :data="schedule" />
          </v-col>
        </transition>
      </v-row>
      <v-row v-if="messages[messages.length - 1]?.startsWith('ask')">
        <v-col class="d-flex justify-center">
          <v-progress-circular indeterminate />
        </v-col>
      </v-row>
    </v-container>

    <v-sheet v-if="suggest" class="pa-2 w-100 bg-white flex-0-0" elevation="2">
      <v-chip @click="askPlan">Study plan</v-chip>
    </v-sheet>

    <v-sheet
      class="pa-2 w-100 d-flex bg-white flex-wrap align-center flex-0-0"
      :elevation="suggest ? 0 : 2"
    >
      <v-btn :icon="mdiPaperclip" variant="plain" />
      <v-textarea
        auto-grow
        rows="1"
        clearable
        hide-details
        @update:focused="suggest = true"
        v-click-outside="
          () => {
            suggest = false;
          }
        "
      />
      <v-btn :icon="mdiArrowUp" variant="plain" />
    </v-sheet>
  </v-layout>
</template>
