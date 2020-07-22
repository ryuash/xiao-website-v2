import styled from 'styled-components'
import { media } from '@styles';
import { NavContainerCSS } from '../../../../styles'


export const NavBarCSS = styled(NavContainerCSS)`
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  ${media.tablet`
    display: none;
  `}
`

export const NavBarLogoCSS = styled.div`
  width: 40px;
`
