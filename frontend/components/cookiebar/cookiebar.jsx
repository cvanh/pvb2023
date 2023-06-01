import { useEffect, useState } from "react";
import { CookieModal, PageBlur } from "./cookiebar.styled";
import { getScripts } from "../../lib/queries/index";
import { useQuery } from "@apollo/client";
import Script from "next/script";

// because caching always breaks we dont use cookies but the localstorage because this is client side and does not break cache
export default function Cookiebar() {
  const { data: { siteOptions: { tracking_cookies: scripts } = {} } = {} } =
    useQuery(getScripts);

  // because we set the cookies we need to rerender the page to hide the cookie bar
  const [Cookies, setCookies] = useState();

  // once the user agreed we set the cookie to the localstorage and we rerender the page
  function setCookie(cookieType) {
    localStorage.setItem("cookie", cookieType);
    setCookies();
  }

  // fetch wich cookies are agreed on. if user didnt already agreed we show the cookie bar
  // useEffect(() => {
  //   const LocalCookie = localStorage.getItem("cookie");
  //   if (LocalCookie && scripts) {
  //     return (
  //       <Script
  //         id="cookie_pixel"
  //         data-testid="cookie_pixel"
  //         strategy="worker"
  //         dangerouslySetInnerHTML={{ _html: scripts[LocalCookie] }}
  //       />
  //     );
  //   }
  // });

  return (
    <>
      <PageBlur />

      <CookieModal>
        <button role="set-cookie-disagree" onClick={() => setCookie("no")}>
          no
        </button>
        <button
          role="set-cookie-functional"
          onClick={() => setCookie("functionalCookies")}
        >
          just what you need
        </button>
        <button
          role="set-cookie-tracking"
          onClick={() => setCookie("trackingCookies")}
        >
          yes
        </button>
      </CookieModal>
    </>
  );
}
