const pizzapizza = [
    {
        "name": "Piccante",
        "prize": "16$",
        "id": 1,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Spicy Salami",
            "Chilies",
            "Oregano"
        ],
        "imageUrl": "https://farm5.staticflickr.com/4042/4660357797_09dcd917b1.jpg"
    },
    {
        "name": "Giardino",
        "prize": "14$",
        "id": 2,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Artichokes",
            "Fresh Mushrooms"
        ],
        "imageUrl": "https://farm4.staticflickr.com/3565/5818252079_29635c03cc.jpg"
    },
    {
        "name": "Prosciuotto e funghi",
        "prize": "15$",
        "id": 3,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Ham",
            "Fresh Mushrooms",
            "Oregano"
        ],
        "imageUrl": "https://farm9.staticflickr.com/8326/8096659940_4e0a65e598.jpg"
    },
    {
        "name": "Quattro formaggi",
        "prize": "13$",
        "id": 4,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Parmesan",
            "Gorgonzola"
        ],
        "imageUrl": "https://farm3.staticflickr.com/2797/4344770705_b6d159f799.jpg"
    },
    {
        "name": "Quattro stagioni",
        "prize": "17$",
        "id": 5,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Ham",
            "Artichokes",
            "Fresh Mushrooms"
        ],
        "imageUrl": "https://farm5.staticflickr.com/4078/4932649252_b0aaa733ae.jpg"
    },
    {
        "name": "Stromboli",
        "prize": "12$",
        "id": 6,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Fresh Chilies",
            "Olives",
            "Oregano"
        ],
        "imageUrl": "https://farm6.staticflickr.com/5661/22907779119_b2ec1efa11.jpg"
    },
    {
        "name": "Verde",
        "prize": "13$",
        "id": 7,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Broccoli",
            "Spinach",
            "Oregano"
        ],
        "imageUrl": "https://farm7.staticflickr.com/6044/6363618775_e8714fb517.jpg"
    },
    {
        "name": "Rustica",
        "prize": "15$",
        "id": 8,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Ham",
            "Bacon",
            "Onions",
            "Garlic",
            "Oregano"
        ],
        "imageUrl": "https://farm9.staticflickr.com/8574/16488100040_988f0caa70.jpg"
    }
];

let pizzaContainer = document.querySelector("#pizzaContainer");
console.log("pizza container", pizzaContainer);
let pizza = pizzas[0];
console.log("Pizza", pizza);
let string1 = 'variante 1';
let string2 = "variante 1";
let string3 = `
<div class="pizza">
    asdf
</div>
`;

let div = document.createElement("div");
let pizzaContent = `
<div class="pizza">
    <h2 class="pizzanme">${pizza.name}</h2>
</div>
`;
div.innerHTML = pizzaContent;
pizzaContainer.appendChild(div);
// for(let i = 0;i< 10;i++){
//     let div = document.createElement("div");
//     div.innerHTML = "hallo asbdlfaslfkasdjflsakdf fds";
//     pizzaContainer.appendChild(div);
// }