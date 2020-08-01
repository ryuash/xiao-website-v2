import React from 'react'
import {
  CloseIcon,
  ForwardIcon,
  BackwardIcon
} from '@icons'
import {
  LightboxCSS,
  ImageContainerCSS,
  CloseCSS,
  IconContainerCSS,
} from './styles'

const Lightbox = (props) => {
  const {
    images,
    selectedIdx,
    toggleLightbox,
    handlePrevImage,
    handleNextImage,
  } = props

  const handleImageClick = (e) => {
    e.stopPropagation()
  }

  const handleFutureClick = (e, callback) => {
    e.stopPropagation()
    callback()
  }

  return (

    <LightboxCSS onClick={toggleLightbox}>
      <CloseCSS>
        <CloseIcon />
      </CloseCSS>
      <ImageContainerCSS onClick={handleImageClick} src={images[selectedIdx].src} />
      <IconContainerCSS>
        <span onClick={(e) => handleFutureClick(e, handlePrevImage)}>
          <BackwardIcon />
        </span>
        <span onClick={(e) => handleFutureClick(e, handleNextImage)}>
          <ForwardIcon />
        </span>
      </IconContainerCSS>
    </LightboxCSS>
  )
}

export default Lightbox
