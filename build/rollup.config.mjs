import path from 'node:path';
//import process from 'node:process';
import { fileURLToPath } from 'node:url';
import banner from './banner.mjs';
import concat from 'rollup-plugin-concat';

//const ENV_VAR = process.env.ENV_VAR === 'true';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let destinationFile = `figuration`;

const pathSrc = '../js';
const jsCore = [
  path.resolve(__dirname, pathSrc, 'util/backdrop.js'),
  path.resolve(__dirname, pathSrc, 'util/focuser.js'),
  path.resolve(__dirname, pathSrc, 'util/scrollbar.js'),
  path.resolve(__dirname, pathSrc, 'util.js'),
  path.resolve(__dirname, pathSrc, 'drag.js'),
  path.resolve(__dirname, pathSrc, 'collapse.js'),
  path.resolve(__dirname, pathSrc, 'dropdown.js'),
  path.resolve(__dirname, pathSrc, 'tab.js'),
  path.resolve(__dirname, pathSrc, 'affix.js'),
  path.resolve(__dirname, pathSrc, 'tooltip.js'),
  path.resolve(__dirname, pathSrc, 'popover.js'),
  path.resolve(__dirname, pathSrc, 'offcanvas.js'),
  path.resolve(__dirname, pathSrc, 'modal.js'),
  path.resolve(__dirname, pathSrc, 'accordion.js'),
  path.resolve(__dirname, pathSrc, 'tab-responsive.js'),
  path.resolve(__dirname, pathSrc, 'slideshow.js'),
  path.resolve(__dirname, pathSrc, 'scrollspy.js'),
  path.resolve(__dirname, pathSrc, 'alert.js'),
  path.resolve(__dirname, pathSrc, 'lazy.js'),
  path.resolve(__dirname, pathSrc, 'equalize.js'),
  path.resolve(__dirname, pathSrc, 'player.js'),
  path.resolve(__dirname, pathSrc, 'common.js')
];

const rollupConfig = {
  plugins: [
    concat({
      groupedFiles: [
        {
          files: jsCore,
          outputFile: path.resolve(__dirname, `../dist/js/${destinationFile}.js`),
        }
      ]
    })
  ],

  input: path.resolve(__dirname, `../dist/js/${destinationFile}.js`),
  output: {
    banner: banner(),
    file: path.resolve(__dirname, `../dist/js/${destinationFile}.js`),
    format: 'es',
    generatedCode: 'es2015'
  }
}

export default rollupConfig;
