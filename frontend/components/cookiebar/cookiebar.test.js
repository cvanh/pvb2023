// import renderer from "react-test-renderer";
import { getScripts } from "../../lib/queries";
import Cookiebar from "./index";
import { screen, render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";

const mocks = [
  {
    request: {
      query: getScripts,
    },

    result: () => {
      return {
        data: {
          siteOptions: {
            tracking_cookies: {
              functionalCookies:
                '<script>console.log("i am a funtional cookie")</script/>',
              trackingCookies:
                '<script>console.log("i am a tracking cookie")</script/>',
            },
          },
        },
      };
    },
  },
];

describe("cookiebar should work", () => {
  it("user disagree's with all the cookies", () => {
    // remove existing cookies
    localStorage.clear();

    render(
      <MockedProvider mocks={mocks}>
        <Cookiebar />
      </MockedProvider>
    );

    // we click the disagree button of the cookies
    screen.getByRole("set-cookie-disagree").click();

    // check if the correct cookie has been set
    expect(localStorage.getItem("cookie")).toBe("no");
  });

  it("user only wants the functional cookies", () => {
    // remove existing cookies
    localStorage.clear();

    render(
      <MockedProvider mocks={mocks}>
        <Cookiebar />
      </MockedProvider>
    );
    // click the option that says the user only wants the functional cookies
    screen.getByRole("set-cookie-functional").click();

    // check if the correct cookie has been set
    expect(localStorage.getItem("cookie")).toBe("functionalCookies");

    // expect(screen.getByTestId("cookie_pixel")).exists();
  });

  it("user wants all the cookies", () => {
    // remove existing cookies
    localStorage.clear();

    render(
      <MockedProvider mocks={mocks}>
        <Cookiebar />
      </MockedProvider>
    );
    // we click the disagree button of the cookies
    screen.getByRole("set-cookie-tracking").click();

    // check if the correct cookie has been set
    expect(localStorage.getItem("cookie")).toBe("trackingCookies");
  });
});
