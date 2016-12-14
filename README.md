# [Figuration](http://figuration.org)

[![npm version](https://img.shields.io/npm/v/figuration.svg)](https://www.npmjs.com/package/figuration)
[![Build Status](https://img.shields.io/travis/cast-org/figuration/master.svg)](https://travis-ci.org/cast-org/figuration)
[![devDependency Status](https://img.shields.io/david/dev/cast-org/figuration.svg)](https://david-dm.org/cast-org/figuration?type=dev)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/figuration.svg)](https://saucelabs.com/u/figuration)

CAST Figuration: A feature rich, responsive, mobile first, accessible, front-end framework based on Bootstrap.

Get started at <http://figuration.org>!

## Table of Contents

- [Quick Start](#quick-start)
- [Bugs and Feature Requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Changelog](#changelog)
- [Copyright and License](#copyright-and-license)

## Quick Start

Several quick start options are available:

- [Download the latest release.](https://github.com/cast-org/figuration/archive/v2.0.0.zip)
- Clone the repo: `git clone https://github.com/cast-org/figuration.git`
- Install with [npm](https://www.npmjs.com): `npm install figuration`
- Install with [yarn](https://yarnpkg.com/): `yarn add figuration`

Read the [Get Started page](http://figuration.org/get-started/quick-start/) for information on the framework, templates, and examples.


### What's Included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
figuration/
+-- css/
¦   +-- figuration.css
¦   +-- figuration.css.map
¦   +-- figuration.min.css
¦   +-- figuration.min.css.map
+-- js/
    +-- figuration.js
    +-- figuration.min.js
```

We provide compiled CSS and JS (`figuration.*`), as well as compiled and minified CSS and JS (`figuration.min.*`). CSS [source maps](https://developer.chrome.com/devtools/docs/css-preprocessors) (`figuration.*.map`) are available for use with certain browsers' developer tools.


## Bugs and Feature Requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/cast-org/figuration/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/cast-org/figuration/issues/new).


## Documentation

Figurations's documentation, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <http://figuration.org>. The docs may also be run locally.


### Running Documentation Locally

1. Run through the [tooling setup](https://github.com/cast-org/figuration/blob/master/docs/get-started/build-tools.md#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `grunt` (or a specific set of Grunt tasks) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the root `/figuration` directory, run `bundle exec jekyll serve` in the command line.
4. Open <http://localhost:9001> in your browser, and enjoy.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).


## Contributing

Please read through our [contributing guidelines](https://github.com/cast-org/figuration/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/cast-org/figuration/tree/master/js/tests). All HTML and CSS should conform to the coding standards.

Editor preferences are available in the [editor config](https://github.com/cast-org/figuration/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

## Community

Keep up with Figuration's development and announcements.

- Follow [@figuration_org on Twitter](https://twitter.com/figuration_org)

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Figuration is maintained under [the Semantic Versioning guidelines](http://semver.org/). We might screw up, but we'll try sticking to those rules whenever possible.


## Changelog

See [the Releases section of our GitHub project](https://github.com/cast-org/figuration/releases) for changelogs for each release version.


## Copyright and License

Code and documentation copyright 2013-2016 [CAST, Inc.](http://www.cast.org) Code released under [the MIT license](https://github.com/cast-org/figuration/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/cast-org/figuration/blob/master/docs/LICENSE).
