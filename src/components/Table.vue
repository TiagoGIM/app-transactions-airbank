<template>
  <n-date-picker
    v-model:value="daterange"
    type="daterange"
    @update:value="onChange"
    placement="bottom"
  />
<n-dialog-provider>
  
</n-dialog-provider>
  <p v-if="loading">loading...</p>

  <n-data-table
    v-else
    :columns="collumns"
    striped
    :loading="loading"
    :data="result.getTransactionByDate"
    :pagination="pagination"
    :bordered="false"
  />
</template>

<script setup lang="ts">
import { computed, h, reactive, ref } from 'vue'
import { DataTableColumns } from 'naive-ui'
import { useQuery } from '@vue/apollo-composable'
import { GETTRANSACTIONSBYDATE } from '../api/api-graphql';
import { useMessage} from 'naive-ui'
import MyDialog from '@/components/MyDialog.vue'
const daterange = ref(null)

const message = useMessage()

const createColumns = ({
  getDetails
}: {
  getDetails
: (row: Transaction) => void
}): DataTableColumns<Transaction> => {
  return [
    {
      title: 'Account',
      key: 'account'
    },
        {
      title: 'Description',
      key: 'description'
    },
    {
      title: 'Date',
      key: 'transactionDate'
    },
        {
      title: 'Amount',
      key: 'amount'
    },
    {
      title: 'Action',
      key: 'actions',
      render (row) {
        return h(
          MyDialog ,
          {
           transaction:row
          },
          { default: () => 'Details' }
        )
      }
    }
  ]
}

const collumns = createColumns({
  getDetails: (row: Transaction) => {
  }
})


const dateToSearch = reactive({
    transactionDateInit: '',
    transactionDateEnd: ''
})

const onChange = (e: any) => {
dateToSearch.transactionDateInit = new Date(e[0]).toISOString();
dateToSearch.transactionDateEnd = new Date(e[1]).toISOString();
console.table(dateToSearch)
console.log("Doing a new search")
}


const {result, loading, error} = useQuery(GETTRANSACTIONSBYDATE ,dateToSearch )
const data = computed(() : Transaction[] => {
  return result.value?.getTransactionByDate || []
})


type Transaction = {
  id: string,
  account: string
  description: string
  transactionDate: string
}


const pagination = {
        pageSize: 10
      }
</script>