import Head from "next/head";
import Cookiebar from "./cookiebar";
import Header from "./header";

const Page = ({ children }) => {
  return (
    <>
      <Header />

      {/* <meta property="og:image" content={} /> */}
      {/* here goes shit like cookies headers and footers */}
      {children}
      {/* <Cookiebar /> */}
    </>
  );
};

export default Page;
