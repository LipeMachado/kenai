import styled from 'styled-components'

export const NavBarContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10vh;
    background-color: transparent;
`;

export const NavBarLogoContainerDiv = styled.div`
    background: linear-gradient(264.26deg, #FF267A 0%, #FFA634 101.03%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    user-select: none;
    
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
`;

export const NavBarItemsContainerUl = styled.div`
    display: flex;
    align-items: center;
    
    li {
        list-style-type: none;
        margin-left: 30px;
        font-family: 'Poppins', sans-serif;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    @media only screen and (max-width: 640px){
       display: none;
    }
`;

export const NavBarSubMenuContainerDiv = styled.div`
    display: none;

    @media only screen and (max-width: 640px){
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`;