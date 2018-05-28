document.addEventListener('DOMContentLoaded', function(){

    const game = {
	current_sentence: null, //the chosen word
	sentence_letters: null,
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
	    'Beer',
	    'Samsung',
	    'Guinnes'
	],

	generate_letter_buttons: function(){ ///generating letters
	    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	    alphabet.forEach(function(letter){
		const button = document.createElement('button');
		button.classList.add('game-letter');
		button.type = 'button';
		button.dataset.letter = letter;
		button.innerText = letter;
		game.elemLetters.appendChild(button);
	    }.bind(this));
	},

	junction_events: function(){
	    this.elemLetters.addEventListener('click', function(e){
		if(e.target.nodeName.toUpperCase() === 'BUTTON' && e.target.classList.contains('game-letter')){
		    const letter = e.target.dataset.letter;
		    console.log(letter);
		    e.target.disabled = true;
		};
	    }.bind(this));
	},
	
	initBoard : function() { //initializing method
	    this.generate_letter_buttons();
	    this.junction_events();
	},

	
    };

    game.initBoard();


})
