module.exports = function (eleventyConfig) {
    eleventyConfig
        .addPassthroughCopy("./src/assets/images")
        .addPassthroughCopy("./src/assets/css")
        .addPassthroughCopy("./src/assets/js")
        .addPassthroughCopy("./src/admin");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "md", "njk", "eot", "ttf", "woff", "woff2", "svg", "jpg", "png", "css", "svg", "yml"],
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }

    }
};


