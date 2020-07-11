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

const Home = (props) => {
  const {
    about,
    title,
    profileImg,
    contactOne,
    contactTwo,
    email,
    linkedin,
    profileAlt
  } = useHomeHook()

  return (
    <Layout
      title={title}
      hideFooter
      {...props}
    >
      <HomeContainerCSS>
        <ProfileContainerCSS>
          <ImgCSS>
            <Img
              fluid={profileImg}
              alt={profileAlt}
            />
          </ImgCSS>
          <AboutContainerCSS>
            <AboutContainerTextCSS>
              {about}
            </AboutContainerTextCSS>
            <br />
            <ContactContainerTextCSS>
              {contactOne} <span className="bold">{email}</span> {contactTwo}
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
