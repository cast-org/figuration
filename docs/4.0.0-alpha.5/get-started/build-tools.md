---
layout: docs
title: Build Tools
group: get-started
---

[sass]: http://sass-lang.com/
[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[gembundler]: https://bundler.io/
[libsass]: https://github.com/sass/libsass
[grunt-sass]: https://github.com/sindresorhus/grunt-sass
[autoprefixer]: https://github.com/postcss/autoprefixer
[postcss-flexbugs-fixes]: https://github.com/luisrudge/postcss-flexbugs-fixes
[qunit]: https://qunitjs.com/
[eslint]: https://eslint.org/
[stylelint]: https://stylelint.io/

Figuration uses [Grunt](https://gruntjs.com/) for its CSS and JavaScript build system and Jekyll for the written documentation. Our Gruntfile includes convenient methods for working with the framework, including compiling code, running tests, and more.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Tooling Setup

To use our Gruntfile and run our documentation locally, you'll need a copy of Figuration's source files, Node.js, and Grunt. Follow these steps and you should be ready to rock:

1. [Download and install Node.js](https://nodejs.org/en/download/), which we use to manage our dependencies.
2. Install the Grunt command line tools, `grunt-cli`, with `npm install -g grunt-cli`.
3. Navigate to the root `/figuration` directory and run `npm install` to install our local dependencies listed in [package.json](https://github.com/cast-org/figuration/blob/master/package.json).
4. [Install Ruby][install-ruby], install [Bundler][gembundler] with `gem install bundler`, and finally run `bundle install`. This will install all Ruby dependencies, such as Jekyll and plugins.
  - **Windows users:** Read [this guide](https://jekyllrb.com/docs/windows/) to get Jekyll up and running without problems.

When completed, you'll be able to run the various Grunt commands provided from the command line.

## Using Grunt

Our Gruntfile includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `grunt` | Run `grunt` to run tests locally and compile the CSS and JavaScript into `/dist`. **Uses [Sass][sass], [Autoprefixer][autoprefixer], [postcss-flexbugs-fixes][postcss-flexbugs-fixes], and [UglifyJS](http://lisperator.net/uglifyjs/).** |
| `grunt dist` | `grunt dist` creates the `/dist` directory with compiled files. **Uses [Sass][sass], [Autoprefixer][autoprefixer], [postcss-flexbugs-fixes][postcss-flexbugs-fixes], and [UglifyJS](http://lisperator.net/uglifyjs/).** |
| `grunt test` | Runs [stylelint][stylelint], [eslint][eslint] and [QUnit][qunit] tests headlessly in [PhantomJS](http://phantomjs.org/). |
| `grunt docs` | Builds and tests CSS, JavaScript, and other assets which are used when running the documentation locally via `bundle exec jekyll serve`. |
| `grunt watch` | This is a convenience method for watching just Sass files and automatically building them whenever you save. |
{:.table-grunt}

## Sass Compiler

Figuration is compiled with [libsass][libsass] via [grunt-sass][grunt-sass]. There are no alternative options at this time.

In order to reduce potential issues with browser rounding, our build process has increased the [Sass rounding precision](http://sass-lang.com/documentation/Sass/Script/Value/Number.html#precision-class_method) to 6 (by default it's 5).

## Autoprefixer

Figuration uses [Autoprefixer][autoprefixer] (included in our Gruntfile and build process) to automatically add vendor prefixes to some CSS properties at build time. Doing so saves us time and code by allowing us to write key parts of our CSS a single time while eliminating the need for vendor mixins.

We maintain the list of browsers supported through Autoprefixer in a separate file within our GitHub repository. [See our `.browserslistrc`]({{ site.repo }}/blob/v4-dev/.browserslistrc) for details.

## postcss-flexbugs-fixes

Also included in our Gruntfile and build process is [postcss-flexbugs-fixes][postcss-flexbugs-fixes] to work around some browser issues for flexbox layout.  More information about these issues can be found over at the [Flexbugs](https://github.com/philipwalton/flexbugs) repository.



## Local Documentation

Running our documentation locally requires the use of Jekyll, a decently flexible static site generator that provides us: basic includes, Markdown-based files, templates, and more. Here's how to get it started:

1. Run through the [tooling setup](#tooling-setup) above to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. From the root `/figuration` directory, run `bundle exec jekyll serve` in the command line.
3. Open `http://localhost:9001` in your browser, and enjoy.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

## Troubleshooting

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.
