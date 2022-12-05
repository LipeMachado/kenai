import { Clock } from 'phosphor-react'
import { Category } from '../../Components/Category'
import { ScrollDownButtonDiv } from '../../Components/ScrollDownButton/style'
import {
    HeaderContainerDiv,
    HeaderBackgroundDiv,
    HeaderBackgroundGradientLeftDiv,
    HeaderBackgroundGradientRightDiv,
    HeaderContentContainerDiv,
    HeaderCategoryContainerDiv,
    HeaderTimeMovieContainerDiv,
    HeaderTitleMovieContainerDiv,
    HeaderResumeMovieContainerDiv,
    HeaderButtonViewMovieContainerDiv,
    ScrollDownButtonContainerDiv
} from './style'

export function HeaderSection() {
    return (
        <>
            <HeaderContainerDiv>
                <HeaderBackgroundDiv />
                <HeaderBackgroundGradientLeftDiv />
                <HeaderBackgroundGradientRightDiv />
                <HeaderContentContainerDiv>
                    <HeaderCategoryContainerDiv>
                        <Category />
                    </HeaderCategoryContainerDiv>
                    <HeaderTimeMovieContainerDiv>
                        <Clock size={20} />
                        <span>1h 57m</span>
                    </HeaderTimeMovieContainerDiv>
                    <HeaderTitleMovieContainerDiv>
                        <span>Batman</span>
                    </HeaderTitleMovieContainerDiv>
                    <HeaderResumeMovieContainerDiv>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim.
                        </span>
                    </HeaderResumeMovieContainerDiv>
                    <HeaderButtonViewMovieContainerDiv>
                        <button>Assistir Agora</button>
                    </HeaderButtonViewMovieContainerDiv>
                </HeaderContentContainerDiv>
                <ScrollDownButtonContainerDiv>
                    <ScrollDownButtonDiv />
                </ScrollDownButtonContainerDiv>
            </HeaderContainerDiv>
        </>
    )
}