import { createGlobalStyle, css } from "styled-components";
import styledNormalize from "styled-normalize";

const globalStylesCss = css`
    ${styledNormalize};

    * {
        box-sizing: border-box;
    }

    body {
        font-size: 18px;
        line-height: 1.2;
        font-family: "Open Sans", sans-serif;
        background-color: #eaecf1;
    }
`;

export const StyledGlobal = createGlobalStyle`${globalStylesCss};` as any;