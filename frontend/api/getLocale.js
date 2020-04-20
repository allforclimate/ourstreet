const parser = require('accept-language-parser');

const locales = {};
locales.en = require('../public/locales/en.json');
locales.fr = require('../public/locales/fr.json');
locales.nl = require('../public/locales/nl.json');

const defaultLanguage = 'en';

// We make sure we fall back to defaultLanguage if some keys are missing from the locale
Object.keys(locales).forEach(locale => {
  if (locale === defaultLanguage) return;
  Object.keys(locales[defaultLanguage]).forEach(key => {
    locales[locale][key] = locales[locale][key] || locales[defaultLanguage][key];
  })
});

module.exports = async (req, res) => {
  const language = parser.pick(['en', 'fr', 'nl'], req.headers['accept-language'], { loose: true }) || defaultLanguage;
  console.log(">>> language picked", language);

  res.setHeader('Content-Type', 'application/json');
  const response = {
    locale: language,
    messages: locales[language]
  };
  res.end(JSON.stringify(response));
}