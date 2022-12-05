import { Category } from '../Category'
import {
    CardMoviesContainerArticle,
    CardMoviesInfoDiv,
    CardMoviesCategoryInfoDiv,
    CardMovieInfoNameMovieDiv
} from './style'

interface CardMoviesProps {
    NameMovie: string;
}

export function CardMovies({ NameMovie }: CardMoviesProps) {
    return (
        <>
            <CardMoviesContainerArticle>
                <CardMoviesInfoDiv>
                    <CardMoviesCategoryInfoDiv>
                        <Category />
                    </CardMoviesCategoryInfoDiv>
                    <CardMovieInfoNameMovieDiv>
                        {NameMovie}
                    </CardMovieInfoNameMovieDiv>
                </CardMoviesInfoDiv>
            </CardMoviesContainerArticle>
        </>
    )
}