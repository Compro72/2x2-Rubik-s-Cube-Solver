const moves = ["L", "L'", "L2", "B", "B'", "B2", "D", "D'", "D2"];
const reverseMoves = ["L'", "L", "L2", "B'", "B", "B2", "D'", "D", "D2"];
let solveSteps = [];
let tempSolveSteps = [];
let inputCubeString = "111122223333444455556666";
let cubeArray = [];
let data = {};
let solveData = {};
let returnCombination;
let a, i, j, k, l;
let temp;
let img;
let solved = false;

// Get Cube Data
if(window.localStorage.hasOwnProperty("cubeData")) { // Check if localStorage contains cube data
	data = JSON.parse(window.localStorage.getItem("cubeData")); // Read from local storage
	console.log(data);
} else {
	generateCombinations("111122223333444455556666", 6, false); // Generate all combinations within 6 moves of the solved combination
	window.localStorage.setItem("cubeData", JSON.stringify(data)); // Store in local storage
	console.log(data);
}


function generateCombinations(startCombination, numberOfMoves, solver) {
	if(solver == false) {
		data.move0 = {combinations: [], movesTaken: [], rootID: []};
		for (i = 1; i < numberOfMoves+1; i++) {
			data[("move" + i)] = {combinations: [], movesTaken: [], rootID: []};
		}

		data.move0.combinations.push(startCombination)
		for (i = 0; i < numberOfMoves; i++) { // i = previous move number
			for (j = 0; j < data[("move" + i)].combinations.length; j++) { // j = previous move combinations length
				for (k = 0; k < moves.length; k++) {
			
					returnCombination = move(data[("move" + i)].combinations[j], moves[k]);
				
					includesCheck = false;
				
					for (l = 0; l < i+1; l++) {
						if(data[("move" + l)].combinations.includes(returnCombination)) {
							includesCheck = true;
						}
					}
				
					if(includesCheck === false){
						data[("move" + (i + 1))].combinations.push(returnCombination);
						data[("move" + (i + 1))].movesTaken.push( moves[k] );
						data[("move" + (i + 1))].rootID.push(j);
					}
					
				}
			}
		}
	}


	if(solver == true) {
		solveData.move0 = {combinations: [], movesTaken: [], rootID: []};
		for (i = 1; i < numberOfMoves+1; i++) {
			solveData[("move" + i)] = {combinations: [], movesTaken: [], rootID: []};
		}

		solveData.move0.combinations.push(startCombination)
		for (i = 0; i < numberOfMoves; i++) { // i = previous move number
			for (j = 0; j < solveData[("move" + i)].combinations.length; j++) { // j = previous move combinations length
				for (k = 0; k < moves.length; k++) {
				
					returnCombination = move(solveData[("move" + i)].combinations[j], moves[k]);
					
					includesCheck = false;
					
					for (l = 0; l < i+1; l++) {
						if(solveData[("move" + l)].combinations.includes(returnCombination)) {
							includesCheck = true;
						}
					}
					
					if(includesCheck === false) {
						solveData[("move" + (i + 1))].combinations.push(returnCombination);
						solveData[("move" + (i + 1))].movesTaken.push( moves[k] );
						solveData[("move" + (i + 1))].rootID.push(j);
					}
				}
			}
		}
	}

	
}



