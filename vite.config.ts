module.exports = {
  base: './',
  assetsDir: 'assets',
  cssPreprocessOptions: {
    scss: {
      additionalData: '@import "./src/assets/scss/all.scss";'
    }
  },
}