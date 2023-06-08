import styled from "styled-components";
import theme from "../../theme";

export const SCourse = styled.div`
  display: inline-block;
  background-image: url(${(props) => props?.bgImage});
  height: 576px;
  width: 433px;
  position: relative;
  padding: 10px;

  @media ${screen.tablet} {
  }

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
  .cardInfo {
    position: absolute;
    bottom: 32px;
    left: 32px;
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
