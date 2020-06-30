import React from 'react'
import Img from 'gatsby-image'
import { Layout, Footer } from '@components'
import { LinkedInIcon } from '@icons'
import { useHomeHook } from './hooks'
import {
  ProfileContainerCSS,
  AboutContainerCSS,
  AboutContainerTextCSS,
  ContactContainerTextCSS,
  SocialMediaContainerCSS,
  HomeContainerCSS,
  ImgCSS,
} from './styles'

const Home = () => {
  const {
    about,
    title,
    profileImg,
    contact,
    linkedin,
  } = useHomeHook()

  return (
    <Layout
      title={title}
      hideFooter
    >
      <HomeContainerCSS>
        <ProfileContainerCSS>
          <ImgCSS>
            <Img fluid={profileImg} />
          </ImgCSS>
          <AboutContainerCSS>
            <AboutContainerTextCSS>
              {about}
            </AboutContainerTextCSS>
            <br />
            <ContactContainerTextCSS>
              {contact}
            </ContactContainerTextCSS>
            <SocialMediaContainerCSS>
              <a
                href={linkedin}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </SocialMediaContainerCSS>
          </AboutContainerCSS>
        </ProfileContainerCSS>
        <Footer />
      </HomeContainerCSS>
    </Layout>
  )
}

export default Home
