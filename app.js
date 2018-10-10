// console.log('game starting')

// hint: in order to avoid value flickering, set the div to an empty div in the index html

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

const startGame = () => {
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
	$("#targetScore").html(targetScore)
	$("#currentScore").html(currentScore)

	// experience declaring a local const in ethis scope to avoid typing many console logs
	const newLocal = console.log
	// test values first
	newLocal("current Score: ", currentScore)
	newLocal("target Score", targetScore)
	newLocal("blue ", crystals.blue.value)
	newLocal("green ", crystals.green.value)
	newLocal("red ", crystals.red.value)
	newLocal("yellow ", crystals.yellow.value)

}
// create func to add values when crystals are clicked
// instead of passing a value, i'm passing a crystal obj
const addValues = (crystal) => {
	// update currentScore
	currentScore += crystal.value
    
	// test current score
	console.log("Your score", currentScore)
    
}

// main game process
startGame()
// test clicks
$("#blue").click(() => {
	console.log("clicked blue!!")
	// call func passing each obj
	addValues(crystals.blue)


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