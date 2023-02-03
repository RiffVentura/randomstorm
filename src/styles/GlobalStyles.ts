import { createGlobalStyle } from 'styled-components';

import '@fontsource/montserrat';

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

body {
    padding: 3rem;
    box-sizing: border-box;

    background: ${({ theme }) => theme.color.background};
    color:${({ theme }) => theme.color.selected};
    font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
    font-weight:${({ theme }) => theme.typography.weight.icon};
    line-height: 1.7;
}
`;

export default GlobalStyles;
