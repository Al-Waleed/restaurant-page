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

export function workingHours(){
    const content = document.querySelector("#content");
    const div = document.createElement("div");
    div.classList.add("workingHours");
    const para = document.createElement("p");
    para.innerHTML = "Working Hours"
    const list = document.createElement("ul");

    content.appendChild(div)
    div.appendChild(para)
    div.appendChild(list)


    
    const listItems = ["Sunday: 12:00 - 23:00",
        "Monday: 12:00 - 23:00",
        "Tuesday: 12:00 - 23:00",
        "Wednesday: 12:00 - 23:00",
        "Thursday: 12:00 - 01:00",
        "Friday: 14:00 - 01:00",
        "Saturday: 12:00 - 23:00"
    ]

    listItems.forEach(item => {

        const listItem = document.createElement("li");
        listItem.innerText = item;
        listItem.classList.add("workingHoursList");
        list.appendChild(listItem);

        
    });
}

