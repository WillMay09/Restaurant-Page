import menuItems from "./menu-items";
import {createElement} from "../helperFunction";



//generate Menu DOM items
const generateItems = ({name,image}) =>{

    const itemTitle = createElement(

        {
            type: 'h3',
            className: `${name}-title`,
            textcontent: name,


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

    itemDiv.appendChild(itemTitle);
    itemDiv.appendChild(photo);

    return itemDiv;

};

const generateMenu = () =>{

const menu = menuItems.map((item) => generateItems(item))
return menu;
};


export const displayMenu = () =>{

    const contentContainer = document.querySelector('.content')
    contentContainer.innerHTML = "";
    let menuDiv = document.createElement('div');

    Object.assign(menuDiv,{

        className: "menuDiv",

    });

    const menuContent = generateMenu();
    menuContent.forEach((item)=>{

        menuDiv.appendChild(item);
    });
    //menuDiv.appendChild(menuContent);
    contentContainer.appendChild(menuDiv);

}


