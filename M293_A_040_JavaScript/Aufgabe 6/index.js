let counter = document.getElementById("counter").innerHTML;

function incrementValue() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
}

function decreaseValue() {
    if (counter > 0) {
        counter--;
        document.getElementById("counter").innerHTML = counter;
    }
}