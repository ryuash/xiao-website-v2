import styled from 'styled-components'

const iconColor = '#1f2027'

export const LightboxCSS = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(74, 48, 48, 0.8);
`

export const ImageContainerCSS = styled.div`
  padding: 0.5rem;
`

export const CloseCSS = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0.5rem;

  svg {
    stroke: ${iconColor};
    width: 35px;
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
    stroke: ${iconColor};
    width: 15px;
    margin: 0 0.5rem;
    opacity: 0.3;
  }
`
