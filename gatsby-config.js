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
      protocol: "https",
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
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Aaron Bosley`,
      short_name: `A.Bosley`,
      start_url: `/`,
      background_color: `#bdbdbd`,
      theme_color: `#ab47bc`,
      display: `standalone`,
      icon: `static/download.png`
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
      trackingId: "UA-120520318-1",
      head:true
    },
  },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}