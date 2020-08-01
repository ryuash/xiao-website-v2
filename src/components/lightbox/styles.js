import styled from 'styled-components'
import { media } from '@styles'

const ICON_COLOR = '#ffffff'
const ICON_OPACITY = 0.4

export const LightboxCSS = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
`

export const ImageContainerCSS = styled.img`
  ${media.tablet`
    width: auto;
    max-width: 80vw;
    max-height: 80vh;
    display: inline-block;
  `}
`

export const CloseCSS = styled.div`
  align-self: flex-end;

  svg {
    stroke: ${ICON_COLOR};
    width: 35px;
    margin: 0;
    opacity: ${ICON_OPACITY};
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`
export const IconContainerCSS = styled.div`
  svg {
    stroke: ${ICON_COLOR};
    width: 15px;
    opacity: ${ICON_OPACITY};
    transition: 0.3s;
    height: 40px;
    margin: 0 0.5rem;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`
