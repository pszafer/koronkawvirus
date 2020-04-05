import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Main from "../components/main"

class Category extends Component {
  render() {
    const data = this.props.data
    const { currentPage, numPages } = this.props.pageContext
    console.log(this.props)
    return (
      <>
        <Main posts={data.allWpPost} currentPage={currentPage} numPages={numPages} />
      </>
    )
  }
}

export default Category

export const postCategoryQuery = graphql`
  query($id: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: {nodes : { elemMatch: { id: { eq: $id } } } } }
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          excerpt
          slug
          dateGmt
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            remoteFile {
              childImageSharp {
                fluid(quality: 90, maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
