import styled from 'styled-components'

export const DesktopGalleryCSS = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);

  .image-item:nth-child(5n) {
    grid-column-end: span 2;
  }
  .image-item {
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    transition: transform .5s ease;
    transform-origin: 0 0;
  }
`
