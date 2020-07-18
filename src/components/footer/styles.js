import styled from 'styled-components'
import { mixins, media } from '@styles'

export const FooterCSS = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 0.6rem;
  margin-top: 2rem;
  padding-bottom: 4rem;
  color: #9c9c9c;

  ${media.tablet`
    padding-bottom: 6rem;
  `}
`
