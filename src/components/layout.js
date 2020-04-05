/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/parts/seo"

import Sidebar from "./sidebar"

class Layout extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const { children, pageContext } = this.props;
    const mainColor = pageContext.pageName ? "bg-white" : "bg-lightpurple"
    const title = pageContext.pageName ? pageContext.pageName : ""
    return (
      <>
         <>
          <SEO title={title} />
          <div className="w-full mx-auto flex h-full">
            <Sidebar />
            <div className={mainColor + " w-3/4 p-4"}>{children}</div>
          </div>
          </>
  
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
