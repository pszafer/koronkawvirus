import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Youtube from "../components/youtube"
import ParseHtml from "../components/parsehtml"

class Post extends Component {
  render() {
    const post = this.props.data.wpPost
    return (
      <>
        <Layout mainColor="bg-white">
          <div className="w-2/3 float-left">
            <Header categories={post.categories} title={post.title} />
            <article
              className="p-4"
            >
              {ParseHtml(post.content)}
            </article>
            {post.film.youtube_video && (
              <Youtube>{post.film.youtube_video}</Youtube>
            )}
          </div>
          <div className="w-1/3 float-right">
            {post.featuredImage && (
              <Img
                fluid={post.featuredImage.remoteFile.childImageSharp.fluid}
              />
            )}
          </div>
        </Layout>
      </>
    )
  }
}

const Header = ({ categories, title }) => (
  <div className="w-full flex px-4">
    <div className="w-2/3">
      <h1 className="font-bold" dangerouslySetInnerHTML={{ __html: title }} />
      {categories.nodes.map(({ name }) => (
        <span key={name} className="items-end bg-gray-400 p-1 rounded-lg">
          {name}
        </span>
      ))}
    </div>
  </div>
)
export default Post

export const postQuery = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
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
      film {
        youtubeVideo
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
