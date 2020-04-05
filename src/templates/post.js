import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Youtube from "../components/youtube"
import ParseHtml from "../components/parsehtml"

class Post extends Component {
  render() {
    const post = this.props.data.wpPost
    return (
      <div className="lg:flex block lg:flex-row-reverse">
          {post.featuredImage && (
          <div className="lg:w-1/3 w-full pt-4 lg:pt-0">
              <Img className="mx-auto lg:w-full w-3/4"
                fluid={post.featuredImage.remoteFile.childImageSharp.fluid}
              />
          </div>
          )}
          <div className="lg:w-2/3 w-full">
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
          
      </div>
    )
  }
}

const Header = ({ categories, title }) => (
  <div className="w-full flex px-4">
    <div className="w-2/3">
      <h1 className="font-bold" dangerouslySetInnerHTML={{ __html: title }} />
      {categories.nodes.map(({ name }) => (
        <span key={`post_cat${name}`} className="items-end bg-gray-400 p-1 rounded-lg">
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
