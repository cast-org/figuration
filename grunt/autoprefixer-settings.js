module.exports = {
    browsers: [
        'Chrome >= 49', // Exact version number here is kinda arbitrary ~ equivalent release to first version of specified Firefox ESR.
        // Go back 1 version futher for current Firefox ESR, rather than using Autoprefixer's native "Firefox ESR" version specifier.
        // Firefox Extended Support Release (ESR); https://www.mozilla.org/en-US/firefox/organizations/faq/
        'Firefox >= 45',
        // Note: Edge versions in Autoprefixer & Can I Use refer to the EdgeHTML rendering engine version,
        // NOT the Edge app version shown in Edge's "About" screen.
        // For example, at the time of writing, Edge 20 on an up-to-date system uses EdgeHTML 12.
        // See also https://github.com/Fyrd/caniuse/issues/1928
        'Edge >= 12',
        'Explorer >= 9',
        // Out of leniency, we prefix these 1 version further back than the official policy.
        'iOS >= 9',
        'Safari >= 9',
        // The following remain NOT officially supported, but we're lenient and include their prefixes to avoid severely breaking in them.
        'Android >= 4'
    ]
};
