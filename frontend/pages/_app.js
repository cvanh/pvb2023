// apollo/graphql stuff
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloclient/index";
import { ThemeProvider } from "styled-components";

// global styling 
import theme from "../theme";
import GlobalStyles from "../components/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component client={client} {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
