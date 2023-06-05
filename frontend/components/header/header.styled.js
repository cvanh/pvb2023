import styled from "styled-components";

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
    margin-left: 133px;
  }
  .menuItems {
    display: flex;
    margin: auto;
  }
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
