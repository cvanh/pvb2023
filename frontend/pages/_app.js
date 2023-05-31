import { ApolloProvider } from "@apollo/client";
import "../styles/index.css";
import client from "../lib/apolloclient/index";
import { ThemeProvider } from "styled-components";
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
