import styled from 'styled-components'
import { theme } from '@styles'

const { width, nav } = theme

export const LayoutCSS = styled.div`
  background: pink;
`

export const BodyCSS = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  max-width: ${width.maxWidth};
  min-height: calc(100vh - ${nav.height});
  margin: 0 auto;
`
