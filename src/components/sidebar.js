import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Categories from "./categories"
import Social from "./social"
import { Link } from "gatsby"

export default () => {
    const { logo, site } = useSiteMetadata()
    
    return (
      <>
          <div className="w-1/4 p-4 bg-lightpurple h-screen">
            <div className="px-6">
              <Link to="/">
                <img className="mb-0" src={logo.publicURL}/>
              </Link>
              <div className="text-center text-gray-700 italic text-s">
                {site.siteMetadata.description}
              </div>
              <hr className="my-2 border-gray-600" />
              <div className="text-gray-700 italic text-s my-4">
                W obliczu pandemii koronawirusa zdecydowaliśmy się na...
              </div>
              <div className="mt-2 p-4">
                <Categories />
              </div>
              <div className="p-4">
                  <Social social={site.siteMetadata.social}/>
              </div>
            </div>
          </div>
        </>
    )
}