function move(combination, move) {

/*
            ----- -----
            | 8 | | 9 |
            ----- -----
            -----L-----
            |10 | |11 |
            ----- -----
----- ----- ----- ----- ----- ----- ----- -----
|20 | |21 | | 0 | | 1 | |16 | |17 | | 4 | | 5 |
----- ----- ----- ----- ----- ----- ----- -----
-----F----- -----U----- -----B----- -----D-----
|22 | |23 | | 2 | | 3 | |18 | |19 | | 6 | | 7 |
----- ----- ----- ----- ----- ----- ----- -----
            ----- -----
            |12 | |13 |
            ----- -----
            -----R-----
            |14 | |15 |
            ----- -----

RRRR - 1
OOOO - 2
GGGG - 3
BBBB - 4
WWWW - 5
YYYY - 6

161341225234416525534636

*/
	cubeArray = [];

	if(move === "L") {
		cubeArray.push(combination.charAt(16));
		cubeArray.push(combination.charAt(17));
		cubeArray.push(combination.charAt(2));
		cubeArray.push(combination.charAt(3));
		cubeArray.push(combination.charAt(20));
		cubeArray.push(combination.charAt(21));
		cubeArray.push(combination.charAt(6));
		cubeArray.push(combination.charAt(7));
		cubeArray.push(combination.charAt(10));
		cubeArray.push(combination.charAt(8));
		cubeArray.push(combination.charAt(11));
		cubeArray.push(combination.charAt(9));
		cubeArray.push(combination.charAt(12));
		cubeArray.push(combination.charAt(13));
		cubeArray.push(combination.charAt(14));
		cubeArray.push(combination.charAt(15));
		cubeArray.push(combination.charAt(4));
		cubeArray.push(combination.charAt(5));
		cubeArray.push(combination.charAt(18));
		cubeArray.push(combination.charAt(19));
		cubeArray.push(combination.charAt(0));
		cubeArray.push(combination.charAt(1));
		cubeArray.push(combination.charAt(22));
		cubeArray.push(combination.charAt(23));
	}


	if(move === "L'") {
		cubeArray.push(combination.charAt(20));
		cubeArray.push(combination.charAt(21));
		cubeArray.push(combination.charAt(2));
		cubeArray.push(combination.charAt(3));
		cubeArray.push(combination.charAt(16));
		cubeArray.push(combination.charAt(17));
		cubeArray.push(combination.charAt(6));
		cubeArray.push(combination.charAt(7));
		cubeArray.push(combination.charAt(9));
		cubeArray.push(combination.charAt(11));
		cubeArray.push(combination.charAt(8));
		cubeArray.push(combination.charAt(10));
		cubeArray.push(combination.charAt(12));
		cubeArray.push(combination.charAt(13));
		cubeArray.push(combination.charAt(14));
		cubeArray.push(combination.charAt(15));
		cubeArray.push(combination.charAt(0));
		cubeArray.push(combination.charAt(1));
		cubeArray.push(combination.charAt(18));
		cubeArray.push(combination.charAt(19));
		cubeArray.push(combination.charAt(4));
		cubeArray.push(combination.charAt(5));
		cubeArray.push(combination.charAt(22));
		cubeArray.push(combination.charAt(23));
	}


	if(move === "L2") {
		cubeArray.push(combination.charAt(4));
		cubeArray.push(combination.charAt(5));
		cubeArray.push(combination.charAt(2));
		cubeArray.push(combination.charAt(3));
		cubeArray.push(combination.charAt(0));
		cubeArray.push(combination.charAt(1));
		cubeArray.push(combination.charAt(6));
		cubeArray.push(combination.charAt(7));
		cubeArray.push(combination.charAt(11));
		cubeArray.push(combination.charAt(10));
		cubeArray.push(combination.charAt(9));
		cubeArray.push(combination.charAt(8));
		cubeArray.push(combination.charAt(12));
		cubeArray.push(combination.charAt(13));
		cubeArray.push(combination.charAt(14));
		cubeArray.push(combination.charAt(15));
		cubeArray.push(combination.charAt(20));
		cubeArray.push(combination.charAt(21));
		cubeArray.push(combination.charAt(18));
		cubeArray.push(combination.charAt(19));
		cubeArray.push(combination.charAt(16));
		cubeArray.push(combination.charAt(17));
		cubeArray.push(combination.charAt(22));
		cubeArray.push(combination.charAt(23));
	}


	if(move === "B") {
		cubeArray.push(combination.charAt(0));
		cubeArray.push(combination.charAt(13));
		cubeArray.push(combination.charAt(2));
		cubeArray.push(combination.charAt(15));
		cubeArray.push(combination.charAt(11));
		cubeArray.push(combination.charAt(5));
		cubeArray.push(combination.charAt(9));
		cubeArray.push(combination.charAt(7));
		cubeArray.push(combination.charAt(8));
		cubeArray.push(combination.charAt(1));
		cubeArray.push(combination.charAt(10));
		cubeArray.push(combination.charAt(3));
		cubeArray.push(combination.charAt(12));
		cubeArray.push(combination.charAt(6));
		cubeArray.push(combination.charAt(14));
		cubeArray.push(combination.charAt(4));
		cubeArray.push(combination.charAt(18));
		cubeArray.push(combination.charAt(16));
		cubeArray.push(combination.charAt(19));
		cubeArray.push(combination.charAt(17));
		cubeArray.push(combination.charAt(20));
		cubeArray.push(combination.charAt(21));
		cubeArray.push(combination.charAt(22));
		cubeArray.push(combination.charAt(23));
	}


	if(move === "B'") {
		cubeArray.push(combination.charAt(0));
		cubeArray.push(combination.charAt(9));
		cubeArray.push(combination.charAt(2));
		cubeArray.push(combination.charAt(11));
		cubeArray.push(combination.charAt(15));
		cubeArray.push(combination.charAt(5));
		cubeArray.push(combination.charAt(13));
		cubeArray.push(combination.charAt(7));
		cubeArray.push(combination.charAt(8));
		cubeArray.push(combination.charAt(6));
		cubeArray.push(combination.charAt(10));
		cubeArray.push(combination.charAt(4));
		cubeArray.push(combination.charAt(12));
		cubeArray.push(combination.charAt(1));
		cubeArray.push(combination.charAt(14));
		cubeArray.push(combination.charAt(3));
		cubeArray.push(combination.charAt(17));
		cubeArray.push(combination.charAt(19));
		cubeArray.push(combination.charAt(16));
		cubeArray.push(combination.charAt(18));
		cubeArray.push(combination.charAt(20));
		cubeArray.push(combination.charAt(21));
		cubeArray.push(combination.charAt(22));
		cubeArray.push(combination.charAt(23));
	}


	if(move === "B2") {
		cubeArray.push(combination.charAt(0));
		cubeArray.push(combination.charAt(6));
		cubeArray.push(combination.charAt(2));
		cubeArray.push(combination.charAt(4));
		cubeArray.push(combination.charAt(3));
		cubeArray.push(combination.charAt(5));
		cubeArray.push(combination.charAt(1));
		cubeArray.push(combination.charAt(7));
		cubeArray.push(combination.charAt(8));
		cubeArray.push(combination.charAt(13));
		cubeArray.push(combination.charAt(10));
		cubeArray.push(combination.charAt(15));
		cubeArray.push(combination.charAt(12));
		cubeArray.push(combination.charAt(9));
		cubeArray.push(combination.charAt(14));
		cubeArray.push(combination.charAt(11));
		cubeArray.push(combination.charAt(19));
		cubeArray.push(combination.charAt(18));
		cubeArray.push(combination.charAt(17));
		cubeArray.push(combination.charAt(16));
		cubeArray.push(combination.charAt(20));
		cubeArray.push(combination.charAt(21));
		cubeArray.push(combination.charAt(22));
		cubeArray.push(combination.charAt(23));
	}


	if(move === "D") {
		cubeArray.push(combination.charAt(0));
		cubeArray.push(combination.charAt(1));
		cubeArray.push(combination.charAt(2));
		cubeArray.push(combination.charAt(3));
		cubeArray.push(combination.charAt(6));
		cubeArray.push(combination.charAt(4));
		cubeArray.push(combination.charAt(7));
		cubeArray.push(combination.charAt(5));
		cubeArray.push(combination.charAt(17));
		cubeArray.push(combination.charAt(19));
		cubeArray.push(combination.charAt(10));
		cubeArray.push(combination.charAt(11));
		cubeArray.push(combination.charAt(12));
		cubeArray.push(combination.charAt(13));
		cubeArray.push(combination.charAt(20));
		cubeArray.push(combination.charAt(22));
		cubeArray.push(combination.charAt(16));
		cubeArray.push(combination.charAt(15));
		cubeArray.push(combination.charAt(18));
		cubeArray.push(combination.charAt(14));
		cubeArray.push(combination.charAt(9));
		cubeArray.push(combination.charAt(21));
		cubeArray.push(combination.charAt(8));
		cubeArray.push(combination.charAt(23));
	}
	

	if(move === "D'") {
		cubeArray.push(combination.charAt(0));
		cubeArray.push(combination.charAt(1));
		cubeArray.push(combination.charAt(2));
		cubeArray.push(combination.charAt(3));
		cubeArray.push(combination.charAt(5));
		cubeArray.push(combination.charAt(7));
		cubeArray.push(combination.charAt(4));
		cubeArray.push(combination.charAt(6));
		cubeArray.push(combination.charAt(22));
		cubeArray.push(combination.charAt(20));
		cubeArray.push(combination.charAt(10));
		cubeArray.push(combination.charAt(11));
		cubeArray.push(combination.charAt(12));
		cubeArray.push(combination.charAt(13));
		cubeArray.push(combination.charAt(19));
		cubeArray.push(combination.charAt(17));
		cubeArray.push(combination.charAt(16));
		cubeArray.push(combination.charAt(8));
		cubeArray.push(combination.charAt(18));
		cubeArray.push(combination.charAt(9));
		cubeArray.push(combination.charAt(14));
		cubeArray.push(combination.charAt(21));
		cubeArray.push(combination.charAt(15));
		cubeArray.push(combination.charAt(23));
	}


	if(move === "D2") {
		cubeArray.push(combination.charAt(0));
		cubeArray.push(combination.charAt(1));
		cubeArray.push(combination.charAt(2));
		cubeArray.push(combination.charAt(3));
		cubeArray.push(combination.charAt(7));
		cubeArray.push(combination.charAt(6));
		cubeArray.push(combination.charAt(5));
		cubeArray.push(combination.charAt(4));
		cubeArray.push(combination.charAt(15));
		cubeArray.push(combination.charAt(14));
		cubeArray.push(combination.charAt(10));
		cubeArray.push(combination.charAt(11));
		cubeArray.push(combination.charAt(12));
		cubeArray.push(combination.charAt(13));
		cubeArray.push(combination.charAt(9));
		cubeArray.push(combination.charAt(8));
		cubeArray.push(combination.charAt(16));
		cubeArray.push(combination.charAt(22));
		cubeArray.push(combination.charAt(18));
		cubeArray.push(combination.charAt(20));
		cubeArray.push(combination.charAt(19));
		cubeArray.push(combination.charAt(21));
		cubeArray.push(combination.charAt(17));
		cubeArray.push(combination.charAt(23));
	}


	if(move === "X'") {
		cubeArray.push(combination.charAt(16));
		cubeArray.push(combination.charAt(17));
		cubeArray.push(combination.charAt(18));
		cubeArray.push(combination.charAt(19));
		cubeArray.push(combination.charAt(20));
		cubeArray.push(combination.charAt(21));
		cubeArray.push(combination.charAt(22));
		cubeArray.push(combination.charAt(23));
		cubeArray.push(combination.charAt(10));
		cubeArray.push(combination.charAt(8));
		cubeArray.push(combination.charAt(11));
		cubeArray.push(combination.charAt(9));
		cubeArray.push(combination.charAt(13));
		cubeArray.push(combination.charAt(15));
		cubeArray.push(combination.charAt(12));
		cubeArray.push(combination.charAt(14));
		cubeArray.push(combination.charAt(4));
		cubeArray.push(combination.charAt(5));
		cubeArray.push(combination.charAt(6));
		cubeArray.push(combination.charAt(7));
		cubeArray.push(combination.charAt(0));
		cubeArray.push(combination.charAt(1));
		cubeArray.push(combination.charAt(2));
		cubeArray.push(combination.charAt(3));
	}

	if(move === "Y") {
		cubeArray.push(combination.charAt(2));
		cubeArray.push(combination.charAt(0));
		cubeArray.push(combination.charAt(3));
		cubeArray.push(combination.charAt(1));
		cubeArray.push(combination.charAt(5));
		cubeArray.push(combination.charAt(7));
		cubeArray.push(combination.charAt(4));
		cubeArray.push(combination.charAt(6));
		cubeArray.push(combination.charAt(22));
		cubeArray.push(combination.charAt(20));
		cubeArray.push(combination.charAt(23));
		cubeArray.push(combination.charAt(21));
		cubeArray.push(combination.charAt(18));
		cubeArray.push(combination.charAt(16));
		cubeArray.push(combination.charAt(19));
		cubeArray.push(combination.charAt(17));
		cubeArray.push(combination.charAt(10));
		cubeArray.push(combination.charAt(8));
		cubeArray.push(combination.charAt(11));
		cubeArray.push(combination.charAt(9));
		cubeArray.push(combination.charAt(14));
		cubeArray.push(combination.charAt(12));
		cubeArray.push(combination.charAt(15));
		cubeArray.push(combination.charAt(13));
	}


	return cubeArray.join("");

}


