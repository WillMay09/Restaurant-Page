
import { generateComponent} from "../createComponent.js"
import californiaRoll from "../images/california-roll.jpg"
import sushiMeal from "../images/sushiDish.jpg"

import "./style.css"





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
