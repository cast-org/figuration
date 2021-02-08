# [Figuration](http://figuration.org/)

CAST Figuration: A feature rich, responsive, mobile first, accessible, front-end framework.

**Get started at <http://figuration.org/>!**

## Table of Contents

- [Status](#status)
- [Quick Start](#quick-start)
- [Bugs and Feature Requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Changelog](#changelog)
- [Copyright and License](#copyright-and-license)


## Status

**Latest Release**
[![npm version](https://img.shields.io/npm/v/figuration)](https://www.npmjs.com/package/figuration)
[![CSS size](http://img.badgesize.io/cast-org/figuration/master/dist/css/figuration.min.css?label=CSS%20size)](https://github.com/cast-org/figuration/tree/master/dist/css/figuration.min.css)
[![CSS gzip size](http://img.badgesize.io/cast-org/figuration/master/dist/css/figuration.min.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/cast-org/figuration/tree/master/dist/css/figuration.min.css)
[![JS size](http://img.badgesize.io/cast-org/figuration/master/dist/js/figuration.min.js?label=JS%20size)](https://github.com/cast-org/figuration/tree/master/dist/js/figuration.min.js)
[![JS gzip size](http://img.badgesize.io/cast-org/figuration/master/dist/js/figuration.min.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/cast-org/figuration/tree/master/dist/js/figuration.min.js)

**Dependencies**
[![peerDependencies Status](https://david-dm.org/cast-org/figuration/peer-status.svg)](https://david-dm.org/cast-org/figuration/?type=peer)
[![devDependencies Status](https://david-dm.org/cast-org/figuration/dev-status.svg)](https://david-dm.org/cast-org/figuration/?type=dev)

**Development Build Status**
[![Build Status](https://img.shields.io/travis/cast-org/figuration/master)](https://travis-ci.com/cast-org/figuration)
[![Sauce Labs Test Status](https://saucelabs.com/browser-matrix/figuration.svg)](https://saucelabs.com/u/figuration)


## Quick Start

Several quick start options are available:

- [Download the latest release.](https://github.com/cast-org/figuration/archive/v4.1.1.zip)
- Clone the repo: `git clone https://github.com/cast-org/figuration.git`
- Install with [npm](https://www.npmjs.com/): `npm install figuration@4.1.1`
- Install with [yarn](https://yarnpkg.com/): `yarn add figuration@4.1.1`

Read the [Get Started page](http://figuration.org/4.1/get-started/quick-start/) for information on the framework, templates, and examples.


### What's Included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
figuration/
+-- dist/
    +-- css/
    ¦   +-- figuration.css
    ¦   +-- figuration.min.css
    ¦   +-- figuration-rtl.css
    ¦   +-- figuration-rtl.min.css
    +-- js/
        +-- figuration.js
        +-- figuration.min.js
```

We provide compiled CSS and JS (`figuration.*`), as well as compiled and minified CSS and JS (`figuration.min.*`). CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`figuration.*.map`) are available for use with certain browsers' developer tools.


## Bugs and Feature Requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/cast-org/figuration/tree/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/cast-org/figuration/issues/new).


## Documentation

Figurations's documentation, included in this repo in the root directory, is built with [Eleventy](https://www.11ty.io/) and publicly hosted on GitHub Pages at <http://figuration.org>. The docs may also be run locally.


### Running Documentation Locally

1. Run `npm install` to install Node.js dependencies.
2. Run `grunt dist` (or a specific set of Grunt tasks) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the root `/figuration` directory, run `npm run docs-serve` in the command line.
4. Open `http://localhost:9001` in your browser, and enjoy.

Learn more about using Eleventy by reading its [documentation](https://www.11ty.io/docs/).


## Contributing

Please read through our [contributing guidelines](https://github.com/cast-org/figuration/tree/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

If your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/cast-org/figuration/tree/master/js/tests). All HTML and CSS should conform to the coding standards.

Editor preferences are available in the [editor config](https://github.com/cast-org/figuration/tree/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org>.


## Community

Keep up with Figuration's development and announcements.

- Follow [@figuration_org on Twitter](https://twitter.com/figuration_org)


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Figuration is maintained under [the Semantic Versioning guidelines](http://semver.org/). We might screw up, but we'll try sticking to those rules whenever possible.


## Changelog

See [the Releases section of our GitHub project](https://github.com/cast-org/figuration/releases) for changelogs for each release version.


## Copyright and License

Code and documentation copyright 2013-2021 [CAST, Inc.](http://www.cast.org/) Code released under [the MIT license](https://github.com/cast-org/figuration/tree/master/LICENSE). Docs released under [Creative Commons](https://github.com/cast-org/figuration/tree/master/docs/LICENSE).
