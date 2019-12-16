require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'meta-presentation',
    description: 'A presentation about making presentations',
    author: 'Joris van de Donk',
  },
  plugins: [
    'gatsby-theme-mdx-deck'
  ],
}
