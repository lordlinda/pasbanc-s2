module.exports = {
  siteMetadata: {
    title: `Pasbanc`,
    description: `The best way to create and manage wealth`,
    author: `@Eadwald`,
<<<<<<< HEAD
    url: `https://pasbanc.com/`,
    image: "",
    twitterUsername: "",
=======
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
