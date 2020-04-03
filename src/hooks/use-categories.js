import { useStaticQuery, graphql } from "gatsby"
export const useCategories = () => {
  const { allWpCategory } = useStaticQuery(
    graphql`
      query {
        allWpCategory(filter: {count: {gt: 0}}) {
            edges {
              node {
                name
                slug
              }
            }
          }
      }
    `
  )
  return { allWpCategory }
}