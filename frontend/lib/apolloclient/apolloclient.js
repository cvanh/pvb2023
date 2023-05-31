import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// we need fetch for jest because node doesnt have it yet
import fetch from "cross-fetch";

// create a apollo client that the sevrer side rendering can use and the apollo provider
const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_API_URL, fetch }),
  cache: new InMemoryCache(),
});

export default client;
