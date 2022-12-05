import { HeaderSection } from '../../Sections/HeaderSection'
import { NavBarSection } from '../../Sections/NavBarSection'
import {
    HomePageContainerDiv,
} from './style'

export function HomePage() {
    return (
        <>
            <HomePageContainerDiv>
                <NavBarSection />
                <HeaderSection />
            </HomePageContainerDiv>
        </>
    )
}