module.exports = () {
  const presets = [
    "babel-preset-es2015",
    "babel-preset-es2016",
    "babel-preset-es2017"
  ].map(require.resolve)

  return {
    presets
  }
}