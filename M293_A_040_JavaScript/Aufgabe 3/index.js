let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let dd = document.createElement ('div');
	dd.innerHTML = "Hello World";
	dd.style.background = "yellow";
	document.body.appendChild(dd);
});