<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  mdiAccountCircle,
  mdiBell,
  mdiBookOpenVariant,
  mdiCamera,
  mdiCog,
  mdiCricket,
  mdiImage,
  mdiPalette,
  mdiShieldCheck,
  mdiWeb,
} from '@mdi/js';

const temp = ref(['Check Library Seat Occupancy', 'Check Timetable']);
const lang = ref('en');
const item = ref([]);
const langSelect = computed(() => {
  return item.value[0] == 'Language';
});
const langs = new Map([
  ['en', 'English'],
  ['zh-cn', '中文（简体）'],
  ['zh-tw', '中文（繁体）'],
  ['ko-kr', '한국인'],
  ['es', 'Español'],
  ['ja', '日本語'],
  ['ru', 'Русский'],
]);
const items = computed(() => [
  { type: 'subheader', title: 'Other' },
  { title: 'Club / Activities', jump: true, 'prepend-icon': mdiCricket },
  {
    title: 'Campus Life / Resources',
    jump: true,
    'prepend-icon': mdiBookOpenVariant,
  },
  { type: 'divider' },
  { type: 'subheader', title: 'Settings' },
  { title: 'General', jump: true, 'prepend-icon': mdiCog },
  {
    title: 'Notification',
    jump: true,
    to: '/notification',
    'prepend-icon': mdiBell,
  },
  { title: 'Privacy', jump: true, 'prepend-icon': mdiShieldCheck },
  { title: 'Apperance', jump: true, 'prepend-icon': mdiPalette },
  {
    title: 'Language',
    action: langs.get(lang.value),
    value: 'Language',
    'prepend-icon': mdiWeb,
  },
  { type: 'divider' },
  { title: 'About', to: '/about', jump: true, 'prepend-icon': '$info' },
]);
</script>

<template>
  <article>
    <div>
      <div class="d-flex flex-column w-100 align-center pa-4">
        <v-dialog>
          <template #activator="{ props: changeAvatar }">
            <v-avatar v-bind="changeAvatar" class="cursor-pointer" size="64">
              <v-icon :icon="mdiAccountCircle" size="64"></v-icon>
            </v-avatar>
          </template>
          <template #default="{ isActive }">
            <v-card>
              <v-list>
                <v-list-item
                  title="Launch camera"
                  value="0"
                  :prepend-icon="mdiCamera"
                />
                <v-list-item
                  title="Select from gallery"
                  value="1"
                  :prepend-icon="mdiImage"
                />
              </v-list>
              <v-card-actions>
                <v-btn text="Cancel" @click="isActive.value = false" />
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
        <div>John Doe</div>
        <div class="text-subtitle-2">John.Doe@xjtlu.edu.cn</div>
        <div class="text-subtitle-2">ID: XXXXXXX</div>
      </div>
      <v-btn icon="$edit" position="absolute" location="right top" flat />
    </div>
    <v-divider />
    <v-sheet class="mx-auto">
      <v-slide-group class="px-4 py-2">
        <v-slide-group-item v-for="t of temp">
          <v-card height="100" width="150" color="grey-lighten-1" class="ma-2">
            <div
              class="d-flex fill-height align-center justify-center pa-2 text-center"
            >
              {{ t }}
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
    <v-divider />
    <v-list :items="items" item-props v-model:selected="item">
      <template #append="{ item }">
        <v-list-item-action v-if="item.action">
          <span class="text-grey-darken-1">{{ item.action }}</span>
        </v-list-item-action>
        <v-icon v-if="item.jump" icon="$next" />
      </template>
    </v-list>
    <v-dialog v-model="langSelect">
      <v-card>
        <v-card-text>
          <v-radio-group v-model="lang" @update:model-value="item.splice(0)">
            <v-radio v-for="[c, n] of langs" :label="n" :value="c" />
          </v-radio-group>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="item.splice(0)">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div style="height: 24px"></div>
  </article>
</template>
