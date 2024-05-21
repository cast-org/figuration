import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pkgJson = path.join(__dirname, '../package.json');
const pkg = JSON.parse(await fs.readFile(pkgJson, 'utf8'));

const year = new Date().getFullYear();

function getBanner() {
  return `/*!
 * Figuration (v${pkg.version})
 * ${pkg.homepage}
 * Copyright 2013-${year} ${pkg.author}
 * Licensed under MIT (https://github.com/cast-org/figuration/blob/master/LICENSE)
 * -----
 * Portions Copyright 2011-${year} The Bootstrap Authors
 * Used under MIT License (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */`;
}

function getJqueryCheck() {
  return `if (typeof jQuery === \'undefined\') {
  throw new Error(\'CAST Figuration\\\'s JavaScript requires jQuery\');
}`;
}

function getJqueryVersionCheck() {
  return `(function($) {
  var version = $.fn.jquery.split(\' \')[0].split(\'.\');
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
    throw new Error(\'CAST Figuration\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\');
  }
})(jQuery);`;
}

function getFullBanner() {
  return `${getBanner()}

${getJqueryCheck()}

${getJqueryVersionCheck()}
`;
}

export default getFullBanner;
