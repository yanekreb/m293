let myNumbersArray = [1,2,3,4];
let myStringsArray = [1,2,3,4];
// Do not: let myMixedArray = ["einst",2,3];


console.log("Erstes Element", myNumbersArray[0]);

console.log("Zweites Element", myNumbersArray[1]);

/*
Arrays definieren:
-Manuel definieren
-Automatisch abfüllt: 1-100 ; 100 random nuumbers

Arrays manipulieren:
- Neue Elemente hinzufügen: am Anfang, am ende
- Elemente löschen: am anfang, irgendwo in der Mitte, am ende

Arrays optimieren:
- Filtern: nur gerade 
*/

let zahl = [];

for (let number = 0; number <= 100; number++){

    zahl.push(number);
}

console.log(zahl);

let myArray = [];
let random = [];

for (i = 0; i <= 100; i++) {
    myNumbersArray.push(i+1);
    random.push(Math.floor(Math.random() * 100) + 1);
}

console.log(random);

let hallo = [];

hallo.push("1");
hallo.unshift("2");

console.log(hallo);

let schmutz = [1, 2, 3, 4, 5, 6];

schmutz.pop();
schmutz.splice(1,1);
schmutz.shift();


console.log(schmutz);

let zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function gerade(zahlen){
    return !(zahlen % 2);
}

let result = zahlen.filter(gerade);
console.log(result);

let sortieren = [69, 1000, 20, 300];
sortieren.sort(function(b,a){return b - a});
console.log(sortieren);
sortieren.sort(function(a,b){return b - a});
console.log(sortieren);