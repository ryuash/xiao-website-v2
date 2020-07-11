import {
  graphql,
  useStaticQuery,
} from 'gatsby'

export const useIllustrationHook = () => {
  const data = useStaticQuery(
    graphql`
    query {
      data: markdownRemark(fileAbsolutePath: {regex: "/illustration.md/"}) {
        frontmatter {
          title
        }
      },
      images: allFile(filter: {sourceInstanceName: {eq: "illustration"}}, sort: {fields: [relativePath], order: ASC}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `,
  )

  const {
    data: {
      frontmatter: {
        title
      }
    },
    images: {
      edges
    }
  } = data

  const images = edges.map((x) => x.node.childImageSharp.fluid)

  return {
    title,
    images: images,
  }
}
