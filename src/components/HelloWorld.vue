<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <button type="button" @click="count++">bind click: {{ count }}</button>
    <h1 class="text-3xl font-bold underline">
     {{ msg }}
  </h1>
</template>


<style>

</style>
