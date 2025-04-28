<script setup lang="ts">
import { ref, useTemplateRef, type Ref } from 'vue';
import { mdiFormTextboxPassword } from '@mdi/js';
import { useMainStore } from '@/stores/main';
import type { VOtpInput } from 'vuetify/components';

const props = defineProps<{
  answer: string;
}>();
const otp = useTemplateRef<VOtpInput>('otp');
const mainStore = useMainStore();
const error = ref(false);
const checking = ref(false);

function onFinish(value: string, isActive: Ref<boolean>) {
  setTimeout(() => {
    checking.value = false;
    if (value == props.answer) {
      mainStore.checked = true;
      isActive.value = false;
    } else {
      error.value = true;
      otp.value?.reset();
    }
  }, 500);
}
</script>

<template>
  <v-dialog>
    <template #activator="{ props: enterCode }">
      <v-btn
        :icon="mdiFormTextboxPassword"
        v-bind="enterCode"
        :disabled="mainStore.checked"
      />
    </template>
    <template #default="{ isActive }">
      <v-card>
        <v-card-text class="d-flex flex-column align-center">
          <v-otp-input
            ref="otp"
            length="8"
            variant="underlined"
            type="text"
            :error="error"
            @finish="
              value => {
                error = false;
                checking = true;
                onFinish(value, isActive);
              }
            "
          />
          <v-progress-circular v-if="checking" indeterminate />
        </v-card-text>
        <v-card-actions>
          <v-btn text="Cancel" @click="isActive.value = false" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
