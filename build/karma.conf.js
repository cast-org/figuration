const { env } = process;
const debug = env.DEBUG === 'true';

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
        if (env.CI === true || availableBrowser.includes('Chrome')) {
            return debug ? ['Chrome'] : ['ChromeHeadless'];
        }

        if (availableBrowser.includes('Firefox')) {
            return debug ? ['Firefox'] : ['FirefoxHeadless'];
        }

        throw new Error('Please install Firefox or Chrome');
    }
};

const customLaunchers = {
    FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless']
    }
};

let files = [
    jqueryFile,
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
    'js/common.js',
    'test/js/unit/*.js'
]

const conf = {
    basePath: '..',
    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: false,
    concurrency: Infinity,
    client: {
        qunit: {
            showUI: true
        }
    }
};

// Some test to go here later
if (true) {
    frameworks.push('detectBrowsers');
    plugins.push(
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-detect-browsers'
    );
    conf.customLaunchers = customLaunchers;
    conf.detectBrowsers = detectBrowsers;
    
    if (debug) {
        conf.singleRun = false;
        conf.autoWatch = true;
    }
}

conf.frameworks = frameworks;
conf.plugins = plugins;
conf.reporters = reporters;
conf.files = files;

module.exports = function(config) {
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    conf.logLevel = config.LOG_ERROR || config.LOG_WARN;
    config.set(conf);
};
