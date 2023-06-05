import styled from "styled-components";
import { device } from "../../theme";

export const SMenu = styled.div`
  background-color: white;
  margin-top: 6px;

  .menu {
    display: flex;
    ul {
      list-style-type: none;
      column-gap: 100px;
    }
  }
  .menuLogo {
    @media ${device.tablet} {
      margin-left: 133px;
    }
    margin: none;
  }

  .menuItems {
    margin: auto;
  }

  .desktopMenu {
    @media ${device.mobileL} {
      display: flex;
    }
    display: none;
    margin: auto;
  }

  .mobileMenu {
    @media ${device.mobileL} {
      display: none;
      background-color: hotpink;
    }
    display: block;
    margin-right: 20px;
  }

  // this is for the nice colored bar beneath the menu
  .menuGradient {
    display: block;
    height: 21px;
    width: 100%;
    background-image: repeating-linear-gradient(
      133deg,
      #efb5af,
      #efb5af 1px,
      transparent 2px,
      transparent 5px
    );
  }
`;
