//grab the area where you want to display the output and set it equal to a var

// var thePlace = $('#the-numbers');
// //unit test
// //thePlace.append('hello');

// //create the variable that will house the numbers
// var theNumber = 0;
// //console.log(theNumber);

// //create a function that will print out 1 to 100
// function printNumbers() {
// 	for(i=0; i<100; i++){
// 		theNumber++;
// 		//unit test
// 		//console.log(theNumber);
// 		//unit test
// 		//thePlace.append(theNumber + '<br/>');
// 		if(theNumber % 3 == 0 && theNumber % 5 == 0){
// 			thePlace.append('<li class="space">fizz buzz</li>');
// 		} else if(theNumber % 3 == 0) {
// 			thePlace.append('<li class="space">fizz</li>');
// 		} else if(theNumber % 5 == 0) {
// 			thePlace.append('<li class="space">buzz');
// 		} else {
// 			thePlace.append('<li class="space">' + theNumber + "</li>");
// 		}
// 	}
// }

// //call the printNumbers function
// printNumbers();


/*Javascript only version*/
var thePlace = document.getElementById('the-numbers');

var theNumber = 0;

function printNumber(){
	var theLi = document.createElement('li');

	var fizz = document.createTextNode('fizz');
	var buzz = document.createTextNode('buzz');
	var fizzBuzz = document.createTextNode('fizzbuzz');
	
	var theFizz = theLi.appendChild(fizz);
	var theBuzz = theLi.appendChild(buzz);
	var theFizzBuzz = theLi.appendChild(fizzBuzz);

	for(i=0; i<100; i++){
		theNumber++;
		if(theNumber % 3 == 0 && theNumber % 5 == 0){
			thePlace.appendChild(fizzBuzz);
		} else if(theNumber % 3 == 0) {
			thePlace.appendChild(fizz);
		} else if(theNumber % 5 == 0) {
			thePlace.appendChild(buzz);
		} 
		// else {
		// 	thePlace.appendChild(theNumber);
		// }
	}
}

printNumber();