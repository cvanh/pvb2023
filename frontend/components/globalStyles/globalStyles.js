import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
*{
  margin: 0;
  font-family: "Roboto";
}
a{
  color: inherit;
  text-decoration: none;
}
 h1,h2,h3,h4,h5,h6 {
   font-family: Roboto;
 }
 button {
   margin: 2px;
   display: inline-block;
   outline: none;
   cursor: pointer;
   font-size: 14px;
   padding: 0 12px;
   line-height: 20px;
   height: 30px;
   max-height: 30px;
   background: black;
   font-weight: 700;
   border: 1px solid white;
   border-radius: 0;
   color: #FFFFFF;
   transition-timing-function: ease-in-out;
   transition-property: box-shadow;
   transition-duration: 150ms;
   :hover {
      box-shadow: 0 2px 2px rgb(39 44 52 / 12%);
   }
                
 }
 

`;

export default GlobalStyles;
