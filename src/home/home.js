
import {createElement} from "../helperFunction.js"
import californiaRoll from "../images/california-roll.jpg"
import sushiMeal from "../images/sushiDish.jpg"
import "./style.css"


const generateComponent = ({sectionNumber, title, text, buttons, imageSrc}) =>{

    const section = createElement({type: 'section', className: sectionNumber});

    let infoContainer = createElement({type: 'div', className: `infoContainer ${sectionNumber}`});

    const h1 = createElement({type: 'h1', className: `title ${sectionNumber}`, textContent: title.text});

    const p = createElement({type: 'p', textContent : text});

    infoContainer.appendChild(h1);
    infoContainer.appendChild(p);
    const buttonContainer = createElement({type:'div', className: `buttonContainer ${sectionNumber}`});
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

        sectionNumber: 'section1',

        title: {text: "Fresh Sushi & BYOB", className: 'firstTitle'},

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

    //second Section

    const secondComponent = generateComponent({

        sectionNumber: 'section2',

        title: {text: "Fresh Sushi & BYOB", className: 'SecondTitle'},

        text:`Savor the flavor of our Grilled Salmon Kama, a unique delight now featured
        on our All-You-Can-Eat menu. Available exclusively during Friday dinner and throughout the weekend—until sold out!
        Keep in mind, that there is a limit of one serving per two guests.`,

        buttons: [

            {className: 'detailsButton', textContent:'More Details'},
            

        ],
        imageSrc: sushiMeal

    });
    
     contentContainer.appendChild(secondComponent);


     const thirdComponent = generateComponent({

        sectionNumber: 'section3',

        title: {text: "Fresh Sushi & BYOB", className: 'SecondTitle'},

        text:`Savor the flavor of our Grilled Salmon Kama, a unique delight now featured
        on our All-You-Can-Eat menu. Available exclusively during Friday dinner and throughout the weekend—until sold out!
        Keep in mind, that there is a limit of one serving per two guests.`,


    });
    
     contentContainer.appendChild(thirdComponent);



};





export { displayHomePage };
