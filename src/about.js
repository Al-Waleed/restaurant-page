export default function () {
    const content = document.querySelector("#content");
    const div = document.createElement("div");
    div.classList.add("about");
    content.appendChild(div);
    
    const header = document.createElement("h1");
    header.innerText = "About Us";
    div.appendChild(header);

    const para = document.createElement("p");
    para.innerText = `Ex consequat proident exercitation ea elit eiusmod occaecat ea. Officia consectetur adipisicing elit exercitation ea officia veniam officia aute aute dolore adipisicing mollit. Culpa nisi elit Lorem veniam do veniam incididunt consequat incididunt.
    Irure consequat cillum culpa ex aute commodo sint. Ipsum irure est minim incididunt reprehenderit esse sit reprehenderit eiusmod veniam. Nostrud aliqua ex magna sunt cupidatat amet eu enim labore fugiat est. Reprehenderit sit laboris labore nisi sunt. Nulla cupidatat labore commodo Lorem fugiat adipisicing velit enim non sit. In nulla ullamco exercitation proident cupidatat et reprehenderit   excepteur. Sit culpa exercitation aliqua irure non occaecat dolore et laboris ut.`
    
    div.appendChild(para);
}