module.exports = {
  "environment":    process.env.ELEVENTY_ENV,

  "title":          "CAST Figuration",
  "author":         "CAST, Inc.",
  "description":    "A feature rich, responsive, mobile first, accessible, front-end framework.",

  "url":            "https://figuration.org",
  "domain":         "figuration.org",
  "path":           "",
  "language":       "en-us",

  // Open Graph protocol (https://ogp.me/) - Social media meta tags
  "og": {
    "image":        "/assets/brand/figuration-social-large.png",
    "image_type":   "image/png",
    "image_width":  "1000",
    "image_height": "500"
  },

  "twitter": {
    "name":         "figuration_org",
    "home":         "https://twitter.com/figuration_org",
    "image":         "/assets/brand/figuration-social.png"
  },

  "version": {
    "current":      "4.2.0",
    "docs":         "4.2"
  },

  "repo":           "https://github.com/cast-org/figuration",
  "changelog":      "https://github.com/cast-org/figuration/releases/tag/v4.2.0",

  "download": {
    "source":       "https://github.com/cast-org/figuration/archive/v4.2.0.zip",
    "dist":         "https://github.com/cast-org/figuration/releases/download/v4.2.0/figuration-4.2.0-dist.zip"
  },

  "cdn": {
      "css":            "https://cdn.jsdelivr.net/npm/figuration@4.2.0/dist/css/figuration.min.css",
      "css_hash":       "sha384-+jx/oHgp600cLGTa4nBzk/fhhD+UoUW/2BzjKaGn+OIOri6bvkSkjzccD5zlkLk3",
      "js":             "https://cdn.jsdelivr.net/npm/figuration@4.2.0/dist/js/figuration.min.js",
      "js_hash":        "sha384-KdLNbAiijpkAF+rUTz9f9+PP+l7AEf/S9mYfGqqmKR4IZYWmbLODECG3CMuVZFgx",
      "css_rtl":        "https://cdn.jsdelivr.net/npm/figuration@4.2.0/dist/css/figuration-rtl.min.css",
      "css_rtl_hash":   "sha384-8yA4lLNOVIXARC8n76czurG8lRGuKdYYiOudHFMihgOkREdZ7tZHiUzEOKOjGBN4",
      "jquery":         "https://code.jquery.com/jquery-3.6.0.slim.min.js",
      "jquery_hash":    "sha384-Qg00WFl9r0Xr6rUqNLv1ffTSSKEFFCDCKVyHZ+sVt8KuvG99nWw5RNvbhuKgif9z",
      "popper":         "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
      "popper_hash":    "sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN",
      "fontawe":        "https://use.fontawesome.com/releases/v5.15.3/css/all.css",
      "fontawe_hash":   "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
   }
};
