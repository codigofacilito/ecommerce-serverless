/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options:{
        objects: ["Sku","Product"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downoaldFiles: true
      }
    },
    `gatsby-plugin-stripe`
  ],
  siteMetadata: {
    title: "CódigoFacilito Store",
    url: "https://codigofacilito.com", // URI
    description: "Buy and acquire SWAG from CódigoFacilito"
  }
}
