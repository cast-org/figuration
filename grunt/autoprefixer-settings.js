module.exports = {
    browsers: [
        'Chrome >= 49', // Exact version number here is kinda arbitrary ~ equivalent release to first version of specified Firefox ESR.
        // Go back 1 version futher for current Firefox ESR, rather than using Autoprefixer's native "Firefox ESR" version specifier.
        // Firefox Extended Support Release (ESR); https://www.mozilla.org/en-US/firefox/organizations/faq/
        'Firefox >= 45',
        // Note: Edge versions in Autoprefixer & Can I Use refer to the EdgeHTML rendering engine version,
        // NOT the Edge app version shown in Edge's "About" screen.
        // See also https://github.com/Fyrd/caniuse/issues/1928
        'Edge >= 12',
        'Explorer >= 10',
        // Out of leniency, we prefix these 1 version further back than the official policy.
        'iOS >= 9',
        'Safari >= 9',
        'Android >= 4.4'
    ]
};
