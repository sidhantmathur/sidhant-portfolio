module.exports = {
    siteMetadata: {
      title: `Sidhant Mathur's Portfolio`,
      description: `Software projects and blog posts by Sidhant Mathur`,
      author: `Sidhant Mathur`,
      social: [
        {
          name: `Twitter`,
          url: `https://twitter.com/gatsbyjs`,
        },
        {
          name: `GitHub`,
          url: `https://github.com/sidhantmathur`,
        },
      ],
    },
    plugins: [
      {
        resolve: `gatsby-theme-blog`,
        options: {
          basePath: `/blog`,
        },
      },
      {
        resolve: `gatsby-theme-notes`,
        options: {
          basePath: `/notes`,
        },
      },
    ],
  }
  