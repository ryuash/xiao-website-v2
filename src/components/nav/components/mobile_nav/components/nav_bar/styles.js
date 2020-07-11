import styled from 'styled-components'
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
`

export const NavBarLogo = styled.div`

`

export const NavBarIconCSS = styled.div`
  width: 27px;

  &:after,
  &:before,
  > div {
    background-color: black;
    border-radius: 10px;
    content: '';
    display: block;
    height: 3px;
    margin: 4px 0;
    transition: all .4s ease-in-out;
  }

  ${(props) => (props.isOpen ? (
    `
      &:before {
        transform: translateY(7px) rotate(137deg)
      }

      &:after {
        transform: translateY(-7px) rotate(-137deg)
      }

      > div {
        transform: scale(0)
      }
    `
  ) : '')}
`
