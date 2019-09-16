const fs = require("fs");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginSyntaxHighlight);
    eleventyConfig.setDataDeepMerge(true);

    // Filters
    eleventyConfig.addFilter('sitemapDateString', (dateObj) => {
        return new Date(dateObj).toISOString();
    });

    // Markdown plugins
    let markdownIt = require("markdown-it");
    let markdownItAnchor = require("markdown-it-anchor");
    let options = {
        html: true,
        breaks: true,
        linkify: true
    };
    let opts = {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "#"
    };

    eleventyConfig.setLibrary("md", markdownIt(options)
        .use(markdownItAnchor, opts)
    );

     // // BrowserSync configuration and 404 page
    eleventyConfig.setBrowserSyncConfig({
        notify: true,
        callbacks: {
            ready: function(err, browserSync) {
                const content_404 = fs.readFileSync('_siteout/404.html');

                browserSync.addMiddleware("*", (req, res) => {
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.end();
                });
            }
        }
    });

    // Layout aliases
    //eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
    //eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

    // Static assets
    eleventyConfig.addPassthroughCopy("4.0/assets", "assets");

    return {
        templateFormats: ["md", "html", "liquid"],
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid",
        dataTemplateEngine: "liquid",
        passthroughFileCopy: true,

        pathPrefix: "/",
        dir: {
            input: "site",
            output: "_siteout",
            includes: "_includes",
            data: "_data"
        }
    };
};
