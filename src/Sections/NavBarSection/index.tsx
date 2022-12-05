import {
    NavBarContainerDiv,
    NavBarLogoContainerDiv,
    NavBarItemsContainerUl,
    NavBarSubMenuContainerDiv
} from './style'

import {
    MagnifyingGlass,
    User,
    Bell,
    List
} from 'phosphor-react'

export function NavBarSection() {
    return (
        <>
            <NavBarContainerDiv>
                <NavBarLogoContainerDiv>
                    <h2>Kenai</h2>
                </NavBarLogoContainerDiv>
                <NavBarItemsContainerUl>
                    <li><MagnifyingGlass size={20} /></li>
                    <li>Início</li>
                    <li>Minha Lista</li>
                    <li><Bell size={20} /></li>
                    <li><User size={20} /></li>
                </NavBarItemsContainerUl>
                <NavBarSubMenuContainerDiv>
                    <List size={25} />
                </NavBarSubMenuContainerDiv>
            </NavBarContainerDiv>
        </>
    )
}
