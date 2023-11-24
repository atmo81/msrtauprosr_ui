const fs = require('fs-extra');
const rimraf = require('rimraf');
const shell = require('shelljs');
const mergeJSON = require('merge-json');
const paths = require('../config/paths');

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// TODO: delete messages folder

// 1. Run webpack manually
shell.exec('webpack --config config/webpack.config.dev.js');

// 2. Combine all component language files.
shell.exec('babel ' + 'scripts/locale-combine-messages.js | node');

// Copy English file over. All the English terms live in the components as default message.
try {
  fs.copySync(paths.localeBuildCombine + '/' + paths.localeFileEn, paths.localeBuild + '/' + paths.localeFileEn );
} catch (err) {}

if (!fs.existsSync(paths.localeBuild + `/${paths.localeFileDe}`)) {
  console.log(`Create empty ${paths.localeFileDe} file.`);
  fs.writeFileSync(paths.localeBuild + `/${paths.localeFileDe}`, '{}');
}

// Merge file contents for dutch translations
const file_de = fs.readFileSync(paths.localeBuild + `/${paths.localeFileDe}`, 'utf8');
const file_de_new = fs.readFileSync(paths.localeBuildCombine + `/${paths.localeFileDe}`, 'utf8');
// TODO: remove keys that do not exist anymore?
const result = mergeJSON.merge(file_de, file_de_new);

fs.writeFileSync(paths.localeBuild + `/${paths.localeFileDe}`, result);
