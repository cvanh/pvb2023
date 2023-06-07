import styled from "styled-components";
import theme from "../../theme";

export const SCard = styled.div`
  background-image: url(${(props) => props?.bgImage});
  height: 576px;
  width: 448px;

  .cardTitle {
  }
  .cardAuthor {
    background-color: ${theme.colors.white};
    min-width: 20px;
    padding: 10px;
    text-align: center;
    border-radius: 20px;
  }
`;
