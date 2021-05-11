import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%; //10px
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;