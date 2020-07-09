import React from 'react'
import { Layout, Gallery, Lightbox } from '@components'
import { useIllustrationsHook } from './hooks'
import { useLightboxHook } from '../../components/lightbox/hooks'
import { IllustrationsCSS } from './styles'

const Illustrations = () => {
  const { images } = useIllustrationsHook()
  const {
    showLightbox,
    toggleLightbox,
    selectedIdx,
    handlePrevImage,
    handleNextImage,
    setSelectedIdx,
    handleOnClick,
  } = useLightboxHook(images)

  return (
    <>
      {!!showLightbox && (
        <Lightbox
          images={images}
          toggleLightbox={toggleLightbox}
          selectedIdx={selectedIdx}
          handlePrevImage={handlePrevImage}
          handleNextImage={handleNextImage}
        />
      )}
      <Layout>
        <IllustrationsCSS>
          <Gallery
            images={images}
            toggleLightbox={toggleLightbox}
            setSelectedIdx={setSelectedIdx}
            handleOnClick={handleOnClick}
          />
        </IllustrationsCSS>
      </Layout>
    </>
  )
}

export default Illustrations
