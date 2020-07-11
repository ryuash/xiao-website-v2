import React from 'react'
import { Layout, Gallery, Lightbox } from '@components'
import { useDesignHook } from './hooks'
import { DesignCSS } from './styles'
import { useLightboxHook } from '../../components/lightbox/hooks'

const Design = (props) => {
  const { images, title } = useDesignHook()
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
      <Layout
        title={title}
        {...props}
      >
        <DesignCSS>
          <Gallery
            images={images}
            toggleLightbox={toggleLightbox}
            setSelectedIdx={setSelectedIdx}
            handleOnClick={handleOnClick}
          />
        </DesignCSS>
      </Layout>
    </>
  )
}

export default Design
