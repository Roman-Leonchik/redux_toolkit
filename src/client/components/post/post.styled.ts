import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0%,
	100% {
		box-shadow: 1rem 0px 0 0px #5457b6;
	}
	12% {
		box-shadow: 1rem 1rem 0 0 #5457b6;
	}
	25% {
		box-shadow: 0 1rem 0 0px #5457b6;
	}
	37% {
		box-shadow: -1rem 1rem 0 0 #5457b6;
	}
	50% {
		box-shadow: -1rem 0 0 0 #5457b6;
	}
	62% {
		box-shadow: -1rem -1rem 0 0 #5457b6;
	}
	75% {
		box-shadow: 0px -1rem 0 0 #5457b6;
	}
	87% {
		box-shadow: 1rem -1rem 0 0 #5457b6;
	}
`;

export const StyledCreateButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    width: 160px;
    height: 40px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    background: #5457b6;
    border: none;
    color: #fff;
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
        opacity: 0.7;
    }
`;

export const StyledError = styled.div`
    max-width: 250px;
    margin: 0 auto;
    text-align: center;
    font-size: 24px; 
    font-weight: bold;
`;

export const StyledLoading = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    margin: 0 auto;
    color: #ed6468;
`;

export const StyledLoader = styled.div`
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: 50%;
        animation: 0.5s ${spin} linear infinite;
    }
    &:before {
        transform: rotateX(70deg);
    }
    &:after {
        transform: rotateY(100deg);
    }
`;