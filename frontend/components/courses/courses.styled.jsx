import styled from "styled-components";
import theme from "../../theme";

export const SCourse = styled.div`
  display: inline-grid;
  gap: 20px;
  background-image: url(${(props) => props?.bgImage});
  height: 576px;
  width: 433px;
  padding: 10px;

  .cardTitle {
    color: ${theme.colors.white};
    height: auto;
    margin-bottom: 0;
  }
  .cardAuthor {
    background-color: ${theme.colors.white};
    overflow: hidden;
    height: 10px;
    width: 100px;
    padding: 10px;
    text-align: center;
    border-radius: 20px;
  }
`;

export const SCourses = styled.div`
  margin-top: 200px;
  justify-content: center;
  column-gap: 30px;
  row-gap: 30px;
  display: flex;
  flex-wrap: wrap;
`;
