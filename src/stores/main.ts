import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('counter', () => {
  const checked = ref(false);
  const color = computed(() => (checked.value ? 'success' : 'white'));
  const window = ref(0);
  const theme = ref('light');

  return { checked, color, window, theme };
});
