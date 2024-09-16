
import {createElement} from "../helperFunction.js"
import instagramLogo from "../images/pexels-rajesh-tp-749235-2098085.jpg"
import "./style.css"
const generateContainer = () =>{


let container = createElement({type: 'div', className: 'homeContainer'});

let infoContainer = createElement({type: 'div', className: 'infoContainer'});

const h1 = createElement({type: 'h1', className: 'home-title', textContent: "Dawn Sushi"});

const p = createElement({type: 'p', 
    
    textContent: "Welcome to Dawn Sushi where the sunset meets quality sushi meals",


});
const button = createElement({type: 'button', 
    className: "exploreMenu",
    textContent:"Explore Our Menu",
});

infoContainer.appendChild(h1);
infoContainer.appendChild(p);
infoContainer.appendChild(button);

container.appendChild(infoContainer);



return container;
}

const displayHomePage = () =>{

    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = "";
    const container = generateContainer();

    const img = createElement({
        type: 'img',
        src: instagramLogo
        });

    container.appendChild(img);

    contentContainer.appendChild(container);
};


export { displayHomePage };
