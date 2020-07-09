import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import { media } from '@styles'

export const GalleryCSS = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(1, 1fr);

  .image-item {
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }
  }

  ${media.tablet`
    .image-item:nth-child(5n) {
      grid-column-end: span 2;
    }

    grid-gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(50px, auto);
  `}
`

export const ImgOverrideCSS = styled(GatsbyImage)`
  ${media.tablet`
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    transition: transform .5s ease;
    transform-origin: 0 0;
    min-height: 500px;

    &:hover {
      transform: scale(1.05);
    }
  `}
`
