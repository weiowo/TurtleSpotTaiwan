import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: '/api/activities',
    fetchOptions: { method: 'POST' },
  }),
  cache: new InMemoryCache(),
});

export default client;
