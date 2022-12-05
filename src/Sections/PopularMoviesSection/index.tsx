import { CardMovies } from "../../Components/CardMovies";
import {
    PopularMoviesContainerDiv,
    PopularMoviesTitleDiv
} from './style'

export function PopularMoviesSection() {
    return (
        <>
            <PopularMoviesContainerDiv>
                <PopularMoviesTitleDiv>
                    <h2>Populares</h2>
                    <span></span>
                </PopularMoviesTitleDiv>
                <div>
                    <CardMovies NameMovie="Chang-Chi" />
                </div>
            </PopularMoviesContainerDiv>
        </>
    )
}