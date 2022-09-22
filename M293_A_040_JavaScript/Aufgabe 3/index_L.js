let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	 let elem = document.createElement("div");
    elem.innerHTML = "Hello World";
	elem.style.background = "Yellow";
    document.body.appendChild(elem);
});