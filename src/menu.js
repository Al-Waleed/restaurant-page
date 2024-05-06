export default function menu(){
    const content = document.querySelector("#content");

    const menuDiv = document.createElement("div")
    menuDiv.classList.add("menu");
    content.appendChild(menuDiv);

    const menuHeader = document.createElement("h1");
    menuHeader.innerText = "Menu"
    menuDiv.appendChild(menuHeader);

    const startersDiv = document.createElement("div");
    startersDiv.classList.add("starters");
    menuDiv.appendChild(startersDiv);

    const startersHeader = document.createElement("h2");
    startersHeader.innerText = "Starters";
    startersDiv.appendChild(startersHeader);

    const startersList = document.createElement("ul");
    startersDiv.appendChild(startersList);

    const startersItems = ["Charcoal pancakes", "Charcoal french toast", "Mashed honey charcoal"];
    startersItems.forEach(item => createList(startersList, item));

    const mainDishesDiv = document.createElement("div");
    mainDishesDiv.classList.add("mainDishes");
    menuDiv.appendChild(mainDishesDiv);

    const mainDishesHeader = document.createElement("h2");
    mainDishesHeader.innerText = "Main Dishes";
    mainDishesDiv.appendChild(mainDishesHeader);

    const mainList = document.createElement("ul");
    mainDishesDiv.appendChild(mainList);

    const dishes = ["Boiled Charcoal", "Fried Charcoal", "Steamed Charcoal", "Roasted Charcoal"]
    dishes.forEach(item => createList(mainList, item));

    const drinksDiv = document.createElement("div");
    drinksDiv.classList.add("drinks");
    menuDiv.appendChild(drinksDiv);

    const drinksHeader = document.createElement("h2");
    drinksHeader.innerText = "Main Dishes";
    drinksDiv.appendChild(drinksHeader);

    const drinksList = document.createElement("ul");
    drinksDiv.appendChild(drinksList);

    const drinks = ["Boiled Charcoal", "Fried Charcoal", "Steamed Charcoal", "Roasted Charcoal"]
    drinks.forEach(item => createList(drinksList, item));

}

function createList(parent, item){
    const listItem = document.createElement("li");
    listItem.innerText = item;
    parent.appendChild(listItem);
}