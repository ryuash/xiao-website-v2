import { css } from 'styled-components'

const MAX_WIDTH = '1024px'
const NAV_HEIGHT = '75px'

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  hoverTransition: css`
    transition: 0.3s;
    &:hover {
      cursor: pointer;
    }
  `,
  dropShadow: css`
    -webkit-box-shadow: 13px 14px 14px -10px rgba(56,56,56,0.4);
    -moz-box-shadow: 13px 14px 14px -10px rgba(56,56,56,0.4);
    box-shadow: 13px 14px 14px -10px rgba(56,56,56,0.4);
  `,
  noDropShadow: css`
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  `,
  bodyBase: css`
    width: 100%;
    padding: 1rem 1.5rem 0;
    max-width: ${MAX_WIDTH};
    min-height: calc(100vh - ${NAV_HEIGHT});
    margin: 0 auto;
    margin-top: calc(${NAV_HEIGHT} + 1rem);
  `,
  bodyBaseDesktop: css`
    min-height: calc(100vh - 90px);
    margin-top: calc(90px + 1rem);
  `
}

export default mixins
