require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Coder.OKINAWA.jp`,
    siteTitleAlt: `Coder.OKINAWA.jp`,
    siteHeadline: `Coder.OKINAWA.jp`,
    siteUrl: `https://portfolio.coder.okinawa.jp`,
    siteDescription: `Coder.OKINAWA.jpではオープンデータを活用したインフォグラフィックスを公開しています`,
    siteLanguage: `ja`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coder.OKINAWA.jp`,
        short_name: `Coder.OKINAWA`,
        description: `Coder.OKINAWA.jpではオープンデータを活用したインフォグラフィックスを公開しています`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-WPGE9DDPRG"],
        pluginConfig: {
          head: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
          excludes: [`/404/`,]
      }
  },
  ].filter(Boolean),
}
