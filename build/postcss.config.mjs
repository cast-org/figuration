export default context => {
  return {
    inline: false,
    annotation: true,
    sourcesContent: true,
    plugins: {
      autoprefixer: {
        cascade: false
      }
    }
  }
}
