export default context => {
  return {
    inline: false,
    annotation: true,
    sourcesContent: true,
    plugins: {
      "postcss-calc": true,
      autoprefixer: {
        cascade: false
      }
    }
  }
}
