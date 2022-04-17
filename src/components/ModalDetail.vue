<template>
  <n-button @click="showModal = true" secundary type="tertiary" strong round>
    Details
  </n-button>
  <n-modal
    v-model:show="showModal"
    style="width: 350px"
    preset="card"
    title="Details"
    class="custom-card"
    :bordered="false"
    size="huge"
    aria-modal="true"
  >
    <n-space justify="center" vertical>
      <div>
        <n-text strong depth="3">Description : </n-text
        ><n-text italic> {{ props.transaction.description }}</n-text>
      </div>

      <div >
        <n-text depth="1">Amount : </n-text
        ><n-text>{{ props.transaction.amount }}  </n-text>
      <span class="mx-1" />
        <n-text>{{ props.transaction.currency }}</n-text>
      </div>
      <div>
        <n-text depth="1">Category : </n-text
        ><n-text>{{  validateProp(props.transaction.categoty) }}</n-text>
      </div>
      <div>
        <n-text depth="1">Reference : </n-text
        ><n-text>{{  validateProp(props.transaction.reference) }}</n-text>
      </div>
      <div>
        <n-text depth="1">Status : </n-text
        ><n-text>{{ validateProp(props.transaction.status)}}</n-text>
      </div>
    </n-space>

    <template #footer>
      <div>
        <n-text depth="1">Date </n-text
        ><n-text>{{ getTransactionData }}</n-text>
      </div>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
const props = defineProps(["transaction"]);
const getTransactionData = computed(() =>  {
  return props.transaction.transactionDate.split("-").join("/");
  });

const validateProp = (prop: string) => {
  if (prop === null || prop === undefined || prop === "") {
    return " no data";
  }
  return prop;
};
const showModal = ref(false);
</script>
