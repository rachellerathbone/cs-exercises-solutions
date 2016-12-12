 /*
~ Will Smith is back in the music game and his PR people are telling him the first thing he should do
~ is make his former pop hit "Miami" multi-lingual. Below is a list of languages his PR peeps want him
~ to include. Will is a busy guy so he has asked you to help him out. Make a funtion greet() that takes
~ a single argument "language" and compares it against the list below to output "Welcome to Miami." where
~ "Welcome" will be replaced by what ever language is specified.
+ */

const LANG_LIST = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}

module.exports = function greet(language) {
  const greeting = LANG_LIST[language.toLowerCase()] || 'Welcome';

  return `${greeting} a Miami.`;
}
