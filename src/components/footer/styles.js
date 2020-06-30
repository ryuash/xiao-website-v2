import styled from 'styled-components'
import { mixins } from '@styles'

export const FooterCSS = styled.p`
  ${mixins.pageBottomPadding}
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 0.6rem;
  margin-top: 2rem;
`