function solve(combination) {
	if(solved === false) {
		document.getElementById("solve").style.boxShadow = "0 3px #0047ab"; // Style button
		document.getElementById("solve").style.transform = "translateY(5px)"; // Style button
		document.getElementById("solve").style.backgroundColor = "#0089d9"; // Style button
	
		returnCombination = orient(combination); // Orient the input combination and use the return combination

		for (i = 0; i < 7; i++) { // Count from "move" 0 till "move" 6
			if(data[("move" + i)].combinations.includes(returnCombination)) { // Check if current "move" "i" includes the combination that needs to be solved
				for (j = i; j > 0; j--) { // Count down from "move" "i" to 0
					if(j == i) { // Check if loop is running for first time
						temp = data[("move" + j)].combinations.indexOf(returnCombination); // Set index to the combination that needs to be solved in "move" "j"
					}
					solveSteps.push(reverseMoves[moves.indexOf(data[("move" + j)].movesTaken[temp])]); // Push reversed move from current index
					temp = data[("move" + j)].rootID[temp]; // Set next index from current index
				}
				console.log(solveSteps); // Log the solve array

				createImages(); // Create move images
				solved = true;
				return;
			}
		}
	
		generateCombinations(returnCombination, 5, true); // If above algoithm fails to return solve steps then
																	  // generate all combinations within 5 moves of the combination
																	  // that needs to be solved

		console.log(solveData); // Log the output from generateCombinations() function
		solveInputGeneration(); // Solve the output from generateCombinations() function
		return;
	}
}


