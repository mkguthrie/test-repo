import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:8888/nextjs/graphql',
    cache: new InMemoryCache()
});
