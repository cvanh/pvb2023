const theme = {
  colors: {
    black: "#072329",
    white: "#f4f2ef",
    red: "#E8231A",
  },
  fonts: ["Roboto"],
  fontSizes: {
    small: "1.5em",
    medium: "2.5em",
    large: "3.5em",
    extralarge: "4.5em",
  },
};

export default theme;

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
