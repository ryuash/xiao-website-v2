import styled from 'styled-components'
import { mixins, media } from '@src/styles'

export const SketchbookCSS = styled.div`
  ${mixins.bodyBase}

  ${media.tablet`
    ${mixins.bodyBaseDesktop}
  `}
`
