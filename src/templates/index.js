import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"
import Pagination from "../components/pagination"


class Homepage extends Component {
  render() {
    const data = this.props.data
    const { currentPage, numPages } = this.props.pageContext
    return (
      <>
        <Layout mainColor="bg-lightpurple">
          <div className="flex flex-wrap main-index -mx-2 pt-6">
            {data.allWpPost.edges.map(({ node }) => (
              <Card key={node.slug} node={node} />
            ))}
            {numPages > 1 && (
              <Pagination currentPage={currentPage} numPages={numPages} />
            )}
          </div>
        </Layout>
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
