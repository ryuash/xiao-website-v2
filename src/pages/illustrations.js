import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Layout } from '@components'

export default ({ data }) => {
  console.log(data, 'my data')
  return (
    <Layout>
      <h1>illustration</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    customName: file(relativePath: {eq: "duck_icon.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
