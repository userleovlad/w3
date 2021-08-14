const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query BlogDetail {
            allMarkdownRemark(
                filter: { frontmatter: { directory: { eq: "blogs" } } }
            ) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    data.allMarkdownRemark.nodes.forEach((node) => {
        actions.createPage({
            path: "/support/blogs/" + node.frontmatter.slug,
            component: path.resolve("./src/templates/blog-detail.js"),
            context: { slug: node.frontmatter.slug }
        })
    })
}
