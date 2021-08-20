/* eslint-env node */
/* eslint node/no-process-env: 0 */

const ENV = process.env;
const DEBUG = Boolean(ENV.DEBUG);
const SAUCE = Boolean(ENV.SAUCE);

const date = new Date();
const dateString = date.toISOString();
const dateTime = date.getTime();

const ip = require('ip');
const {
    browsers,
    browsersKeys
} = require('./browsers');

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
    'test/js/unit/*.js',
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
        build: ENV.TRAVIS_BUILD_NUMBER ? ENV.TRAVIS_BUILD_NUMBER + '-' + ENV.TRAVIS_JOB_ID : `figuration-${dateString}`,
        tunnelIdentifier: ENV.TRAVIS_JOB_NUMBER ? ENV.TRAVIS_JOB_NUMBER : `figuration-${dateTime}`,
        username: ENV.SAUCE_USERNAME,
        accessKey: ENV.SAUCE_ACCESS_KEY,
        startConnect: ENV.TRAVIS !== 'true'
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
    //conf.logLevel = config.LOG_ERROR || config.LOG_WARN;
    //conf.logLevel = config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG;
    config.set(conf);
};

/*
const ENV = process.env;
const ip = require('ip');
const date = new Date();
const dateString = date.toISOString();
const dateTime = date.getTime();
const jqueryFile = 'node_modules/jquery/dist/jquery.slim.min.js';

const files = [
    jqueryFile,
    'node_modules/popper.js/dist/umd/popper.min.js',
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
    'test/js/unit/*.js',
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

module.exports = function(config) {
  // Example set of browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/platform combos
  var customLaunchers = {
    sl_ios_safari: {
      base: 'SauceLabs',
      deviceName: 'iPhone 11 Simulator',
      platformVersion: '13.4',
      platformName: 'iOS',
      browserName: 'Safari',
      appiumVersion: '1.17.1',
      deviceOrientation: 'portrait'
    },
  }

  config.set({
    sauceLabs: {
        //testName: 'Web App Unit Tests'
        build: ENV.TRAVIS_BUILD_NUMBER ? ENV.TRAVIS_BUILD_NUMBER + '-' + ENV.TRAVIS_JOB_ID : `figuration-${dateString}`,
        tunnelIdentifier: ENV.TRAVIS_JOB_NUMBER ? ENV.TRAVIS_JOB_NUMBER : `figuration-${dateTime}`,
        username: ENV.SAUCE_USERNAME,
        accessKey: ENV.SAUCE_ACCESS_KEY,
    },
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    reporters: ['dots', 'saucelabs'],
    singleRun: true,

    frameworks:['qunit'],
    plugins: ['karma-qunit', 'karma-sauce-launcher'],
    basePath: '..',
    hostname: ip.address(),
    port: 9876,
    colors: true,
    autoWatch: false,
    concurrency: 3,
    client: {
        clearContext: false,
        qunit: {
            hidepassed: false,
            showUI: true
        }
    },
    files: files,
    proxies: proxies,
    browserDisconnectTimeout: 3 * 60 * 1000,
  })
}
*/