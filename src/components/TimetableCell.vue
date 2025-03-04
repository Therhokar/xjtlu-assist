<script setup lang="ts">
import { ref } from 'vue'
import { Space, Cell, Icon } from 'vant'

const props = defineProps<{
  course: string,
  time?: string,
  room?: string,
  signed?: boolean,
  active?: boolean,
}>()

const name = ref<string>()
const color = ref<string>()

if (props.signed) {
  name.value = 'checked'
  color.value = 'green'
} else if (!props.time) {
  name.value = 'clear'
  color.value = 'red'
} else if (props.active) {
  name.value = 'underway'
  color.value = 'dodgerblue'
} else {
  name.value = 'more'
  color.value = 'grey'
}
</script>

<template>
  <Cell
    :label="room || ''"
    :is-link="active && !signed"
    :value="active ? (signed ? '' : 'Sign in') : ''">
    <template #title>
      <Space>
        <Icon :name="name" :color="color" />
        <span class="custom-title">{{ course }}</span>
        <span v-if="time" class="custom-title-gray">{{ time }}</span>
      </Space>
    </template>
  </Cell>
</template>

<style scoped>
.custom-title-gray {
  color: gray;
}
</style>
