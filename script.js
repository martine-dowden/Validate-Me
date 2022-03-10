(function() {
  'use strict';

  let currentIndex = 0;
  const phrases = [
    'You Rock!',
    'You Got This!',
    'You Are Going to Rock This',
    'You da Best',
    'Go get\'em Champ!',
    'I\'m so proud of you',
    'You can do this!',
    'You\'re fantastic!',
    'You are The Machine',
    'You\'re the bomb diggity slam dunk!',
    'Coffee!',
    'You are amazing!',
  ]

  var button = document.getElementById('validateMe');
  var phraseContainer = document.getElementById('phraseContainer');

  button.onclick = function() {
    phraseContainer.innerHTML = '';
    let randomNumber = Math.floor(Math.random() * Math.floor(phrases.length-1));
    while (randomNumber === currentIndex) {
      randomNumber = Math.floor(Math.random() * Math.floor(phrases.length-1));
    }
    phraseContainer.innerHTML = phrases[randomNumber];

    currentIndex = randomNumber
  }
})();
