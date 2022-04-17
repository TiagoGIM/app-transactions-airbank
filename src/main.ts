import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import naive from "naive-ui";
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:3300/api/v1'
})

const app = createApp(App);
app.provide(DefaultApolloClient, apolloClient)
app.use(naive);
app.mount('#app')