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
let d = Date.now();
let temp;
let temp2;
let img;

// Get Cube Data
if(window.localStorage.hasOwnProperty("cubeData")) {
	data = JSON.parse(window.localStorage.getItem("cubeData")); // Read from local storage
	console.log(data);
} else {
	generateCombinations("111122223333444455556666", 6, false);
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
	document.getElementById("solve").style.boxShadow = "0 3px #0047ab";
	document.getElementById("solve").style.transform = "translateY(5px)";
	document.getElementById("solve").style.backgroundColor = "#0089d9";
	

	orient();
	console.log(combination);

	for (i = 0; i < 7; i++) {
		if(data[("move" + i)].combinations.includes(combination)) {
			for (j = i; j > 0; j--) {
				if(j == i) {
					temp = combination;
				} else {
					temp = data[("move" + j)].combinations[temp2];
				}
				temp = data[("move" + j)].combinations.indexOf(temp);
				temp2 = temp;
				temp = data[("move" + j)].movesTaken[temp];
				temp = moves.indexOf(temp);
				temp = reverseMoves[temp];
				temp2 = data[("move" + j)].rootID[temp2];
				solveSteps.push(temp);				
			}
			console.log(solveSteps);

			createImages();
			return;
		}
	}
	
	generateCombinations(combination, 5, true);
	solveInputGeneration();
	return;
	console.log(solveData);
}


function solveInputGeneration() {
	for (i = 1; i < 6; i++) { // Move number in solve data
		for (j = 0; j < solveData[("move" + i)].combinations.length; j++) { // Current index of solve combination
			if(data.move6.combinations.includes(solveData[("move" + i)].combinations[j])) {
				console.log("found", i, j, data.move6.combinations.indexOf(solveData[("move" + i)].combinations[j]));

				for (k = i; k > 0; k--) {
					console.log(k);
					if(k === i) {
						temp = j;
					} else {
						temp = temp2;
					}
					temp2 = temp;
					temp = solveData[("move" + k)].movesTaken[temp];
					tempSolveSteps.push(temp);
					temp2 = solveData[("move" + k)].rootID[temp2];
				}

				console.log(tempSolveSteps);

				for (l = tempSolveSteps.length-1; l > -1; l--) {
					solveSteps.push(tempSolveSteps[l]);
				}

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

function orient() {
	temp = inputCubeString;
	for(i = 0; i < 4; i++) {
		for(j = 0; j < 4; j++) {
			if(temp.charAt(2) == "1" && temp.charAt(12) == "4" && temp.charAt(23) == "6") {
				inputCubeString = temp;
				return;
			}
			temp = move(temp, "Y");
		}
		temp = move(temp, "X'");
	}

	temp = move(temp, "Y");
	temp = move(temp, "X'");
	
	for(i = 0; i < 4; i++) {
		if(temp.charAt(2) == "1" && temp.charAt(12) == "4" && temp.charAt(23) == "6") {
			inputCubeString = temp;
			return;
		}
		temp = move(temp, "Y");
	}

	move(temp, "X'");
	move(temp, "X'");
	
	for(i = 0; i < 4; i++) {
		if(temp.charAt(2) == "1" && temp.charAt(12) == "4" && temp.charAt(23) == "6") {
			inputCubeString = temp;
			return;
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
	document.getElementById("main").style.height = "280vh";
	for(i = 0; i < solveSteps.length; i++) {
		img = document.createElement("img");
		img.src = "./moves/" + solveSteps[i] + ".svg"

		document.getElementById("images").appendChild(img);
	}
}
