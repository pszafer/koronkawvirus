import React from "react"
import { Link } from "gatsby";
import { useCategories } from "../hooks/use-categories"

export default () => {
    const { allWpCategory } = useCategories()
    return (
      <>
        <MenuLink key="sidehome" slug="/" name="Strona główna" />
          {allWpCategory.edges.map(({ node }) => (
            <MenuLink key={`cat${node.slug}`} slug={`/${node.slug}`} name={node.name} />
          )
        )}
        </>
    )
}

const MenuLink = ({slug, name}) => (
    <div key={`cat${slug}`} className="p-1">
        <Link to={slug}>
            <span className="text-gray-800 text-xl"><b className="text-gray-500 mr-1">></b>{name}</span>
        </Link>
    </div>
)