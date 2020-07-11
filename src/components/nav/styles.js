import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { theme, media } from '@styles'

const { nav, colors } = theme

export const NavContainerCSS = styled.div`
  width: 100%;
  height: ${nav.height};

  ${media.tablet`
    height: ${nav.desktopHeight};
  `}
`
export const Link = styled(GatsbyLink)`
  &.active {
    color: ${colors.primary};
  }

  &:hover {
     cursor: pointer;
  }
`
