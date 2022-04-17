import gql from "graphql-tag";

export const GETTRANSACTIONSBYDATE = gql`
query GetTransactionByDate($transactionDateInit: String, $transactionDateEnd: String) {
  getTransactionByDate(transactionDateInit: $transactionDateInit, transactionDateEnd: $transactionDateEnd) {
    id
    account
    description
    category
    reference
    currency
    amount
    status
    transactionDate
  }
}
`;

export const GETTRANSACTIONSBYYD= gql`
query GetTransactionById($getTransactionByIdId: ID) {
  getTransactionById(id: $getTransactionByIdId) {
    account
    description
    transactionDate
  }
}
`;