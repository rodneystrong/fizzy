//grab the area where you want to display the output and set it equal to a var

var thePlace = $('#the-numbers');
//unit test
//thePlace.append('hello');

//create the variable that will house the numbers
var theNumber = 0;
//console.log(theNumber);

//create a function that will print out 1 to 100
function printNumbers() {
	for(i=0; i<100; i++){
		theNumber++;
		//unit test
		//console.log(theNumber);
		//unit test
		//thePlace.append(theNumber + '<br/>');
		if(theNumber % 3 == 0 && theNumber % 5 == 0){
			thePlace.append('<li class="space">fizz buzz</li>');
		} else if(theNumber % 3 == 0) {
			thePlace.append('<li class="space">fizz</li>');
		} else if(theNumber % 5 == 0) {
			thePlace.append('<li class="space">buzz');
		} else {
			thePlace.append('<li class="space">' + theNumber + "</li>");
		}
	}
}

//call the printNumbers function
printNumbers();

/*
	Description:
	Returns a reference to the element by its ID.

	Syntax:
	element = document.getElementById(id);
*/