import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './utils/cache/cache';
import './index.css';
import App from './App';

// apollo client
// used for graphql fetching and state managment
const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/graphql',
  cache,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
