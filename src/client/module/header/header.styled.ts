import styled from "styled-components";
import Image from "../../images/pattern-bg.png";

export const StyledHeader = styled.header`
    padding: 10px 0;
    background-color: #fff;
    background-image: url(${Image});
    background-size: cover;
`;

export const StyledContainer = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
`;

export const StyledText = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 28px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;
