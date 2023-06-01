import Head from "next/head";
import Cookiebar from "./cookiebar";

const Page = ({ children }) => {
  return (
    <>
      <Head />
      {/* <meta property="og:image" content={} /> */}
      {/* here goes shit like cookies headers and footers */}
      {children}
      {/* <Cookiebar /> */}
    </>
  );
};

export default Page;
