import { createGlobalStyle } from 'styled-components';

import '@fontsource/montserrat/variable.css';
import '@fontsource/montserrat/variable-italic.css';

export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    font-size: 62.5%;
}

body, input {
    box-sizing: border-box;

    background: ${({ theme }) => theme.color.background};
    color:${({ theme }) => theme.color.selected};
    font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
    font-weight:${({ theme }) => theme.typography.weight.default};
    font-size:${({ theme }) => theme.typography.size.default};
    line-height: 1.7;
}

button {
    box-sizing: border-box;
    background: ${({ theme }) => theme.color.background};
    color:${({ theme }) => theme.color.selected};
    font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
    font-weight:${({ theme }) => theme.typography.weight.default};
    font-size:${({ theme }) => theme.typography.size.default};
    line-height: 1.7;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 10px 20px;

    &:hover {
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    }
}

`;

export default GlobalStyles;
