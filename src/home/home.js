
import {createElement} from "../helperFunction.js"
import californiaRoll from "../images/california-roll.jpg"
import "./style.css"

const generateContainer = (title, text) =>{


    let infoContainer = createElement({type: 'div', className: 'infoContainer'});

    const h1 = createElement({type: 'h1', className: 'home-title', textContent: title});

    const p = createElement({type: 'p', 
        
        textContent : text

    });

    // const button = createElement({type: 'button', 
    //     className: "reservation",
    //     textContent:"Make a Reservation",
    // });

    // const buttonWithOutline = createElement({type: 'button',

    //     className: "orderButton",
    //     textContent: "Order Now"
    // });

    // const img = createElement({
    //     type: 'img',
    //     src: instagramLogo
    //     });

    infoContainer.appendChild(h1);
    infoContainer.appendChild(p);
    // infoContainer.appendChild(button);

    // section.appendChild(img);
return infoContainer;
}

const displayHomePage = () =>{

    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = "";
    ///first Section////
    let title = "Fresh Sushi & BYOB";

    let textContent = `Savor the flavor of our Grilled Salmon Kama, a unique delight now featured
        on our All-You-Can-Eat menu. Available exclusively during Friday dinner and throughout the weekend—until sold out!
        Keep in mind, that there is a limit of one serving per two guests.`;

    const section = createElement({type: 'section', className: 'sectionComponent'})
    const infoContainer = generateContainer(title, textContent);
    const button = createElement({type:'button', className: "reservation", textContent:"Make a Reservation"});
    const buttonVarient = createElement({type:'button',  className: "orderButton", textContent: "Order Now"});
    infoContainer.appendChild(button);
    infoContainer.appendChild(buttonVarient);

    const img = createElement({
            type: 'img',
             src: californiaRoll
            });
    const imageContainer = createElement({type: 'container', className: 'imageContainer'});
    imageContainer.appendChild(img);
    section.appendChild(infoContainer);
    section.appendChild(imageContainer);
    contentContainer.appendChild(section);
};


export { displayHomePage };
