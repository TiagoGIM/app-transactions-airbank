<template>
  <n-button @click="showModal = true" secundary type="tertiary" strong round> Details </n-button>
  <n-modal
    v-model:show="showModal"
    style="width: 600px"
    preset="card"
    title="Details"
    class="custom-card"
    :bordered="false"
    size="huge"
    aria-modal="true"
  >
    <n-space justify="center" vertical>
      <div>
        <n-text strong depth="3">Description  : </n-text ><n-text italic> {{  props.transaction.description }}</n-text>
      </div>
      
      <div>
        <n-text depth="1">Amount : </n-text><n-text>{{ props.transaction.amount }}</n-text>
      </div>


    </n-space>

    <template #footer>       <div>
        <n-text depth="1">Date  </n-text><n-text>{{ props.transaction.transactionDate }}</n-text>
      </div> </template>
  </n-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps(["transaction"]);
const showModal = ref(false);
</script>
