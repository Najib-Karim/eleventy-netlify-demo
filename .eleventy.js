module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy ("images");
    eleventyConfig.addPassthroughCopy("admin");
}
module.exports = function () {
  return {
    dir: {
      input: 'src',
      layouts: '_layouts'
    }
  };
};