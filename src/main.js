import alphabet from './letters.js';
import wordList from './words.js';

const buttons = document.getElementById('buttons');
const randomNumber = getRandomIntInclusive(0, wordList.length);
const randomWord = wordList[randomNumber];
const wordLength = randomWord.length;

let counter = 0;
let secondCounter = 0;
let picture = document.getElementById('picture');


for(let i = 0; i < alphabet.length; i++) {
    let guessLetter = alphabet[i];
    const letterButton = document.createElement('button');
    letterButton.textContent = guessLetter;
    letterButton.classList.add('button-class', guessLetter);
    
    // add an event listener for click in button form loop
    letterButton.addEventListener('click', function() {
        letterButton.classList.add('clicked');
        
        console.log(randomWord);
        
        for(let i = 0; i < wordLength; i++) {
            let wordLetter = randomWord[i];
            if(guessLetter === wordLetter) {
                counter++;
                const test = document.querySelectorAll('.underline');
                test[i].textContent = guessLetter;
            } else if(wordLength - 1 === i, counter <= 4) {
                console.log(i);
                secondCounter++;
                picture.src = 'assets/hangman' + counter + '.png';
            } else if(secondCounter > 4) {
                picture.src = 'assets/hangman4.png';
            }
        }
    }, { once : true });

    buttons.appendChild(letterButton);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max));
}

function draw() {

}

const phrase = document.getElementById('phrase');

for(let i = 0; i < wordLength; i++) {
    const underLine = document.createElement('span');
    underLine.classList.add('underline');
    underLine.textContent = ' _';

    phrase.appendChild(underLine);
}
