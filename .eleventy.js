const fs = require("fs");
const Prism = require("prismjs");
const PrismLoader = require("prismjs/components/index.js");

module.exports = function(eleventyConfig) {
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

    // Use singular short codes for syntax highlights and examples
    // Work around issue with no parsing between paired shortcodes.
    eleventyConfig.addShortcode("renderHighlight", function(content, language) {
        let highlightedContent = content.trim();
        if(language !== "text") {
            if(!Prism.languages[language]) {
                PrismLoader([language]);
            }
            highlightedContent = Prism.highlight(highlightedContent, Prism.languages[language]);
        }
        //let lines = highlightedContent.split("\n");
        //return `<pre class="language-${language}"><code class="language-${language}">` + lines.join("<br>") + "</code></pre>";
        return `<pre class="language-${language}"><code class="language-${language}">` + highlightedContent + "</code></pre>";
    });

    eleventyConfig.addShortcode("renderExample", function(content, language, id) {
        let highlightedContent = content.trim();
        let lines = {};
        let output = "";
        let outputId = "";
        let parsedContent = "";

        // Strip out `holder.js` reference
        if (highlightedContent.includes('data-src="holder.js')) {
            parsedContent = highlightedContent.replace('data-src="holder.js', 'src="✂️holder.js');
            parsedContent = parsedContent.replace(/\" /g, '✂️" ');
            parsedContent = parsedContent.split('✂️');
            highlightedContent = "";
            parsedContent.forEach(function(str) {
                highlightedContent += str.includes('holder.js') ? '...' : str;
            });
        }

        // Send through Prism
        if(language !== "text") {
            if(!Prism.languages[language]) {
                PrismLoader([language]);
            }
            highlightedContent = Prism.highlight(highlightedContent, Prism.languages[language]);
        }
        if (typeof id !== 'undefined') {
            outputId = ' id="' + id + '"';
        }
        output += '<div class="cf-example"' + outputId +'>' + content + '</div>\n';
        output += `<pre class="language-${language}"><code class="language-${language}">` + highlightedContent + "</code></pre>";
        return output;
    });

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
