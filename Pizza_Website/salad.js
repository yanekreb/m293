const salads = [
    {
        "name": "Green salad with tomatoe",
        "prize": "4$",
        "id": 1,
        "ingredients": [
            "Iceberg lettuce", 
            "Tomatoes"
        ],
        "imageUrl": "https://farm6.staticflickr.com/5087/5358599242_7251dc7de4.jpg"
    },
    {
        "name": "Tomato salad with mozzarella",
        "prize": "5$",
        "id": 2,
        "ingredients": [
            "Tomato",
            "Mozzarella"
        ],
        "imageUrl": "https://farm4.staticflickr.com/3130/5862973974_c107ed81ea.jpg"
    },
    {
        "name": "Field salad with egg",
        "prize": "4$",
        "id": 3,
        "ingredients": [
            "Field salad", 
            "Egg"
        ],
        "imageUrl": "https://farm9.staticflickr.com/8223/8372222471_662acd24f6.jpg"
    },
    {
        "name": "Rocket with parmesan",
        "prize": "5$",
        "id": 4,
        "ingredients": [
            "Rocket", 
            "Parmesan"
        ],
        "imageUrl": "https://farm8.staticflickr.com/7017/6818343859_bb69394ff2.jpg"
    }
];

let saladContainer = document.querySelector("#saladContainer");
console.log("salad container", saladContainer);

for (i = 0; i < salads.length; i++) {
    let salad = salads[i];
    console.log("Salad", salad);

    let div = document.createElement("div");
    let saladContent = `
    <div>
    <img src="${salad.imageUrl}" alt="Green salad with tomatoes" width="250" height="250"> <br>
    ${salad.name}<br>
    <div class="schriftgrösse1">
        ${salad.ingredients} <br>
    </div>
    <div class="warenkorb">

        <select name="Salad">
            <option value="Salad">French Dressing</option>
            <option value="Salad">Italian Dressing</option>
        </select>

        ${salad.prize}
        <button onclick="counter()" type="button">Bestellen</button> <br>
    </div>
    <br>
</div>
`;
    div.innerHTML = saladContent;
    saladContainer.appendChild(div);
}
