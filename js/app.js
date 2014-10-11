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
			thePlace.append('<div class="space orange">fizz buzz</div>');
		} else if(theNumber % 3 == 0) {
			thePlace.append('<div class="space red">fizz</div>');
		} else if(theNumber % 5 == 0) {
			thePlace.append('<div class="space blue">buzz');
		} else {
			thePlace.append('<div class="space">' + theNumber + "</div>");
		}

	}
}

//call the printNumbers function
printNumbers();