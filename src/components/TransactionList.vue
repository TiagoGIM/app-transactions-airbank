<template>
  <n-space justify="center" align="center" item-style="margin: 18px 0px">
    <n-layout-content>
      <n-h3>
        <n-text type="tertiary"> Select by date </n-text>
      </n-h3>
      
    </n-layout-content>
    <n-layout-content>
      <n-date-picker
        v-model:value="daterange"
        type="daterange"
        @update:value="onChange"
        placement="bottom"
      />
    </n-layout-content>
  </n-space>
  <div v-if="loading">
    <SkellthonTable></SkellthonTable>
  </div>
  <n-data-table
    v-else
    :columns="collumns"
    striped
    :loading="loading"
    :data="result.getTransactionByDate"
    :pagination="pagination"
    :bordered="false"
    :row-class-name="rowClassName"
  />
</template>

<script setup lang="ts">
import { h, reactive, ref, watch } from "vue";
import { DataTableColumns } from "naive-ui";
import { useQuery } from "@vue/apollo-composable";
import { GETTRANSACTIONSBYDATE } from "../api/api-graphql";
import { useMessage, useLoadingBar } from "naive-ui";
import ModalDetail from "@/components/ModalDetail.vue";
import SkellthonTable from "./SkellthonTable.vue";
const daterange = ref(null);
const message = useMessage();
const loadingBar = useLoadingBar();

const createColumns = ({
  rowClassName,
}: {
  rowClassName: (row: Transaction, index: number) => string;
}): DataTableColumns<Transaction> => {
  return [
    {
      title: "Account",
      key: "account",
    },
    {
      title: "Description",
      key: "description",
    },
    {
      title: "Date",
      key: "transactionDate",
    },
    {
      title: "Amount",
      key: "amount",
      className: "amountClass",
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          ModalDetail,
          {
            transaction: row,
          },
          { default: () => "Details" }
        );
      },
    },
  ];
};

const rowClassName = (row: Transaction, index: number) => {
  if (row.amount > 0) {
    return "negative";
  }
  return "";
};

const collumns = createColumns({
  rowClassName,
});

const dateToSearch = reactive({
  transactionDateInit: "",
  transactionDateEnd: "",
});

const onChange = (e: any) => {
 try {
    dateToSearch.transactionDateInit = new Date(e[0]).toISOString();
    dateToSearch.transactionDateEnd = new Date(e[1]).toISOString();
  }catch 
{
  message.info("returned all transactions")
  dateToSearch.transactionDateInit = "";
  dateToSearch.transactionDateEnd = "";
}

};

const { result, loading, error } = useQuery(GETTRANSACTIONSBYDATE, dateToSearch);

watch([result , loading] , ([valueR, valueL])=> {
  
  if(valueR?.getTransactionByDate.length === 0)
  {
    message.warning("No transactions were found for this period.")
  }
  if(valueL)
  {
    loadingBar.start();
  }
  else
  {
    loadingBar.finish();
  }
})

type Transaction = {
  id: string;
  account: string;
  description: string;
  transactionDate: string;
  amount: number;
};

const pagination = {
  pageSize: 7,
};
</script>

<style>
:deep(.negative td) {
  color: rgba(255, 0, 0, 0.75) !important;
}
:deep(.amountClass) {
  color: rgba(0, 128, 0, 0.75) !important;
}
.n-h3 {
  margin-bottom: 0!important;
   background-color: #242427;
}
</style>
