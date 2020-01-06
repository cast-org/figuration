# [Figuration](http://figuration.org/)

CAST Figuration: A feature rich, responsive, mobile first, accessible, front-end framework.

**Get started at <http://figuration.org/>!**

**This is the v4 development branch, currently in very-early alpha.  Not ready for production yet! Check out v3 at the link above!**

**Documentation preview and examples for v4 at <https://figuration-org.github.io/figuration-preview/>.**

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
[![npm version](https://img.shields.io/npm/v/figuration.svg)](https://www.npmjs.com/package/figuration)
[![CSS size](http://img.badgesize.io/cast-org/figuration/v4.0.0-beta.2/dist/css/figuration.min.css?label=CSS+size)](https://github.com/cast-org/figuration/tree/v4.0.0-beta.2/dist/css/figuration.min.css)
[![CSS gzip size](http://img.badgesize.io/cast-org/figuration/v4.0.0-beta.2/dist/css/figuration.min.css?compression=gzip&label=CSS+gzip+size)](https://github.com/cast-org/figuration/tree/v4.0.0-beta.2/dist/css/figuration.min.css)
[![JS size](http://img.badgesize.io/cast-org/figuration/v4.0.0-beta.2/dist/js/figuration.min.js?label=JS+size)](https://github.com/cast-org/figuration/tree/v4.0.0-beta.2/dist/js/figuration.min.js)
[![JS gzip size](http://img.badgesize.io/cast-org/figuration/v4.0.0-beta.2/dist/js/figuration.min.js?compression=gzip&label=JS+gzip+size)](https://github.com/cast-org/figuration/tree/v4.0.0-beta.2/dist/js/figuration.min.js)

**Dependencies**
[![peerDependencies Status](https://david-dm.org/cast-org/figuration/v4-dev/peer-status.svg)](https://david-dm.org/cast-org/figuration/v4-dev?type=peer)
[![devDependencies Status](https://david-dm.org/cast-org/figuration/v4-dev/dev-status.svg)](https://david-dm.org/cast-org/figuration/v4-dev?type=dev)

**Development Build Status**
[![Build Status](https://img.shields.io/travis/cast-org/figuration/master.svg)](https://travis-ci.org/cast-org/figuration)
[![Sauce Labs Test Status](https://saucelabs.com/browser-matrix/figuration.svg)](https://saucelabs.com/u/figuration)


## Quick Start

Several quick start options are available:

Nothing has been released yet, as this is a development version.

- [Download the latest release.](https://github.com/cast-org/figuration/archive/v4.0.0-beta.2.zip)
- Clone the repo: `git clone https://github.com/cast-org/figuration.git`
- Install with [npm](https://www.npmjs.com/): `npm install figuration@4.0.0-beta.2`
- Install with [yarn](https://yarnpkg.com/): `yarn add figuration@4.0.0-beta.2`

Read the [Get Started page](http://figuration.org/get-started/quick-start/) for information on the framework, templates, and examples.


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

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/cast-org/figuration/tree/v4-dev/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/cast-org/figuration/issues/new).


## Documentation

Figurations's documentation, included in this repo in the root directory, is built with [Eleventy](https://www.11ty.io/) and publicly hosted on GitHub Pages at <http://figuration.org>. The docs may also be run locally.


### Running Documentation Locally

1. Run through the [tooling setup](https://github.com/cast-org/figuration/tree/v4-dev/docs/get-started/build-tools.md#tooling-setup) to install the development dependencies.
2. Run `npm install` to install Node.js dependencies.
4. Run `grunt` (or a specific set of Grunt tasks) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
5. From the root `/figuration` directory, run `npm run docs-serve` in the command line.
6. Open `http://localhost:9001` in your browser, and enjoy.

Learn more about using Eleventy by reading its [documentation](https://www.11ty.io/docs/).


## Contributing

Please read through our [contributing guidelines](https://github.com/cast-org/figuration/tree/v4-dev/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

If your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/cast-org/figuration/tree/v4-dev/js/tests). All HTML and CSS should conform to the coding standards.

Editor preferences are available in the [editor config](https://github.com/cast-org/figuration/tree/v4-dev/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org>.


## Community

Keep up with Figuration's development and announcements.

- Follow [@figuration_org on Twitter](https://twitter.com/figuration_org)


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Figuration is maintained under [the Semantic Versioning guidelines](http://semver.org/). We might screw up, but we'll try sticking to those rules whenever possible.


## Changelog

See [the Releases section of our GitHub project](https://github.com/cast-org/figuration/releases) for changelogs for each release version.


## Copyright and License

Code and documentation copyright 2013-2020 [CAST, Inc.](http://www.cast.org/) Code released under [the MIT license](https://github.com/cast-org/figuration/tree/v4-dev/LICENSE). Docs released under [Creative Commons](https://github.com/cast-org/figuration/tree/v4-dev/docs/LICENSE).
