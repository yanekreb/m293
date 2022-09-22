let counter = document.getElementById("counter").innerHTML;

function incrementValue()
{
	console.log(counter);
	counter++;
	document.getElementById("counter").innerHTML = counter;
}

function decreaseValue()
{	
console.log(counter);
	if(counter > 0){
			counter--;
	document.getElementById("counter").innerHTML = counter;
	}
	if(counter == "0"){
		document.getElementById("counter").innerHTML = "Achtung, weniger als 0 geht nicht";
	}
	
}