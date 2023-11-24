const os = require("os");
const path = require('path');
const fs = require('fs-extra');
const globSync = require('glob').sync;
const mkdirpSync = require('mkdirp').sync;

const filePattern = './src/locale/__messages/**/*.json';
const outputDir = './src/locale/__combine/';

const lastComponent = '';

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
let defaultMessages = globSync(filePattern)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }

      const component = id.split('.')[0];
      if (lastComponent !== component) {
        // collection[component.toUpperCase()] = '';
      }

      collection[id] = defaultMessage;
    });

    return collection;
  }, {});


  let defaultMessages3 = globSync(filePattern)
    .map(filename => fs.readFileSync(filename, 'utf8'))
    .map(file => JSON.parse(file))
    .reduce((collection, descriptors) => {
      descriptors.forEach(({ id, defaultMessage }) => {
        if (collection.hasOwnProperty(id)) {
          throw new Error(`Duplicate message id: ${id}`);
        }
        collection[id] = '';
      });

      return collection;
    }, {});

// Create a new directory that we want to write the aggregate messages to
mkdirpSync(outputDir);

fs.writeFileSync(outputDir + `en.json`, JSON.stringify(defaultMessages, null, 2) + os.EOL);
fs.writeFileSync(outputDir + `de.json`, JSON.stringify(defaultMessages3, null, 2) + os.EOL);
