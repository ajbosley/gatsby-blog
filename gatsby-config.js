module.exports = {
  siteMetadata: {
    title: `Aaron Bosley`,
    author: `Aaron Bosley`,
    age: `24`,
    description: `My life as an outdoorsy developer, blogged.`,
    siteUrl: `https://ajbosley.co.uk`,
  },
  plugins: [{
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "ajbosley-gatsby",
      protocol: "http",
      hostname: `www.ajbosley.co.uk`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/blog`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [{
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 590,
        },
      },
      {
        resolve: `gatsby-remark-responsive-iframe`,
        options: {
          wrapperStyle: `margin-bottom: 1.0725rem`,
        },
      },
        `gatsby-remark-prismjs`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      //trackingId: `ADD YOUR TRACKING ID HERE`,
    },
  },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}