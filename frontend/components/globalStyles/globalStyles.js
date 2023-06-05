import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  margin: 0;
}
a{
  color: inherit;
  text-decoration: none;
}
 h1,h2,h3,h4,h5,h6 {
   font-family: Fira Code;
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
