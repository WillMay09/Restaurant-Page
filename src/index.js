
import "./style.css";
import { displayHomePage } from "./home/home.js";
import { displayMenu } from "./menu/menu-page.js";
import { displayAboutPage } from "./about/about.js";
const navMenuButtons = document.querySelectorAll(".nav-menu-link");

    displayHomePage();

navMenuButtons.forEach((button)=>{

    

    button.addEventListener("click", () =>{

        const page = button.textContent.toLocaleLowerCase();
        switch(page){
            case "home":
              displayHomePage();
                break;
            case "menu":
                displayMenu();
                break;
            case "about":
                displayAboutPage();
                break;
            default:
                displayHomePage();
                break;
        };

    });


})