(function() {
  'use strict';

  let currentIndex = 0;
  const phrases = [
    'You Rock!',
    'You`ve got this!',
    'You Are Going to Rock This Thing!',
    'You da Best!',
    'Go get\'em Champ!',
    'I\'m so proud of you!',
    'You can do this!',
    'You\'re fantastic!',
    'You are The Machine!',
    'You\'re the bomb diggity slam dunk!',
    'Coffee!',
    'You are amazing!',
    'I would give you an A+',
    'You shouldn\'t be afraid of failure, it should be afraid of you!',
    'You have great taste!',
    'Your sense of humor is unmatched!',
    'You are loved!',
    'You are resilient!',
    'You can, and you will!',
    'You are made of star stuff',
    'Your heart knows its own way!',
    'You are made for victory',
    'Slay!',
    'Go forth and conquer!',
    'Just keep swimming...',
    'Keep going!',
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
