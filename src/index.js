
import "./style.css";
import { displayHomePage } from "./home/home.js";
const navMenuButtons = document.querySelectorAll(".nav-menu-button");

navMenuButtons.forEach((button)=>{

    button.addEventListener("click", () =>{

        const page = button.textContent.toLocaleLowerCase();
        switch(page){
            case "home":
              displayHomePage();
                break;
            case "menu":
                //displayMenuPage();
                break;
            case "about":
               // displayAboutPage();
                break;
            default:
                displayHomePage();
                break;
        };

    });


})