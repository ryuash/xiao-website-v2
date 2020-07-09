import {
  graphql,
  useStaticQuery,
} from 'gatsby'

export const useIllustrationsHook = () => {
  // const [images, setImages] = useState([])
  // useEffect(() => {
  //   const result = []
  //   for (let i = 0; i < 9; i += 1) {
  //     result.push('https://source.unsplash.com/random')
  //   }
  //   setImages([
  //     'https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80',
  //     ...result,
  //     'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80',
  //     'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
  //     'https://images.unsplash.com/photo-1496551572277-76011ca2a6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80',

  //   ])
  // }, [])
  const data = useStaticQuery(
    graphql`
    query {
      data: markdownRemark(fileAbsolutePath: {regex: "/illustration.md/"}) {
        frontmatter {
          title
        }
      },
      images: allFile(filter: {sourceInstanceName: {eq: "illustration"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `,
  )

  console.log(data, 'the data')
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
  console.log(edges, 'images')
  return {
    images: []
  }
}
