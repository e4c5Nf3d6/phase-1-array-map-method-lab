const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let tutorialsTitleCased = tutorials.map(string => {
    string = string.split(' ');
    const titles = string.map(word => {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      return word
    })
    return titles.join(' ')
  })
  return tutorialsTitleCased
}