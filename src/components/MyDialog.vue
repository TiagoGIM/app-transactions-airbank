<template>
  <n-button @click="showModal = true">
    Details
  </n-button>
  <n-modal v-model:show="showModal"
      style="width: 600px"
      preset="card"
      title=Details
      class="custom-card"
      :bordered="false"
      size="huge"   
      aria-modal="true"
    >
  <n-space justify="center" vertical >
   <li>
     Description : {{props.transaction.description}}
     </li> 
     <li>Amount :{{props.transaction.amount}}</li>
    
    <li>Transation Date : {{props.transaction.transactionDate}} </li>

  </n-space>


      
      <template #footer>
        Footer
      </template>
    </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps(['transaction'])

console.log(props.transaction)

  const showModal = ref(false)
  console.log(showModal.value)

</script>