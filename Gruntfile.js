/* eslint-env es6 */
/* eslint-disable global-require, no-process-env */
/* eslint quote-props: ["error", "as-needed"] */
/* global module, process, require */

/*!
 * Figuration
 * Copyright 2013-2021 CAST, Inc.
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 */

module.exports = function(grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    RegExp.quote = function(string) {
        return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    var saucekey = null;
    if (typeof process.env.SAUCE_ACCESS_KEY !== 'undefined') {
        saucekey = process.env.SAUCE_ACCESS_KEY;
    }

    var autoprefixer = require('autoprefixer');
    var flexbugs = require('postcss-flexbugs-fixes');
    var calc = require('postcss-calc');
    var sass = require('node-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
                ' * Figuration (v<%= pkg.version %>)\n' +
                ' * <%= pkg.homepage %>\n' +
                ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)\n' +
                ' * -----\n' +
                ' * Portions Copyright 2011-<%= grunt.template.today("yyyy") %>  the Bootstrap Authors and Twitter, Inc.\n' +
                ' * Used under MIT License (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n' +
                ' */\n',
        jqueryCheck: 'if (typeof jQuery === \'undefined\') {\n' +
                     '  throw new Error(\'CAST Figuration\\\'s JavaScript requires jQuery\');\n' +
                     '}\n',
        jqueryVersionCheck: '(function($) {\n' +
                            '  var version = $.fn.jquery.split(\' \')[0].split(\'.\');\n' +
                            '  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {\n' +
                            '    throw new Error(\'CAST Figuration\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\');\n' +
                            '  }\n' +
                            '})(jQuery);\n\n',

        // File definitions
        // ==========
        jsCore: [
            'js/util.js',
            'js/drag.js',
            'js/collapse.js',
            'js/dropdown.js',
            'js/tab.js',
            'js/affix.js',
            'js/tooltip.js',
            'js/popover.js',
            'js/modal.js',
            'js/accordion.js',
            'js/tab-responsive.js',
            'js/slideshow.js',
            'js/scrollspy.js',
            'js/alert.js',
            'js/lazy.js',
            'js/slider.js',
            'js/img-compare.js',
            'js/equalize.js',
            'js/player.js',
            'js/common.js'
        ],

        jsDocs: [
            'site/assets/<%= pkg.versionShort %>/js/vendor/anchor.min.js',
            'site/assets/<%= pkg.versionShort %>/js/vendor/clipboard.min.js',
            'site/assets/<%= pkg.versionShort %>/js/vendor/holder.min.js',
            'site/assets/<%= pkg.versionShort %>/js/src/docs.js'
        ],

        // Task configs
        // ==========
        clean: {
            dist: 'dist',
            docs: 'site/<%= pkg.versionShort %>/dist',
            docscss: 'site/assets/<%= pkg.versionShort %>/css'
        },

        eslint: {
            options: {
                config: '.eslintrc.json',
                reportUnusedDisableDirectives: 'true'
            },
            build: {
                options: {
                    config: 'build/.eslintrc.json'
                },
                src: 'build/*.js'
            },
            core: {
                src: '<%= jsCore %>'
            },
            test: {
                options: {
                    config: 'test/js/unit/.eslintrc.json'
                },
                src: 'test/js/unit/*.js'
            },
            docs : {
                src: ['site/assets/<%= pkg.versionShort %>/js/src/*.js', 'site/assets/<%= pkg.versionShort %>/js/*.js', '!site/assets/<%= pkg.versionShort %>/js/*.min.js']
            }
        },

        concat: {
            options: {
                banner: '<%= banner %>\n<%= jqueryCheck %>\n<%= jqueryVersionCheck %>',
                stripBanners: false
            },
            core: {
                src: '<%= jsCore %>',
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                mangle: true,
                output: {
                    comments: /^!|@preserve|@license|@cc_on/i
                }
            },
            core: {
                src: '<%= concat.core.dest %>',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            },
            docs: {
                src: '<%= jsDocs %>',
                dest: 'site/assets/<%= pkg.versionShort %>/js/docs.min.js'
            }
        },

        copy: {
            docs: {
                expand: true,
                cwd: 'dist/',
                src: ['**/*'],
                dest: 'site/<%= pkg.versionShort %>/dist/'
            }
        },

        stylelint: {
            options: {
                configFile: '.stylelintrc'
            },
            core: {
                src: ['scss/**/*.scss']
            },
            docs: {
                src: ['site/assets/<%= pkg.versionShort %>/scss/*.scss']
            }
        },

        sass: {
            options: {
                implementation: sass,
                includePaths: ['scss'],
                precision: 6,
                sourceComments: false,
                sourceMap: true,
                outputStyle: 'expanded'
            },
            core: {
                files: {
                    'dist/css/<%= pkg.name %>.css': 'scss/<%= pkg.name %>.scss'
                }
            },
            docs: {
                files: {
                    'site/assets/<%= pkg.versionShort %>/css/docs.css': 'site/assets/<%= pkg.versionShort %>/scss/docs.scss'
                }
            }
        },

        postcss: {
            core: {
                options: {
                    map: true,
                    processors: [flexbugs, calc, autoprefixer]
                },
                src: ['dist/css/*.css', '!dist/css/*.min.css']
            },
            docs: {
                options: {
                    processors: [flexbugs, calc, autoprefixer]
                },
                src: ['site/assets/<%= pkg.versionShort %>/css/*.css', '!site/assets/<%= pkg.versionShort %>/css/*.min.css']
            }
        },

        rtlcss: {
            core: {
                options: {
                    map: {
                        inline: false
                    },
                    opts: {
                        clean: true
                    }
                },
                expand: true,
                cwd: 'dist/css',
                src: ['*.css', '!*.min.css', '!*-rtl.css'],
                dest: 'dist/css',
                ext: '-rtl.css'
            },
            docs: {
                options: {
                    map: {
                        inline: false
                    },
                    opts: {
                        clean: true
                    }
                },
                expand: true,
                cwd: 'site/assets/<%= pkg.versionShort %>/css',
                src: ['*.css', '!*.min.css', '!*-rtl.css'],
                dest: 'site/assets/<%= pkg.versionShort %>/css',
                ext: '-rtl.css'
            }
        },

        cssmin: {
            options: {
                report: 'gzip',
                specialComments: '*',
                sourceMap: true,
                advanced: false
            },
            core: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'dist/css',
                        ext: '.min.css'
                    }
                ]
            },
            docs: {
                files: [
                    {
                        expand: true,
                        cwd: 'site/assets/<%= pkg.versionShort %>/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'site/assets/<%= pkg.versionShort %>/css',
                        ext: '.min.css'
                    }
                ]
            }
        },

        htmllint: {
            options: {
                ignore: [
                    'Consider using the "h1" element as a top-level heading only (all "h1" elements are treated as top-level headings by many screen readers and other tools).',
                    'Element "legend" not allowed as child of element "div" in this context. (Suppressing further errors from this subtree.)',
                    'Element "img" is missing required attribute "src".',
                    'The "color" input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
                    'The "datetime-local" input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.'
                ]
            },
            docs: {
                src: ['_siteout/**/*.html']
            },
            test: {
                src: ['test/visual/*.html']
            }
        },

        watch: {
            src: {
                files: '<%= eslint.core.src %>',
                tasks: ['eslint:core', 'concat']
            },
            sass: {
                files: 'scss/**/*.scss',
                tasks: ['dist-css', 'docs-dist-css']
            },
            docs: {
                files: 'site/assets/<%= pkg.versionShort %>/scss/**/*.scss',
                tasks: ['docs-dist-css', 'docs']
            }
        },

        run: {
            npmCssLintVarsCore: {
                exec: 'npm run css-lint-vars-core'
            },
            npmCssLintVarsDocs: {
                exec: 'npm run css-lint-vars-docs'
            },
            npmJsTestKarma: {
                exec: 'npm run js-test-karma'
            },
            npmJsTestCloud: {
                exec: 'npm run js-test-cloud'
            },
            npmDocsBuild: {
                exec: 'npm run docs-build'
            },
            npmDocsServe: {
                exec: 'npm run docs-serve'
            },
            npmLinkinator: {
                exec: 'npm run linkinator'
            }
        }
    });

    // Tasks
    // ==========
    // Load required plugins for tasks
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });
    require('time-grunt')(grunt);

    // Default
    grunt.registerTask('default', ['clean:dist', 'test']);

    // Test
    grunt.registerTask('test', ['dist-css', 'dist-js', 'docs-dist', 'test-css', 'test-js', 'docs-test']);
    grunt.registerTask('test-css', ['stylelint:core', 'run:npmCssLintVarsCore']);
    grunt.registerTask('test-html', ['htmllint:test']);

    // Test - JS subtasks
    var jsTestTasks = ['eslint:core', 'eslint:test', 'eslint:build'];
    if (saucekey !== null && process.env.TEST_SAUCE === 'true') {
        jsTestTasks.push('run:npmJsTestCloud');
    } else {
        jsTestTasks.push('run:npmJsTestKarma');
    }
    grunt.registerTask('test-js', jsTestTasks);

    // CSS distribution
    grunt.registerTask('dist-css', ['sass:core', 'postcss:core', 'rtlcss:core', 'cssmin:core']);

    // JS distribution
    grunt.registerTask('dist-js', ['concat', 'uglify:core']);

    // Full distribution
    grunt.registerTask('dist', ['clean:dist', 'dist-css', 'dist-js', 'docs-dist']);

    // Docs tasks
    grunt.registerTask('docs-test-html', ['run:npmDocsBuild', 'htmllint:docs', 'run:npmLinkinator']);
    grunt.registerTask('docs-test-css', ['stylelint:docs', 'run:npmCssLintVarsDocs']);
    grunt.registerTask('docs-dist-css', ['sass:docs', 'postcss:docs', 'rtlcss:docs', 'cssmin:docs']);
    grunt.registerTask('docs-test-js', ['eslint:docs']);
    grunt.registerTask('docs-dist-js', ['uglify:docs']);
    grunt.registerTask('docs-test', ['docs-test-css', 'docs-test-js', 'docs-test-html']);
    grunt.registerTask('docs-dist', ['docs-dist-css', 'docs-dist-js']);
    grunt.registerTask('docs', ['run:npmDocsServe']);
};
