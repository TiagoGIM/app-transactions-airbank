<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from '@/components/NavBar.vue';
import Table from '@/components/Table.vue';
import { ref } from 'vue';
const placement = ref('top-right')
</script>

<template>
<n-loading-bar-provider>
<n-message-provider :placement="placement">

<NavBar/>
<Table></Table>
</n-message-provider>
</n-loading-bar-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
