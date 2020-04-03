import React from 'react';
import ReactHtmlParser, { processNodes } from 'react-html-parser';
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import generatePropsFromAttributes from 'react-html-parser/lib/utils/generatePropsFromAttributes';

const renderers = {
  'a': (props) => (<MyLink {...props} />)
}


const transform = (node, index) => {
  if (node.type === 'tag' && renderers[node.name]) {
    console.log(node)
    return React.createElement(
      renderers[node.name],
      generatePropsFromAttributes(node.attribs, index),
      processNodes(node.children, transform)
      )
    }
  }
  
const MyLink = (props) => {
  const { site } = useSiteMetadata()
  if (props.href.indexOf(site.siteMetadata.wordpressUrl) > -1){ 
    if (props.href.indexOf("wp-admin") > -1){
      return <span className="text-red-400">zły link</span>
    }
    return <Link to={props.href.replace(site.siteMetadata.wordpressUrl, "")}>{props.children[0]}</Link>
  }
  return (<a target="_blank" rel="noopener noreferrer" href={props.href}>{props.children[0]}</a>)
}

const ParseHTML = html => ReactHtmlParser(html, { transform });

export default ParseHTML;