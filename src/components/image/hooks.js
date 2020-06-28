import { useStaticQuery, graphql } from 'gatsby'

export const useImageHook = (imageUrl) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            absolutePath
            extension
            name
            childImageSharp {
              fluid(maxWidth: 1000) {
                base64
              }
            }
          }
        }
      }
    }
  `)

  return {
    data
  }
}

// query ({
//   placeholderImage: file(relativePath: { eq: $imageUrl }) {
//     childImageSharp {
//       fluid(maxWidth: 300) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
