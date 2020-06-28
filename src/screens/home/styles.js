import styled from 'styled-components'
import Img from 'gatsby-image'
import { media, theme } from '@src/styles'

const { nav } = theme

export const HomeContainerCSS = styled.div`
  min-height: calc(100vh - ${nav.height});
  ${media.tablet`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
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
    width: 70%;
  `}
`

export const AboutContainerTextCSS = styled.p`
  text-align: center;
`

export const ContactContainerTextCSS = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`
export const SocialMediaContainerCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ImgCSS = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`
