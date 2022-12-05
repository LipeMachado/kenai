import styled from 'styled-components'

import HeaderBackground from '../../Assets/headerBackground.png'

export const HeaderContainerDiv = styled.div`
    height: 100vh;
`;

export const HeaderBackgroundDiv = styled.div`
    background-image: url(${HeaderBackground});
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    z-index: -1;
`;

export const HeaderBackgroundGradientLeftDiv = styled.div`
    background: linear-gradient(269.87deg, #1D1D1D 4.67%, rgba(29, 29, 29, 0) 101.21%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 40%;
    left: 0;
    height: 100%;
    position: absolute;
    z-index: 1;
`;

export const HeaderBackgroundGradientRightDiv = styled.div`
    background: linear-gradient(269.87deg, #1D1D1D 4.67%, rgba(29, 29, 29, 0) 101.21%);
    right: 0;
    width: 40%;
    height: 100%;
    position: absolute;
    z-index: 1;
`;

export const HeaderBackgroundGradientBottomDiv = styled.div`
    background: linear-gradient(0deg,#1D1D1D 4.67%,rgba(29,29,29,0) 101.21%);
    bottom: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    z-index: 1;
`;

export const HeaderContentContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    justify-content: center;
    height: 100%;
    position: absolute;
    z-index: 10;
    gap: 20px;
`;

export const HeaderCategoryContainerDiv = styled.div`
    user-select: none;
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const HeaderTimeMovieContainerDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    user-select: none;
    color: #ffffff;
`;

export const HeaderTitleMovieContainerDiv = styled.div`
    color: #ffffff;

    span {
        font-size: 50px;
        font-weight: 600;

        @media only screen and (max-width: 768px){
            font-size: 40px;
        }
    }
`;

export const HeaderResumeMovieContainerDiv = styled.div`
    color: #ffffff;
    max-width: 500px;

    span {
        font-size: 20px;
        font-weight: 400;
    }

    @media only screen and (max-width: 768px){
        max-width: 300px;

        span {
            font-size: 15px;
            font-weight: 400;
        }
    }
`;

export const HeaderButtonViewMovieContainerDiv = styled.div`
    display: flex;
    align-items: center;    

    button {
        font-size: 18px;
        font-weight: 600;
        background-image: linear-gradient(to right, #FF267A, #FFA634, #eda75b, #fe106b);
        box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
        background-size: 300% 100%;
        border: transparent;
        border-radius: 4px;
        padding: 12px 26px;
        cursor: pointer;
        transition: background 0.3s ease-out;
        color: #1D1D1D;

        &:hover {
            background-position: 100% 0;
        }
    }
`;

export const ScrollDownButtonContainerDiv = styled.div`
    
`;