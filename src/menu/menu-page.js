import menuItems from "./menu-items";
import {createElement} from "../helperFunction";
import "./menuStyle.css"



//generate Menu DOM items
const generateItems = ({name,image}) =>{

    const itemTitle = createElement(

        {
            type: 'h3',
            className: `${name}-title`,
            textContent: name,


        }
    );
    const photo = createElement({

        type: 'img',
        src: image,
        alt: name,

    });

    const itemDiv = createElement({    
        type: 'div',
        className: `${name}-div`,
    })

    
    itemDiv.appendChild(photo);
    itemDiv.appendChild(itemTitle);

    return itemDiv;

};

const generateMenu = () =>{

const menu = menuItems.map((item) => generateItems(item))
return menu;
};


export const displayMenu = () =>{

    const contentContainer = document.querySelector('.content')
    contentContainer.innerHTML = "";
    let menuDiv = document.createElement('section');

    Object.assign(menuDiv,{

        className: "menuSection",

    });

    const menuContent = generateMenu();
    menuContent.forEach((item)=>{

        menuDiv.appendChild(item);
    });
    //menuDiv.appendChild(menuContent);
    contentContainer.appendChild(menuDiv);

}


