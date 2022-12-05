import styled from 'styled-components'

export const ScrollDownButtonDiv = styled.button`
    height: 50px;
    width: 30px;
    border: 2px solid #ffffff;
    position: absolute;
    left: 50%;
    bottom: 20px;
    border-radius: 50px;
    cursor: pointer;
    background: transparent;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 20%;
        left: 50%;
        height: 10px;
        width: 10px;
        transform: translate(-50%, -100%) rotate(45deg);
        border: 2px solid #ffffff;
        border-top: transparent;
        border-left: transparent;
        animation: scroll-down 1s ease-in-out infinite;
    }

    &::before {
        top: 30%;
        animation-delay: 0.3s;
    }

    @keyframes scroll-down {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 1;
        }
        60% {
            opacity: 1;
        }
        100% {
            top: 90%;
            opacity: 0;
        }
    }
`;