import styled from 'styled-components'

export const NavBarContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    background-color: transparent;
    z-index: 999;
    position: absolute;
    width: 100%;
`;

export const NavBarLogoContainerDiv = styled.div`
    background: linear-gradient(264.26deg, #FF267A 0%, #FFA634 101.03%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    user-select: none;
    padding: 0 50px;
    
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
`;

export const NavBarItemsContainerUl = styled.div`
    display: flex;
    align-items: center;
    padding: 0 50px;
    
    li {
        list-style-type: none;
        margin-left: 50px;
        font-family: 'Poppins', sans-serif;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #ffffff;
    }

    @media only screen and (max-width: 768px){
       display: none;
    }
`;

export const NavBarSubMenuContainerDiv = styled.div`
    display: none;

    @media only screen and (max-width: 768px){
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0 50px;

        svg {
            color: #ffffff;
        }

        @media only screen and (max-width: 320px){
            padding: 0 50px 0 0;      
        }
    }
`;