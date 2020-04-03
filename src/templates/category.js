import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Card from "../components/card"

class Category extends Component {
  render() {
    const data = this.props.data
    return (
      <>
        <Layout mainColor="bg-lightpurple">
          <div className="flex main-index">
            {data.allWpPost.edges.map(({ node }) => (
              <Card key={node.slug} node={node} />
            ))}
          </div>
        </Layout>
      </>
    )
  }
}

export default Category

export const postCategoryQuery = graphql`
  query($id: String!) {
    allWpPost(
      filter: { categories: {nodes : { elemMatch: { id: { eq: $id } } } } }
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
