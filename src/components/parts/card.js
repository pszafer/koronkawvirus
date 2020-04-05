import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Moment from "react-moment"
import "moment/locale/pl"

export default ({ node }) => {
  const { slug, featuredImage, categories, title, dateGmt } = node
  return (
    <div className="card xl:w-1/3 md:w-1/2 w-full px-4 pt-4">
      <div className="flex flex-col justify-center bg-white shadow-xl rounded-lg h-full">
        {featuredImage && (
          <Link to={`/${slug}`}>
          <Img
            className="card-image rounded-t-lg"
            fluid={featuredImage.remoteFile.childImageSharp.fluid}
            />
          </Link>
        )}
        <div className="flex flex-col p-2 ">
          <div className="flex-1 justify-start">
            <Link to={`/${slug}`}>
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
            </Link>
          </div>
          <div className="flex">
            <div className="w-1/2 flex justify-start">
              <span className="items-start p-1">
                <Moment className="uppercase" locale="pl" format="MMMM YYYY">
                  {dateGmt}
                </Moment>
              </span>
            </div>
            <div className="w-1/2 flex p-1 justify-end">
              {categories.nodes.map(({ name }) => (
                <span
                  key={`card_cat${name}`}
                  className="items-end bg-gray-400 p-1 rounded-lg"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
