const fs = require("fs");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginSyntaxHighlight);
    eleventyConfig.setDataDeepMerge(true);

    // Filters
    eleventyConfig.addFilter('sitemapDateString', (dateObj) => {
        return new Date(dateObj).toISOString();
    });
    eleventyConfig.addFilter('pathLast', (str) => {
        let array = str.replace(/\/$/, "").split("/");
        let val = array[array.length - 1];
        return (typeof val === undefined) ? "" : val;
    });

    // Markdown plugins
    let markdownIt = require("markdown-it");
    let markdownItAnchor = require("markdown-it-anchor");
    let markdownItToc = require("markdown-it-toc-done-right");
    let markdownItOptions = {
        html: true,
        breaks: true,
        linkify: true
    };
    let markdownItAnchorOptions = {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "\ue9cb"
    };
    let markdownItTocOptions = {
        containerClass: "cf-toc",
        listClass: "cf-toc-list",
        itemClass: "cf-toc-item",
        linkClass: "cf-toc-link",
        listType: "ul",
        level: 2
    };

    eleventyConfig.setLibrary("md", markdownIt(markdownItOptions)
        .use(markdownItAnchor, markdownItAnchorOptions)
        .use(markdownItToc, markdownItTocOptions)
    );

    // Concept for paired shortcode hack
    /*
    let md = new markdownIt();
	eleventyConfig.addPairedShortcode("callout", function(content, level = "warn", format = "html") {
		if( format === "md" ) {
			content = md.renderInline(content);
		}
		return `<div class="elv-callout elv-callout-${level}">${content}</div>`;
	});
	*/

     // BrowserSync configuration and 404 page
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
    eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
    eleventyConfig.addLayoutAlias('doc', 'layouts/doc.html');

    // Static assets
    eleventyConfig.addPassthroughCopy("site/assets", "assets");
    eleventyConfig.addPassthroughCopy("site/4.0/assets", "4.0/assets");

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
