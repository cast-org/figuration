/* eslint-env node */
/* eslint node/no-process-env: 0 */

const ENV = process.env;
const DEBUG = Boolean(ENV.DEBUG);
const SAUCE = Boolean(ENV.SAUCE);

const ip = require('ip');
const {
    browsers,
    browsersKeys
} = require('./browsers');

const date = new Date();
const dateString = date.toISOString();
const dateTime = date.getTime();

const jqueryFile = 'node_modules/jquery/dist/jquery.slim.min.js';

const frameworks = [
    'qunit'
];

const plugins = [
    'karma-qunit'
];

const reporters = [
    'dots'
];

const detectBrowsers = {
    usePhantomJS: false,
    postDetection(availableBrowser) {
        if (ENV.CI === true || availableBrowser.includes('Chrome')) {
            return DEBUG ? ['Chrome'] : ['ChromeHeadless'];
        }

        if (availableBrowser.includes('Chromium')) {
            return DEBUG ? ['Chromium'] : ['ChromiumHeadless'];
        }

        if (availableBrowser.includes('Firefox')) {
            return DEBUG ? ['Firefox'] : ['FirefoxHeadless'];
        }

        throw new Error('Please install Chrome, Chromium or Firefox');
    }
};

const customLaunchers = {
    FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless']
    }
};

const files = [
    jqueryFile,
    'node_modules/popper.js/dist/umd/popper.min.js',
    'js/util/backdrop.js',
    'js/util/scrollbar.js',
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
    'js/equalize.js',
    'js/player.js',
    'js/common.js',
    'test/js/unit/**/*.js',
    {
        pattern: 'test/js/assets/*',
        watched: false,
        included: false,
        served: true
    }
];

const proxies = {
    '/assets/': '/base/test/js/assets/'
};

const conf = {
    basePath: '..',
    hostname: ip.address(),
    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    client: {
        clearContext: false,
        qunit: {
            hidepassed: false,
            showUI: true
        }
    }
};

// Some test to go here later
if (SAUCE) {
    conf.sauceLabs = {
        build: `figuration-${ENV.GITHUB_SHA ? ENV.GITHUB_SHA.slice(0, 7) + '-' : ''}${dateString}`,
        tunnelIdentifier: `figuration-${dateTime}`,
        username: ENV.SAUCE_USERNAME,
        accessKey: ENV.SAUCE_ACCESS_KEY,
        startConnect: true
    };
    plugins.push('karma-sauce-launcher');
    conf.customLaunchers = browsers;
    conf.browsers = browsersKeys;
    reporters.push('saucelabs');
    conf.concurrency = 3;
    conf.browserDisconnectTimeout = 3 * 60 * 1000;
    conf.client.qunit.hidepassed = true;
} else {
    frameworks.push('detectBrowsers');
    plugins.push(
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-detect-browsers'
    );
    conf.customLaunchers = customLaunchers;
    conf.detectBrowsers = detectBrowsers;

    if (DEBUG) {
        conf.autoWatch = true;
        conf.singleRun = false;
    }
}

conf.frameworks = frameworks;
conf.plugins = plugins;
conf.reporters = reporters;
conf.files = files;
conf.proxies = proxies;

module.exports = function(config) {
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    conf.logLevel = config.LOG_ERROR;
    config.set(conf);
};
