import "./style.css"
import { createElement } from "../helperFunction"
import dawnSushiLogo from "../images/icons/sushi-svgrepo-com.svg"
import { generateComponent } from "../createComponent"
import sushiPlatter from "../images/sushi-platter.jpg"
const createAboutInformation = () =>{

    const infoDiv = createElement({

        type: 'div',
        className: "infoDiv"
    })
    
    const logo = createElement({

        type: "img",
        src: dawnSushiLogo,
        alt: "Dawn Sushi Logo",

    });

    const title = createElement({

        type: "h1",
        className: "title",
        textContent: "A Taste of the Finest Sushi Dishes",
    });

    const description = createElement({

        type: "p",
        className: "aboutDescription",
        textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
         in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
         occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,

    });


    infoDiv.appendChild(logo);
    infoDiv.appendChild(title);
    infoDiv.appendChild(description);

    return infoDiv
}




export const displayAboutPage = () =>{

    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = "";

    const firstComponent = generateComponent({

        sectionNumber: 'section1',

        title: {text: "A Taste of the Finest Sushi Dishes", className: 'aboutTitle'},

        text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,

       
        imageSrc: sushiPlatter

    })


    contentContainer.appendChild(firstComponent);


    
}
