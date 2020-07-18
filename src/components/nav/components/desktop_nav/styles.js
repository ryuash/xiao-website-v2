import styled from 'styled-components'
import { Link as GatsbyLink } from '../../styles'
import { NavContainerCSS } from '../../styles'


export const NavBarCSS = styled(NavContainerCSS)`
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
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