function solveInputGeneration() {
	for (i = 1; i < 6; i++) { // Loop through all solveData moves
		for (j = 0; j < solveData[("move" + i)].combinations.length; j++) { // Loop through all combinations of current "move" "i"
			if(data.move6.combinations.includes(solveData[("move" + i)].combinations[j])) { // Check if data "move" 6 includes the current combination at "move" "i" index "j"
				for (k = i; k > 0; k--) {
					if(k == i) {
						temp = j;
					}
					solveSteps.splice(0, 0, solveData[("move" + k)].movesTaken[temp]);
					temp = solveData[("move" + k)].rootID[temp];
				}

				console.log(solveSteps);

				solve(solveData[("move" + i)].combinations[j]);

				return;
			}
		}
	}
}

function inputChange(index) {
		inputCubeString = setCharAt(inputCubeString, index, ((parseInt(inputCubeString.charAt(index)))%6)+1);
	
		switch(inputCubeString.charAt(index)) {
			case "1":
				document.getElementById("face" + index).style.backgroundColor = "#ff0000"
				break;
			case "2":
				document.getElementById("face" + index).style.backgroundColor = "#fc6600"
				break;
			case "3":
				document.getElementById("face" + index).style.backgroundColor = "#00ff00"
				break;
			case "4":
				document.getElementById("face" + index).style.backgroundColor = "#0000ff"
				break;
			case "5":
				document.getElementById("face" + index).style.backgroundColor = "#ffffff"
				break;
			case "6":
				document.getElementById("face" + index).style.backgroundColor = "#ffff00"
				break;
		}
}

