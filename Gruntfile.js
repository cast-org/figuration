/*!
 * Figuration
 * Copyright 2013-2016 CAST, Inc.
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

    var autoprefixerSettings = require('./grunt/autoprefixer-settings.js');
    var autoprefixer = require('autoprefixer')(autoprefixerSettings);
    var flexbugs = require('postcss-flexbugs-fixes');

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
            'js/transition.js',
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
            'js/button.js',
            'js/lazy.js',
            'js/slider.js',
            'js/img-compare.js',
            'js/equalize.js',
            'js/player.js',
            'js/common.js'
        ],

        jsDocs: [
            'docs/assets/js/vendor/anchor.min.js',
            'docs/assets/js/vendor/clipboard.min.js',
            'docs/assets/js/vendor/holder.min.js',
            'docs/assets/js/src/docs.js'
        ],

        // Task configs
        // ==========
        clean: {
            dist: 'dist',
            docs: 'docs/dist'
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            grunt: {
                options: {
                    jshintrc: 'grunt/.jshintrc'
                },
                src: ['Gruntfile.js', 'grunt/*.js']
            },
            core: {
                src: '<%= jsCore %>'
            },
            test: {
                options: {
                    jshintrc: 'test/js/unit/.jshintrc'
                },
                src: 'test/js/unit/*.js'
            }
            /*,
            docs: {
                src: ['docs/assets/js/src/*.js', 'docs/assets/js/*.js', '!docs/assets/js/*.min.js']
            }
            */
        },

        jscs: {
            options: {
                config: '.jscsrc'
            },
            grunt: {
                src: '<%= jshint.grunt.src %>'
            },
            core: {
                src: '<%= jshint.core.src %>'
            },
            test: {
                src: '<%= jshint.test.src %>'
            },
            docs: {
                options: {
                    requireCamelCaseOrUpperCaseIdentifiers: null
                },
                src: ['docs/assets/js/src/*.js', 'docs/assets/js/*.js', '!docs/assets/js/*.min.js']
            }
        },

        qunit: {
            options: {
                inject: 'test/js/unit/phantom.js'
            },
            files: 'test/js/index.html'
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
                compress: {
                    warnings: false
                },
                mangle: true,
                preserveComments: /^!|@preserve|@license|@cc_on/i
            },
            core: {
                src: '<%= concat.core.dest %>',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            },
            docs: {
                src: '<%= jsDocs %>',
                dest: 'docs/assets/js/docs.min.js'
            }
        },

        copy: {
            docs: {
                expand: true,
                cwd: 'dist/',
                src: ['**/*'],
                dest: 'docs/dist/'
            }
        },

        scsslint: {
            options: {
                configFile: '.scss-lint.yml'
            },
            core: {
                src: ['scss/*.scss', 'scss/**/*.scss', '!scss/base/_normalize.scss']
            },
            docs: {
                src: ['docs/assets/scss/*.scss']
            }
        },

        sass: {
            options: {
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
                    'docs/assets/css/docs.css': 'docs/assets/scss/docs.scss'
                }
            }
        },

        postcss: {
            core: {
                options: {
                    map: true,
                    processors: [flexbugs, autoprefixer]
                },
                src: ['dist/css/*.css', '!dist/css/*.min.css']
            },
            docs: {
                options: {
                    processors: [flexbugs, autoprefixer]
                },
                src: ['docs/assets/css/*.css', '!docs/assets/css/*.min.css']
            }
        },

        cssmin: {
            options: {
                compatibility: 'ie9',
                keepSpecialComments: '*',
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
                        cwd: 'docs/assets/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'docs/assets/css',
                        ext: '.min.css'
                    }
                ]
            }
        },

        jekyll: {
            options: {
                bundleExec: true,
                config: '_config.yml',
                incremental: false
            },
            docs: {},
            github: {
                options: {
                    raw: 'github: true'
                }
            }
        },

        /* jshint -W100 */
        htmllint: {
            options: {
                ignore: [
                    'Attribute "autocomplete" is only allowed when the input type is "color", "date", "datetime", "datetime-local", "email", "hidden", "month", "number", "password", "range", "search", "tel", "text", "time", "url", or "week".',
                    'Attribute "autocomplete" not allowed on element "button" at this point.',
                    'Consider using the "h1" element as a top-level heading only (all "h1" elements are treated as top-level headings by many screen readers and other tools).',
                    'Element "div" not allowed as child of element "progress" in this context. (Suppressing further errors from this subtree.)',
                    'Element "img" is missing required attribute "src".',
                    'The "color" input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
                    'The "date" input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
                    'The "datetime" input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
                    'The "datetime-local" input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
                    'The "month" input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
                    'The "time" input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
                    'The "week" input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.'
                ]
            },
            docs: {
                src: ['_gh_pages/**/*.html']
            }
            // TODO:
            // test: {
            //    src: ['js/tests/visual/*.html']
            // }
        },
        /* jshint +W100 */

        watch: {
            src: {
                files: '<%= jshint.core.src %>',
                tasks: ['jshint:core', 'qunit', 'concat']
            },
            sass: {
                files: 'scss/**/*.scss',
                tasks: ['dist-css', 'docs']
            },
            docs: {
                files: 'docs/assets/scss/**/*.scss',
                tasks: ['dist-css', 'docs']
            }
        },

        connect: {
            server: {
                options: {
                    port: 3000,
                    base: '.'
                }
            }
        },

        'saucelabs-qunit': {
            all: {
                options: {
                    build: process.env.TRAVIS_JOB_ID,
                    throttled: 3,
                    maxRetries: 3,
                    maxPollRetries: 4,
                    urls: ['http://127.0.0.1:3000/test/js/index.html?hidepassed'],
                    browsers: grunt.file.readYAML('grunt/sauce_browsers.yml'),
                    sauceConfig: {
                        'video-upload-on-pass': false
                    }
                }
            }
        }
    });

    // Tasks
    // ==========
    // Load required plugins for tasks
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    require('time-grunt')(grunt);

    // Default
    grunt.registerTask('default', ['clean:dist', 'test']);

    // Test
    grunt.registerTask('test', ['dist-css', 'dist-js', 'test-css', 'test-js']);
    grunt.registerTask('test-css', ['scsslint:core']);

    // Test - JS subtasks
    var jsTestTasks = ['jshint:core', 'jshint:test', 'jshint:grunt', 'jscs:core', 'jscs:test', 'jscs:grunt'];
    if (saucekey !== null && process.env.TEST_SAUCE === 'true') {
        jsTestTasks.push('connect');
        jsTestTasks.push('saucelabs-qunit');
    } else {
        jsTestTasks.push('qunit');
    }
    grunt.registerTask('test-js', jsTestTasks);

    // CSS distribution
    grunt.registerTask('dist-css', ['sass:core', 'postcss:core', 'cssmin:core']);

    // JS distribution
    grunt.registerTask('dist-js', ['concat', 'uglify:core']);

    // Full distribution
    grunt.registerTask('dist', ['clean:dist', 'dist-css', 'dist-js']);

    // Docs tasks
    grunt.registerTask('docs-test-html', ['jekyll:docs', 'htmllint:docs']);
    grunt.registerTask('docs-test-css', ['scsslint:docs']);
    grunt.registerTask('docs-dist-css', ['sass:docs', 'postcss:docs', 'cssmin:docs']);
    grunt.registerTask('docs-test-js', ['jscs:docs']);
    grunt.registerTask('docs-dist-js', ['uglify:docs']);
    grunt.registerTask('docs', ['docs-test-css', 'docs-dist-css', 'docs-test-js', 'docs-dist-js', 'clean:docs', 'copy:docs']);
    grunt.registerTask('docs-github', ['jekyll:github']);

};
