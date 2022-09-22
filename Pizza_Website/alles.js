
function counter() {
    if (localStorage.count) {
      localStorage.count = Number(localStorage.count)+1;
    } else {
      localStorage.count = 0;
    }
    document.getElementById("counter").innerHTML = localStorage.count;   
}

document.getElementById("counter").innerHTML = localStorage.count; 
  
function reset() {
    localStorage.count = 0;
    document.getElementById("counter").innerHTML = localStorage.count;
}

function reset1() {
    localStorage.count = 0;
    document.getElementById("counter").innerHTML = localStorage.count;
}
