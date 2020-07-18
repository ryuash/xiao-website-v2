import {
  graphql,
  useStaticQuery,
} from 'gatsby'

export const useNavHook = () => {
  const data = useStaticQuery(
    graphql`
    query {
      image: file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `,
  )
  const {
    image: {
      childImageSharp: {
        fluid
      }
    }
  } = data

  return {
    logo: fluid,
  }
}
