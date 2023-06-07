import styled from "styled-components";
import screen from "../../theme";

export const SContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  .heroText {
  }
  & {
    width: 100%;
    margin-left: 30px;
    display: inline-grid;
    grid-template-columns: 4;
    gap: 24px;
    @media ${screen.tablet} {
      padding-left: 90px;
      padding-right: 90px;
      grid-template-columns: 12;
    }
  }
`;
