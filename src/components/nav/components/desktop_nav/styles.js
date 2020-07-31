import styled from 'styled-components'
import { media } from '@styles'
import { Link as GatsbyLink } from '../../styles'
import { NavContainerCSS } from '../../styles'


export const NavBarCSS = styled(NavContainerCSS)`
  display: none;
  ${media.tablet`
    background: transparent;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  `}
`

export const NavBarLogoCSS = styled.div`
  width: 40px;
`

export const NavItemsContainerCSS = styled.div`
  margin-top: 0.5rem;
`

export const Link = styled(GatsbyLink)`
  margin: 0 1rem;
`
