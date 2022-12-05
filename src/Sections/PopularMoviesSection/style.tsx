import styled from 'styled-components'

export const PopularMoviesContainerDiv = styled.div`
    
`;

export const PopularMoviesTitleDiv = styled.div`
    position: relative;
    max-width: 170px;

    h2 {
        color: #ffffff;
        margin-bottom: 25px;
        font-weight: 600;
        font-size: 32px;
    }

    span {
        width: 100%;
        height: 2px;
        bottom: 0;
        position: absolute;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            animation: borderAnimation 3s infinite ease-in-out;
            border-bottom: 2px solid #FFA634;
        }

        @keyframes borderAnimation {
            0% {
                width: 0%;
            }
    
            50% {
                width: 100%;
            }
    
            0% {
                width: 0%;
            }
        }
    }
`;