import styled from 'styled-components'
import Img from 'gatsby-image'
import { media, theme, mixins } from '@src/styles'

const { nav } = theme

export const HomeContainerCSS = styled.div`
  ${mixins.bodyBase}
  ${media.tablet`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
    flex-direction: column;
    margin-top: 0;
  `}
`
export const ProfileContainerCSS = styled.div`
  ${media.tablet`
    display: flex;
  `}
`

export const AboutContainerCSS = styled.div`
  margin-top: 2rem;
  ${media.tablet`
    margin-top: 0;
    margin-left: 3rem;
  `}
`

export const AboutContainerTextCSS = styled.p`
`

export const ContactContainerTextCSS = styled.p`
  margin-bottom: 2rem;

  .bold {
    font-weight: bold;
  }
`
export const SocialMediaContainerCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ImgCSS = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;

  img {
    object-fit: contain;
  }
`
