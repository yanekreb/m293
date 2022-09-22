const drinks = [
    {
        "name": "Coke",
        "prize": "2$",
        "prize1": "3$",
        "prize2": "5$",
        "id": 1,
        "imageUrl": "https://farm1.staticflickr.com/71/203324363_b448827eb0.jpg",
        "volume": "33cl",
        "volume1": "50cl",
        "volume2": "1.5l",
    },
    {
        "name": "Fanta",
        "prize": "2$",
        "prize1": "3$",
        "prize2": "5$",
        "id": 2,
        "imageUrl": "https://farm1.staticflickr.com/684/32876893826_130576f75a.jpg",
        "volume": "33cl",
        "volume1": "50cl",
        "volume2": "1.5l",
    },
    {
        "name": "Pepsi",
        "prize": "2$",
        "prize1": "3$",
        "prize2": "5$",
        "id": 3,
        "imageUrl": "https://farm4.staticflickr.com/3344/3593103557_bf47c0a3a2.jpg",
        "volume": "33cl",
        "volume1": "50cl",
        "volume2": "1.5l",
    },
    {
        "name": "Red bull",
        "prize": "2$",
        "prize1": "3$",
        "prize2": "5$",
        "id": 4,
        "imageUrl": "https://farm3.staticflickr.com/2391/2507916617_254348d40c.jpg",
        "volume": "33cl",
        "volume1": "50cl",
        "volume2": "1.5l",
    }
];

let drinksContainer = document.querySelector("#drinksContainer");
console.log("drinks container", drinksContainer);

for (i = 0; i < drinks.length; i++) {
    let drink = drinks[i];
    console.log("Drinks", drink);

    let div = document.createElement("div");
    let drinkContent = `
    <div>
        <img src="${drink.imageUrl}" width="250" height="250" alt="Coke"> <br>
        ${drink.name}
        <div class="warenkorb">

            <select name="amount">
                <option value="33cl">${drink.volume} ${drink.prize}</option>
                <option value="50cl">${drink.volume1} ${drink.prize1}</option>
                <option value="1.5l">${drink.volume2} ${drink.prize2}</option>
            </select>

            <button onclick="counter()" type="button">Bestellen</button>
        </div>
        <br>
    </div>
`;
    div.innerHTML = drinkContent;
    drinksContainer.appendChild(div);
}
