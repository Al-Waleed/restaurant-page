import './style.css';
import home from "./welcome-page";
import menu from './menu';
import about from './about';

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => displayPage(home));

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", () => displayPage(menu));

const aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", () => displayPage(about));


function displayPage(page){
    document.getElementById("content").innerHTML = ""// to remove the previously loaded page
    page();// to display the new page
}