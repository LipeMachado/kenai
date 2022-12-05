import styled from 'styled-components'

import capa from '../../Assets/shangChi.png'

export const CardMoviesContainerArticle = styled.article`
    font-size: 62.5%;
    width: 190px;
    height: 290px;
    max-width: 30rem;
    display: flex;
    align-items: flex-end;
    background: linear-gradient(180deg, #18181800 0%, #181818cc 80.79%),
        url(${capa});
    background-size: cover;
    background-position: center;
    padding: 2rem;
    position: relative;
    border-radius: 1rem;
`;

export const CardMoviesInfoDiv = styled.div`
    
`;

export const CardMoviesCategoryInfoDiv = styled.div`
    user-select: none;
`;

export const CardMovieInfoNameMovieDiv = styled.div`
    font-size: 24px;
    color: #ffffff;
    line-height: 3.2rem;
    font-weight: 600;
    
`;