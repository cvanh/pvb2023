import styled from "styled-components";

export const SHero = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  min-height: 760px;
  .box {
    width: 50%;
    margin: auto;
  }
  .heroImage {
    position: absolute;
    border-radius: 100%;
  }
  .courses {
    background-color: red;
    display: inline-grid;
  }
`;

export const SImageBackground = styled.div`
  z-index: -1;
  position: relative;
  background: ${(props) => props.bg};
  margin-left: 100px;
  margin-top: 100px;
  height: 600px;
  width: 600px;
  border-radius: 100%;
`;
