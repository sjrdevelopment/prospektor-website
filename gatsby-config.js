module.exports = {
  siteMetadata: {
    title: "Prospektor",
  },
  plugins: [
  {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "prospektor.co.uk",
    },
  },
]
};
