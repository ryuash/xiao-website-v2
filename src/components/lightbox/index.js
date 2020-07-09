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
  ImgOverrideCSS
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
      <ImageContainerCSS>
        <span onClick={handleImageClick}>
          <ImgOverrideCSS
            imgStyle={{ objectFit: 'contain' }}
            fluid={images[selectedIdx]}
          />
        </span>
      </ImageContainerCSS>
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
