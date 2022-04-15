import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import naive from "naive-ui";
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import { DefaultApolloClient } from '@vue/apollo-composable'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:3300/api/v1'
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
const app = createApp(App);
app.provide(DefaultApolloClient, apolloClient)
app.use(naive);
app.mount('#app')