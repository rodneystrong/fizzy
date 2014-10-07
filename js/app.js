//grab the area where you want to display the output and set it equal to a var

var thePlace = $('#the-numbers');
//unit test
//thePlace.append('hello');

//create the variable that will house the numbers
var theNumbers = 0;

//create a function that will print out 1 to 100
function printNumbers(theNumbers) {
	for(i=0;i<=100;i++){
		theNumbers++;
		//console.log(theNumbers);
		thePlace.append(theNumbers);
	}
}

//call the printNumbers function
printNumbers();