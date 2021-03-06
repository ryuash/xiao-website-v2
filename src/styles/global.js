import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
// import { fontStyles, theme, media } from '@styles';
// import { sizes } from './media';

// const { fonts, colors } = theme;

const GlobalCSS = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: 'Nunito';
    src: url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    font-weight: 300;
    line-height: 1.5;
    font-family: 'Nunito', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin: 0 0 2rem 0;
  }

  svg {
    width: 30px;
    margin: 0 5px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

export default GlobalCSS
