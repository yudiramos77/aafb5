const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const cleanCss = require("clean-css");

module.exports = function (eleventyConfig) {    
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig
        .addPassthroughCopy("./src/assets/images")
        .addPassthroughCopy("./src/favicon*")
        .addPassthroughCopy("./src/assets/css")
        .addPassthroughCopy("./src/assets/js")
        .addPassthroughCopy("./src/assets/permits")
        .addPassthroughCopy("./src/assets/docs")
        .addPassthroughCopy("./src/assets/lightbox")
        .addPassthroughCopy("./src/admin");
    eleventyConfig.addLayoutAlias("posts", "layouts/posts.njk");
    eleventyConfig.addFilter('dump', obj => {
        const getCircularReplacer = () => {
            const seen = new WeakSet();
            return (key, value) => {
            if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                return;
                }
                seen.add(value);
            }
            return value;
            };
        };
        
        return JSON.stringify(obj, getCircularReplacer(), 4);
    });
    eleventyConfig.addFilter("cssmin", function(code) {
        return new cleanCss({}).minify(code).styles;
    });

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "md", "njk", "eot", "ttf", "woff", "woff2", "svg", "jpg", "png", "css", "svg", "yml", "gif"],
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }

    }
};




