// console.log('game starting')

// define global variables
var currentScore = 0
var targetScore = 0

// create crystals object
var crystals = {
	blue: { name: "blue", value: 0 },
	green: { name: "green", value: 0 },
	red: { name: "red", value: 0 },
	yellow: { name: "yellow", value: 0 }
}
// functions
let getRandom = (max, min) => {
	let random = Math.floor(Math.random() * (max - min + 1)) + min
	return random
}

let startGame = () => {
    // reset currentScore 120 - 19
    currentScore = 0
    // set a new targetScore
    targetScore = getRandom(120, 19)

    // set diff values for each crystal - use obj notation
    crystals.blue.value = getRandom(12, 1)
    crystals.green.value = getRandom(12, 1)
    crystals.red.value = getRandom(12, 1)
    crystals.yellow.value = getRandom(12, 1)
    // render values to DOM
    // test values first
    console.log("current Score: ", currentScore);
    console.log("target Score", targetScore);
    console.log("blue ", crystals.blue.value);
    console.log("green ", crystals.green.value);
    console.log("red ", crystals.red.value);
    console.log("yellow ", crystals.yellow.value);
    
    
    
}
// main game process
startGame()
// test clicks
$("#blue").click((crystal) => {
	console.log("clicked blue!!")
    // get a random value when i click on a crystal
    

})
$("#green").click((crystal) => {
    console.log("clicked green!!")
    
    // get a random value for the passed crystal
    

})
$("#red").click(() => {
	console.log("clicked red!!")

})
$("#yellow").click(() => {
	console.log("clicked yellow!!")

})