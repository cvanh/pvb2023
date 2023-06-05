import Head from "next/head";
import Cookiebar from "./cookiebar";
import Header from "./header";
import Footer from "./footer";

const Page = ({ children }) => {
  return (
    <>
      <Header />

      {/* <meta property="og:image" content={} /> */}
      {/* here goes shit like cookies headers and footers */}
      {children}
      {/* <Cookiebar /> */}
      <Footer />
    </>
  );
};

export default Page;
