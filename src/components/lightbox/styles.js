import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import { media } from '@styles'

const ICON_COLOR = '#ffffff'
const ICON_OPACITY = 0.4

export const LightboxCSS = styled.div`
  width: 100%;
  min-height: 100vh;
  z-index: 10;
  position: fixed;
  background: rgba(74, 48, 48, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.tablet`
    padding: 2rem 0;
  `}
`

export const ImageContainerCSS = styled.div`
  padding: 1rem;
  max-height: 80vh;
  width: 100%;
`

export const CloseCSS = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0.5rem;

  svg {
    stroke: ${ICON_COLOR};
    width: 35px;
    opacity: ${ICON_OPACITY};
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`
export const IconContainerCSS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  svg {
    stroke: ${ICON_COLOR};
    width: 15px;
    margin: 0 0.3rem;
    opacity: ${ICON_OPACITY};
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`
export const ImgOverrideCSS = styled(GatsbyImage)`
  max-height: 80vh;
  width: 100%;
  ${media.tablet`
    width: auto;
  `}
`
