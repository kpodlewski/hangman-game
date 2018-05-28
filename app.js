const game = {
    currentSentence: null, //the chosen word
    sentenceLetters: null,
    attempts: 7, //tries to gues
    boardElem: document.querySelector('.game'), //my game element
    elemSentence: document.querySelector('.game-sentence'), //chosen word
    elemAttempts: document.querySelector('.game-attempts'), //attempts to win
    elemLetters: document.querySelector('.game-letters'), //letters to choose
    sentences: [
	'Captain America',
	'Developers',
	'Foundation',
	'Schweppes',
	'Beer'
    ],
}
