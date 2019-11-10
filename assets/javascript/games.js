//Psuedo-code:
//This is an ongoing project for a Hangman project, with 80s action movies starring Arnold Schwarzenegger
//Steps to create a hangman game include:
//Game randomly generates a word and parses out the letters, while hiding the word and the letters from the user
//The user guesses the letters for the generated word. For every correct guess, the game fills in a letter. For every incorrect guess, the user loses a chance (the user has 12 chances to make incorrect guesses on a word before reaching a game-over screen).
//Every correct guess displays a letter onto the screen
//Every incorrect guess displays a progressive picture of a "Hangman" 

var WonGames = 0
var LostGames = 0
var HangmanChances = 12

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//These are the words that will be generated in the Hangman game.
var Words = ['Hercules in New York', 'Pumping Iron', 'Conan the Barbarian', 'The Terminator', 'Commando', 'Predator'
'The Running Man', 'Twins', 'Total Recall', 'Kindergarten Cop', 'Last Action Hero'];

//Phrases that will be generated if the user loses
var ArnoldPhrasesLose = ['Hasta la vista, baby', 'Consider that a divorce', 'You have just been erased', 'I need a vacation', 'There is no bathroom']

//Phrases that will be generated if the user wins
var ArnoldPhrasesWin = ['If it bleeds, we can kill it', 'What killed the dinosaurs? The ice age!', "You're a funny guy, Sully", "It's not a tumor!"]

//An empty variable to store the current word as a string
var DisplayedWord = "";

//An empty variable to store the letters
var StoreDisplayedWord

//An empty array to store the correct letter guesses from the user
var CorrectDisplayedLetters = [];

//An empty array to store the incorrect letter guesses from the user
var WrongDisplayedLetters = [];

var PressKeyToStartGame = ['Press any key to start a new game!']

var PressKeyToResetGame = ['Press ESC to reset']

var Win = ['You Win!']

var Lose = ['You Lose!']

//In Game Prompts

//Here is a basic setup of how the game operates. I've chosen to invoke  a function command.
    function setup() {
//The game ramdomly chooses a word
        currentWords = Words[Math.floor(Math.random() * Words.length)];
//The game parses out the letters of the word
        SplitWord = currentWords.split("");
//The game determines the amount of letters in a word
        WordLgth = currentWords.length; 


//These are the prompt messages that are given to the user while playing the game. The 'win' and 'lose' messages are randomized.
        GameMessages = {
            CorrectWordGuess = ArnoldPhrasesWin[(Math.floor(Math.random() * ArnoldPhrasesWin.length)];
            WrongWordGuess = ArnoldPhrasesLose[(Math.floor(Math.random() * ArnoldPhrasesLose.length)];
            ChooseLetter = 'Please choose a letter';
        }
