/* eslint-env node */

const browsers = {
  safariMac: {
    base: 'SauceLabs',
    platformName: 'macOS 11.00',
    browserName: 'safari',
    browserVersion: 'latest'
  },
  chromeMac: {
    base: 'SauceLabs',
    platformName: 'macOS 11.00',
    browserName: 'chrome',
    browserVersion: 'latest'
  },
  firefoxMac: {
    base: 'SauceLabs',
    platformName: 'macOS 11.00',
    browserName: 'firefox',
    browserVersion: 'latest'
  },
  edgeMac: {
    base: 'SauceLabs',
    platformName: 'macOS 11.00',
    browserName: 'MicrosoftEdge',
    browserVersion: 'latest'
  },
  edgeWin: {
    base: 'SauceLabs',
    platformName: 'Windows 11',
    browserName: 'MicrosoftEdge',
    browserVersion: 'latest'
  },
  chromeWin: {
    base: 'SauceLabs',
    platformName: 'Windows 11',
    browserName: 'chrome',
    browserVersion: 'latest'
  },
  firefoxWin: {
    base: 'SauceLabs',
    platformName: 'Windows 11',
    browserName: 'firefox',
    browserVersion: 'latest'
  },
  /* Disable iOS test for now as it passes, but also runs a second test that fails
   * tries to run both Selenium and Appiums test - ???
  iPhone: {
      base: 'SauceLabs',
      deviceName: 'iPhone Simulator',
      platformName: 'iOS',
      platformVersion: '15.0',
      browserName: 'Safari',
      deviceOrientation: 'portrait',
  },
  */
  android: {
    base: 'SauceLabs',
    deviceName: 'Android GoogleAPI Emulator',
    platformName: 'Android',
    platformVersion: '11.0',
    browserName: 'Chrome',
    deviceOrientation: 'portrait'
  }
};

const browsersKeys = Object.keys(browsers);

module.exports = {
  browsers,
  browsersKeys
};
