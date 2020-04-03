const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWpPost(sort: {fields: [date], order: DESC}) {
        edges {
          node {
            id
            slug
          }
        }
      }
      allWpCategory {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/post.js`)
  const posts = result.data.allWpPost.edges
  const postsPerPage = 30
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/templates/index.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  posts.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  result.data.allWpCategory.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: slash(categoryTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}