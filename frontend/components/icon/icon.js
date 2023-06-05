import PropTypes from "prop-types";
import StyledIcon from "./icon.styled";
import ICONS from "./icons";
import theme from "../../theme";

const Icon = ({
  className,
  icon,
  size,
  color,
  hover,
  viewbox,
  animation,
  rotate,
  border,
  borderRound,
  background,
  opacity,
  mr,
  ml,
}) => (
  <StyledIcon
    width={`${size}px`}
    height={`${size}px`}
    viewBox={`${viewbox}`}
    fill={theme.colors[color] || color}
    hover={theme.colors[hover] || hover}
    rotate={rotate}
    opacity={opacity}
    border={border}
    borderRound={borderRound}
    mr={mr}
    background={background}
    ml={ml}
    className={className || undefined}
    animation={animation}
  >
    <path d={ICONS[icon]} />
  </StyledIcon>
);

export default Icon;