function orient(combination) {
	temp = combination;
	for(i = 0; i < 4; i++) {
		for(j = 0; j < 4; j++) {
			if(temp.charAt(2) == "1" && temp.charAt(12) == "4" && temp.charAt(23) == "6") {
				return temp;
			}
			temp = move(temp, "Y");
		}
		temp = move(temp, "X'");
	}

	temp = move(temp, "Y");
	temp = move(temp, "X'");
	
	for(i = 0; i < 4; i++) {
		if(temp.charAt(2) == "1" && temp.charAt(12) == "4" && temp.charAt(23) == "6") {
			return temp;
		}
		temp = move(temp, "Y");
	}

	move(temp, "X'");
	move(temp, "X'");
	
	for(i = 0; i < 4; i++) {
		if(temp.charAt(2) == "1" && temp.charAt(12) == "4" && temp.charAt(23) == "6") {
			return temp;
		}
		temp = move(temp, "Y");
	}
}


function setCharAt(str,index,chr) {
	if(index > str.length-1) {
		return str;
	} else {
		return str.substring(0,index) + chr + str.substring(index+1);
	}
}


function createImages() {
	for(i = 0; i < solveSteps.length; i++) {
		img = document.createElement("img");
		img.src = "./moves/" + solveSteps[i] + ".jpeg"

		document.getElementById("images").appendChild(img);
	}
}
