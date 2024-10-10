
import {createElement} from "./helperFunction.js"

export const generateComponent = ({sectionNumber, title, text, buttons, imageSrc}) =>{

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


export const createImageDiv = (imageSrc) =>{

    const img = createElement({
        type: 'img',
         src: imageSrc
        });
    const imageContainer = createElement({type: 'container', className: 'imageContainer'});
    imageContainer.appendChild(img);
    return imageContainer;

}