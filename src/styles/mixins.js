import { css } from 'styled-components'

const MAX_WIDTH = '1024px'
const NAV_HEIGHT = '100px'

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
  pageBottomPadding: css`
    padding-bottom: 6rem;
  `,
  bodyBase: css`
    width: 100%;
    padding: 0 1rem;
    max-width: ${MAX_WIDTH};
    min-height: calc(100vh - ${NAV_HEIGHT});
    margin: 0 auto;
  `
}

export default mixins
