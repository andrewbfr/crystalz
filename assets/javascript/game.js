//geting started

//GLOBAL VARIABLES
//---------------------------------------------------
// individual variables
// consider which variables need to actually contain functions
//
$( document ).ready(function() {

	resetNumbers();
});

var winsCount = 0;
var lossesCount = 0;
var currentTotal = 0;
var targetNumber;
var bismuth;
var pastel;
var ferro;
var green;

var bismuth;
var pastel;
var ferro;
var green;




//FUNCTIONS
//-----------------------------------------------------
// add clicked value to accrueing total
// counter to tabulate 
// individual functions, each stored as a variable, that performs
// the function of adding a total to the accrueing total
// how to design a function to  keep goinggggg... lost train of thought
// run functions to tabulate new target numbers, new crystal values, reset cumulative
//and alter wins/losses++ with a single if/else.
//is it possible to make a for-loop to generate all of these
//variables and funcitons for me?

//Math.floor(Math.random() * (max - min + 1)) + min;
//Math.floor(Math.random() * (max - min)) + min;

function resetNumbers(){
	bismuth = crystalValues();
	ferro = crystalValues();
	green = crystalValues();
	pastel = crystalValues();
	currentTotal = 0;
	$("#tabulate").text(currentTotal);
	generateTarget();


};

function generateTarget(){
		targetNumber = Math.floor((Math.random() * (120 - 19)) + 19);
		$("#target").text(targetNumber);
	}

//consider finding a way to make this a for-loop, 
//executed at the whatever trigger, 
//also maybe it should be part of an object

function crystalValues(){
	return Math.floor((Math.random() * 12) + 1); 
}


//this is how it all started. it became what is presently above.
// function bismuth(){
// 		var number = Math.floor((Math.random() * 12) + 1);
// 		$("#target").text(number);
// 		console.log(number);
// 		return number;
// 	};

// console.log(bismuth);

// function pastel(){
// 		var number = Math.floor((Math.random() * 12) + 1);
// 		$("#target").text(number);
// 		console.log(number);
// 		return number;
// 	};

// console.log(pastel);

// function ferro(){
// 		var number = Math.floor((Math.random() * 12) + 1);
// 		$("#target").text(number);
// 		console.log(number);
// 		return number;
// 	};

// console.log(ferro);

// function green(){
// 		var number = Math.floor((Math.random() * 12) + 1);
// 		$("#target").text(number);
// 		console.log(number);
// 		return number;
// 	};

// console.log(green);

function winCheck(){
	if (currentTotal === targetNumber){
		//reset: tally win++
		winsCount++;
		$("#wins").text(winsCount);
		$("#winAlert").text("You Won!");
		resetNumbers();


	}
	else if (currentTotal > targetNumber){
		//reset: tally loss++
		lossesCount++;
		$("#losses").text(lossesCount);
		$("#winAlert").text("You Lost!");
		resetNumbers();

	}
};




//MAIN PROCESSES
//----------------------------------------------------

$("#bismuth").on("click", function (e){
	clickAdd(bismuth);
});

$("#pastel").on("click", function (e){
	clickAdd(pastel);
});

$("#ferro").on("click", function (e){
	clickAdd(ferro);
});

$("#green").on("click", function (e){
	clickAdd(green);
});

//tremendous insight to place clidkAdd's functionality inside
//its own function, instead of having each .on/click function
//perform the same thing, with millions of lines of code.

function clickAdd(value){
	// this replaces "currentTotal = currentTotal = value;"
	currentTotal += value;
	$("#tabulate").text(currentTotal);
	winCheck();
}




//-------------------------
//BONUS
// have another panel entry that 
// displays the probability of hitting the
// target number with the individual numbers (still hidden)
// that have been assigned to the crystals.