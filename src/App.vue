<script setup lang="ts">
import { darkTheme } from "naive-ui";
import NavBar from "@/components/NavBar.vue";
import TransactionList from "@/components/TransactionList.vue";
import { ref } from "vue";
const placement = ref("top-right");
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-loading-bar-provider>
      <n-message-provider :placement="placement">
        <NavBar />
        <div class="flex flex-col justify-center wrapper">
          <TransactionList />
        </div>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style>
html{ background-color: #242427; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  height: 100%;
}
.wrapper {
  /*min-height: calc(100% - 86px); */
  
  margin: 0 auto;
  max-width: 960px;
  min-width: 320px;
}
</style>
