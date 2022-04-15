<template>
  <n-data-table
    :columns="collumns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
  />
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { NButton, DataTableColumns } from 'naive-ui'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag';



const createColumns = ({
  play
}: {
  play: (row: Transaction) => void
}): DataTableColumns<Transaction> => {
  return [
    {
      title: 'Id',
      key: 'id'
    },
    {
      title: 'account',
      key: 'account'
    },
        {
      title: 'description',
      key: 'description'
    },
    {
      title: 'date',
      key: 'transactionDate'
    },
    {
      title: 'Action',
      key: 'actions',
      render (row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    }
  ]
}

const collumns = createColumns({
  play: (row: Transaction) => {
    console.log(row)
  }
})

const transactionsQuery = gql`
query GetTransactionByDate($transactionDateInit: String, $transactionDateEnd: String) {
  getTransactionByDate(transactionDateInit: $transactionDateInit, transactionDateEnd: $transactionDateEnd) {
    id
    account
    description
    transactionDate
  }
}
`
const {result, loading, error} = useQuery(transactionsQuery, {
  variables: {
    transactionDateInit: '2020-01-01',
    transactionDateEnd: '2020-01-31'
  }
});

const dataResulted = computed(() => {
  if (loading.value) return []
  if (error.value) return []
  return result.value.getTransactionByDate
})


type Transaction = {
  id: string,
  account: string
  description: string
  transactionDate: string
}

const data: Transaction[] = dataResulted.value || [];

const pagination = {
        pageSize: 10
      }
</script>