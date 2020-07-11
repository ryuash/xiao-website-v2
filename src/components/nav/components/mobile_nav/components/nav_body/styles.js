import styled from 'styled-components'
import { animated } from 'react-spring';
import { theme } from '@styles'

const { colors } = theme

export const NavBodyCSS = styled(animated.div)`
  position: fixed;
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 6;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const NavItemCSS = styled.div`
  margin: 0.5rem 0;
  a {
    &.active {
      color: ${colors.primary};
    }
  }
`
