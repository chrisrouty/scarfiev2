import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset'; 

const GlobalStyled = createGlobalStyle`
    ${reset}
    a{
      text-decoration: none;
      color: #5E740B;
    }
    *{box-sizing: border-box;}
    html,
    body{
      height: 100%;
      > div{
        min-height: 100%;
      }
    }
    @font-face {
      font-family: 'Amelya Regular';
      font-style: normal;
      font-weight: normal;
      src: local('Amelya Regular'), url('fonts/amelya_nravr.woff') format('woff'), url('fonts/amelya_nravr.woff2') format('woff2');
    }
`;

export default GlobalStyled;