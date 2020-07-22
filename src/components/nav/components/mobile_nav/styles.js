import styled from 'styled-components'
import { media } from '@styles';

export const NavBarIconCSS = styled.div`
  width: 27px;
  z-index: 8;
  position: fixed;
  top: 1.5rem;
  right: 1rem;
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

  ${media.tablet`
      display: none;
  `}
`
