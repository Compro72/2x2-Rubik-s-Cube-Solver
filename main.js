const moves = ["L", "L'", "L2", "B", "B'", "B2", "D", "D'", "D2"];
const cubeTurns = ["X'", "Y"];
const reverseMoves = ["L'", "L", "L2", "B'", "B", "B2", "D'", "D", "D2"];
let solveSteps = [];
let tempSolveSteps = [];
let inputCubeString = "111122223333444455556666";
let cubeArray = [];
let data = {};
let solveData = {};
let returnCombination;
let a, i, j, k, l, x;
let temp;
let element;
let solved = false;
let text;
let toggle3D = 0;


const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
let rotateX = -30;
let rotateY = -30;
let prevRotateX = 0;
let prevRotateY = 0;
let prevMouseX;
let prevMouseY;
let rotationValue = 360;
let mouseDown = 0;


updateColours();
toggle();


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


function solve(combination, solver) {
	if(!solved) {
		returnCombination = orient(combination); // Orient the input combination and use the return combination
		if(!solver) {
			document.getElementById("solve").style.boxShadow = "0 3px #0047ab"; // Style button
			document.getElementById("solve").style.transform = "translateY(5px)"; // Style button
			document.getElementById("solve").style.backgroundColor = "#0089d9"; // Style button
		
			inputCubeString = returnCombination;
			updateColours();
			cube.style.transform = "rotateX(" + -35 + "deg) rotateY(" + -45 + "deg)";
		}

		for (i = 0; i < 8; i++) { // Count from "move" 0 till "move" 7
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


		generateCombinations(returnCombination, 4, true); // If above algoithm fails to return solve steps then
																		  // generate all combinations within 5 moves of the combination
																		  // that needs to be solved

		console.log(solveData); // Log the output from generateCombinations() function
		solveInputGeneration(); // Solve the output from generateCombinations() function
		return;
	}
	return;
}


function solveInputGeneration() {
	for (i = 1; i < 5; i++) { // Loop through all solveData moves
		for (j = 0; j < solveData[("move" + i)].combinations.length; j++) { // Loop through all combinations of current "move" "i"
			if(data.move7.combinations.includes(solveData[("move" + i)].combinations[j])) { // Check if data "move" 6 includes the current combination at "move" "i" index "j"
				for (k = i; k > 0; k--) {
					if(k == i) {
						temp = j;
					}
					solveSteps.splice(0, 0, solveData[("move" + k)].movesTaken[temp]);
					temp = solveData[("move" + k)].rootID[temp];
				}

				console.log(solveSteps);

				solve(solveData[("move" + i)].combinations[j], true);

				return;
			}
		}
	}

	window.alert("Invalid Combination");
	reset();
	return;
}

function inputChange(input) {
	if(typeof input === "number") {
		inputCubeString = setCharAt(inputCubeString, input, ((parseInt(inputCubeString.charAt(input)))%6)+1); // Change character at 
	}

	if(typeof input === "string") {
		inputCubeString = move(inputCubeString, input)
	}

	updateColours();
}

function updateColours() {
	for(x = 0; x < 24; x++) {
		switch(inputCubeString.charAt(x)) {
			case "1":
				document.getElementById("face" + x).style.backgroundColor = "#ff0000" // Change color to red
				document.getElementById("3Dface" + x).style.backgroundColor = "#ff0000" // Change color to red
				break;
			case "2":
				document.getElementById("face" + x).style.backgroundColor = "#fc6600" // Change color to orange
				document.getElementById("3Dface" + x).style.backgroundColor = "#fc6600" // Change color to orange
				break;
			case "3":
				document.getElementById("face" + x).style.backgroundColor = "#00ff00" // Change color to green
				document.getElementById("3Dface" + x).style.backgroundColor = "#00ff00" // Change color to green
				break;
			case "4":
				document.getElementById("face" + x).style.backgroundColor = "#0000ff" // Change color to blue
				document.getElementById("3Dface" + x).style.backgroundColor = "#0000ff" // Change color to blue
				break;
			case "5":
				document.getElementById("face" + x).style.backgroundColor = "#ffffff" // Change color to white
				document.getElementById("3Dface" + x).style.backgroundColor = "#ffffff" // Change color to white
				break;
			case "6":
				document.getElementById("face" + x).style.backgroundColor = "#ffff00" // Change color to yellow
				document.getElementById("3Dface" + x).style.backgroundColor = "#ffff00" // Change color to yellow
				break;
		}
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

	temp = move(temp, "X'");
	temp = move(temp, "X'");
	
	for(i = 0; i < 4; i++) {
		if(temp.charAt(2) == "1" && temp.charAt(12) == "4" && temp.charAt(23) == "6") {
			return temp;
		}
		temp = move(temp, "Y");
	}

	return "111122223333444455555666";
}


function setCharAt(str,index,chr) {
	if(index > str.length-1) {
		return str;
	} else {
		return str.substring(0,index) + chr + str.substring(index+1);
	}
}


function createImages() {

	element = document.createElement("div");
	element.id = "images";
	document.body.appendChild(element);

	for(i = 0; i < solveSteps.length; i++) {
		element = document.createElement("div");
		element.id = "image" + (i+1);

		document.getElementById("images").appendChild(element);
		
	
		element = document.createElement("p");
		text = document.createTextNode(i+1+") " + solveSteps[i])
		element.appendChild(text);

		document.getElementById("image" + (i+1)).appendChild(element);


		element = document.createElement("img");
		element.src = "./moves/" + solveSteps[i] + ".jpeg";

		document.getElementById("image" + (i+1)).appendChild(element);
	}

	element = document.createElement("div");
	element.id = "space";
	document.body.appendChild(element);

	document.getElementById('space').scrollIntoView();
}


function toggle() {
	if(toggle3D == 0) {
		toggle3D = 1;
		document.getElementById("secondContainer").style.display = "none";
		document.getElementById("firstContainer").style.display = "flex";
		document.body.style.setProperty("--faceletSize", "120px");
		document.body.style.setProperty("--faceletBorder", "4px");
		document.body.style.setProperty("--borderRadius", "20px");
		document.body.style.setProperty("--cube-width", "256px");
		document.body.style.setProperty("--translateZ", "128px");
	} else if(toggle3D == 1) {
		toggle3D = 0;
		document.getElementById("secondContainer").style.display = "flex";
		document.getElementById("firstContainer").style.display = "none";
		document.body.style.setProperty("--faceletSize", "80px");
		document.body.style.setProperty("--faceletBorder", "3px");
		document.body.style.setProperty("--borderRadius", "12px");
	}
}


function scramble() {
	for(i = 0; i < Math.floor(Math.random() * (1000 - 100 + 1)) + 100; i++) {
		inputCubeString = move(inputCubeString, moves[Math.floor(Math.random() * (8 - 0 + 1)) + 0])
	}
	for(i = 0; i < Math.floor(Math.random() * (1000 - 100 + 1)) + 100; i++) {
		inputCubeString = move(inputCubeString, cubeTurns[Math.floor(Math.random() * (1 - 0 + 1)) + 0])
	}
	updateColours();
}


function reset() {
	//if (confirm('Are you sure? Reloading the page will lose the current data.')) {
		window.location.reload();
	//} else {
		return;
	//}
}



cube.style.transform = "rotateX(" + -35 + "deg) rotateY(" + -45 + "deg)";

const handleMouseMove = (event) => {
	if(mouseDown) {
		mouseX = event.clientX;
		mouseY = event.clientY;
		rotateX = (((prevMouseY-mouseY) / window.innerWidth)*rotationValue)+prevRotateX;
		rotateY = ((-(prevMouseX-mouseX) / window.innerHeight)*rotationValue)+prevRotateY;
		
		cube.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
	}
};

window.addEventListener("mousemove", handleMouseMove);

window.addEventListener("mouseup", (event) => {
	mouseDown = 0;
});

window.addEventListener("mousedown", (event) => {
	mouseDown = 1;
	prevMouseX = event.clientX;
	prevMouseY = event.clientY;
	prevRotateX = rotateX;
	prevRotateY = rotateY;
});
