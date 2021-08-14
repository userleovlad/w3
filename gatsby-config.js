/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
                ignore: [`**/\.*`] // ignore files starting with a dot
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`
            }
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `tomato`,
                // Disable the loading spinner.
                showSpinner: false
            }
        },
        {
          resolve: 'gatsby-plugin-local-search',
          options: {
            name: 'pages',
            engine: 'flexsearch',
            engineOptions: 'speed',
            query: `
              {
                allMarkdownRemark {
                  nodes {
                    id
                    frontmatter {
                      title
                    }
                    rawMarkdownBody
                  }
                }
              }
            `,
            ref: 'id',
            index: ['title', 'body'],
            store: ['id', 'title'],
            normalizer: ({ data }) =>
              data.allMarkdownRemark.nodes.map((node) => ({
                id: node.id,
                title: node.frontmatter.title,
                body: node.rawMarkdownBody,
              })),
          },
        },
    ],
    siteMetadata: {
        title: "Appvity Website",
        description: "Web dev portfolio",
        copyright: "This website is copyright 2021"
    }
}
