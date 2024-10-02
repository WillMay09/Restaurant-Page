
import {createElement} from "../helperFunction.js"
import californiaRoll from "../images/california-roll.jpg"
import "./style.css"


const generateComponent = ({title, text, buttons, imageSrc}) =>{

    const section = createElement({type: 'section', className: 'sectionComponent'})

    let infoContainer = createElement({type: 'div', className: 'infoContainer'});

    const h1 = createElement({type: 'h1', className: 'home-title', textContent: title});

    const p = createElement({type: 'p', textContent : text});

    infoContainer.appendChild(h1);
    infoContainer.appendChild(p);
    const buttonContainer = createElement({type:'div', className: 'buttonContainer'});
    if(buttons && buttons.length > 0){

        buttons.forEach(button =>{
            const btn = createElement({type: 'button', className: button.className, textContent:button.textContent});
            buttonContainer.appendChild(btn);
        });


    }
    infoContainer.appendChild(buttonContainer);
    section.appendChild(infoContainer);

    //create image container
    if(imageSrc){
        const imageContainer = createImageDiv(imageSrc);
        section.appendChild(imageContainer);
    }
    
    
    

    return section;

}


const createImageDiv = (imageSrc) =>{

    const img = createElement({
        type: 'img',
         src: imageSrc
        });
    const imageContainer = createElement({type: 'container', className: 'imageContainer'});
    imageContainer.appendChild(img);
    return imageContainer;

}


const displayHomePage = () =>{

    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = "";
   
    ///first Section////
    const firstComponent = generateComponent({

        title:"Fresh Sushi & BYOB",

        text:`Savor the flavor of our Grilled Salmon Kama, a unique delight now featured
        on our All-You-Can-Eat menu. Available exclusively during Friday dinner and throughout the weekend—until sold out!
        Keep in mind, that there is a limit of one serving per two guests.`,

        buttons: [

            {className: 'reservation', textContent:'Make a Reservation'},
            {className: 'orderButton', textContent: 'Order Now'}

        ],
        imageSrc: californiaRoll

    });
    
    contentContainer.appendChild(firstComponent);

    //second Section///

    // const secondComponent = generateComponent({

    //     title:"Fresh Sushi & BYOB",

    //     text:`Savor the flavor of our Grilled Salmon Kama, a unique delight now featured
    //     on our All-You-Can-Eat menu. Available exclusively during Friday dinner and throughout the weekend—until sold out!
    //     Keep in mind, that there is a limit of one serving per two guests.`,

    //     buttons: [

    //         {className: 'reservation', textContent:'Make a Reservation'},
    //         {className: 'orderButton', textContent: 'Order Now'}

    //     ],
    //     imageSrc: californiaRoll

    // });
    
    contentContainer.appendChild(firstComponent);

};


export { displayHomePage };
