import styled from "styled-components";
import { device } from "../../theme";

const SFooter = styled.footer`
  background-color: black;
  color: white;
  height: 400px;
  margin: auto;
  padding: 96px;

  .topFooter {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #3a3c56;
  }
  .block {
    margin-bottom: 50px;
    margin-right: 0px;
    width: 100%;
    p {
      color: red;
      text-transform: uppercase;
    }
  }
  .footerSocials {
    margin-left: none;
  }
  .bottomFooter {
    margin-top: 50px;
  }
  .footerName {
    width: 210px;
  }

  // the menu is gonna wrap around this point
  @media ${device.laptop} {
    justify-content: none;
    .footerSocials {
      margin-left: auto;
    }
    .block {
      width: auto;
      margin-right: 90px;
    }
  }
`;

export default SFooter;
