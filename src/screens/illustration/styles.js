import styled from 'styled-components'
import { mixins, media } from '@src/styles'

export const IllustrationsCSS = styled.div`
  ${mixins.bodyBase}

  ${media.tablet`
    ${mixins.bodyBaseDesktop}
  `}
`
