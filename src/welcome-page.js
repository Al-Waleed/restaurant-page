const content = document.querySelector("#content");
const div = document.createElement("div");
const list = document.createElement("ul");
const listItem = document.createElement("li");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");

div.classList.add("welcome");
div.innerText = "ASDASDASD"

content.appendChild(div);

export default function welcome(){

    const content = document.querySelector("#content");
    const div = document.createElement("div");
    div.classList.add("welcome");
    content.appendChild(div);
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    h1.innerText = "Welcome to the best charcoal restaurant in the world";
    h2.innerText = "We serve boiled, fried, steamed and roasted charcoal";
    div.appendChild(h1);
    div.appendChild(h2);
}

