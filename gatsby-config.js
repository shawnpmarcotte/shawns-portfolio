module.exports = {
  siteMetadata: {
    title: 'Prophecy Web Solutions',
    author: 'Shawn Marcotte Jr',
    description: 'A Prophecy Enterprise Production',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',

      },
    },
    'gatsby-plugin-sass',
  ],
}
// icon: 'src/images/gatsby-icon.png',