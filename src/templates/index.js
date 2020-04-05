import React, { Component } from "react"
import { graphql } from "gatsby"
import Main from "../components/main"


class Homepage extends Component {
  render() {
    const data = this.props.data
    const { currentPage, numPages } = this.props.pageContext
    console.log(this.props)
    return (
      <>
        <Main title={this.props.path} posts={data.allWpPost} currentPage={currentPage} numPages={numPages} />
      </>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query blogQuery($skip: Int!, $limit: Int!) {
    allWpPost(
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
                fluid(quality: 90, maxWidth: 800, maxHeight: 300) {
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
