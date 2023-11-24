const fs = require('fs-extra');
const paths = require('../config/paths');
const json2csv = require('json2csv');
const chalk = require('chalk');
const csvtojson = require('csvtojson');
const mergeJSON = require('merge-json');
var isJSON = require('is-json');
var argv = require('minimist')(process.argv.slice(2));
const shell = require('shelljs');

// CSV headers
const CSV_FIELDS_ID = 'ID';
const CSV_FIELDS_ENGLISH = 'English';
const CSV_FIELDS_DUTCH = 'Dutch';

const FILE_NAME_CONVERTED_UTF8 = 'translations.utf8.csv';

if (argv._.indexOf('import') === -1 && argv._.indexOf('export') === -1) {
  const msg = chalk.red(`
  This script needs to be run with either the "import" or "export" flag.

    $ <scriptname> export
    $ <scriptname> import
    `);
  console.log(msg);
  return;
}

const isImport = argv._.indexOf('import') !== -1;

const file_en_content = fs.readFileSync(paths.localeBuild + `/${paths.localeFileEn}`, 'utf8');
const file_de_content = fs.readFileSync(paths.localeBuild + `/${paths.localeFileDe}`, 'utf8');

if (!isJSON(file_en_content)) {
  console.log(chalk.red(`The file ${paths.localeFileDe} does not container a valid JSON.`));
}

if (!isJSON(file_de_content)) {
  console.log(chalk.red(`The file ${paths.localeFileEn} does not container a valid JSON.`));
}

const file_en = JSON.parse(file_en_content);
const file_de = JSON.parse(file_de_content);

if (!isImport) {
  console.log(`
--------------------------------------------------------------
|                                                            |
|         Export locale files into CSV file                  |
|                                                            |
--------------------------------------------------------------
`);

  console.log(`=> Get content from ${paths.localeFileEn} and ${paths.localeFileDe}`);

  let translations = [];
  Object.keys(file_en).map(function(translationId) {
    const _translation = {};
    _translation[CSV_FIELDS_ID] = translationId;
    _translation[CSV_FIELDS_ENGLISH] = file_en[translationId];
    _translation[CSV_FIELDS_DUTCH] = file_de.hasOwnProperty(translationId)
      ? file_de[translationId]
      : '';
    translations.push(_translation);
  });

  const csv = json2csv({
    data: translations,
    fields: [CSV_FIELDS_ID, CSV_FIELDS_ENGLISH, CSV_FIELDS_DUTCH],
  });

  console.log(`=> Write content into ${paths.localeFileCsv}`);

  fs.writeFile(paths.localeBuild + `/${paths.localeFileCsv}`, csv, function(err) {
    if (err) throw err;
    console.log(chalk.green(`=> File ${paths.localeFileCsv} was created successfully`));
  });
}

if (isImport) {
  console.log(`
--------------------------------------------------------------
|                                                            |
|         Import CSV file into locale files                  |
|                                                            |
--------------------------------------------------------------
`);

  console.log(`=> Convert ${paths.localeFileCsv} into JSON object`);

  // Convert file into the right charset.
  shell.exec(`charset-convert src/locale/${paths.localeFileCsv} src/locale/${FILE_NAME_CONVERTED_UTF8} -i win1252 -o utf8`);

  let translatedJson = {};
  csvtojson()
    .fromFile(`src/locale/${FILE_NAME_CONVERTED_UTF8}`)
    .on('json', jsonObj => {
      // Return every single row
      translatedJson[jsonObj[CSV_FIELDS_ID]] = jsonObj[CSV_FIELDS_DUTCH];
    })
    .on('done', error => {
      console.log(`=> Merge new translations into existing file (newest overwrite existing ones)`);

      const result = mergeJSON.merge(file_de, translatedJson);
      fs.writeFileSync(paths.localeBuild + `/de.json`, JSON.stringify(result, null, 2));
      log = chalk.green(
        `=> New translations were successfully imported into ${paths.localeFileDe}.`
      );
      console.log(log);
    });
}
