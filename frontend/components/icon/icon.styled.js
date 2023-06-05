import styled from "styled-components";
import px2rem from "../../utils/px2rem";

const transRotate = ({ rotate }) => (rotate ? `rotate(${rotate}deg)` : "");

const hoverAnimate = ({ animation }) => {
  switch (animation) {
    case "down":
      return `margin-bottom: ${px2rem(10)};`;
    case "up":
      return `margin-top: ${px2rem(10)};`;
    case "left":
      return `margin-left: ${px2rem(10)};`;
    case "right":
      return `margin-right: ${px2rem(10)};`;
    default:
      return "";
  }
};

const StyledIcon = styled.svg`
  flex: none;
  transition: all 0.25s;
  &:hover {
    fill: ${(props) => props.hover};
    ${hoverAnimate}
  }
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRound};
  background: ${(props) => props.background};
  transform: ${transRotate};
`;

export default StyledIcon;
