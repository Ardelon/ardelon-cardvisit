import { createElement, techStack } from "./utilities";
import { configCardVisit } from "./config";
import identity from "./identityContainer";
import techStackLogo from "./techStackLogo";
import information from "./informationContainer";
import * as url from '../assets/images/avatar.jpg';

const cardvisitContainer = () => {

    const {cardVisitContainerConfig, cardVisitBackgroundContainerConfig, cardVisitContainerUpperBodyConfig, cardVisitContainerLowerBodyConfig} = configCardVisit;

    const cardVisitContainer = createElement(cardVisitContainerConfig);
    const cardVisitBackgroundContainer = createElement(cardVisitBackgroundContainerConfig);
    const cardVisitContainerUpperBody = createElement(cardVisitContainerUpperBodyConfig);
    const cardVisitContainerLowerBody = createElement(cardVisitContainerLowerBodyConfig);

    
    const person = identity(url.default,"Selam Gardaş", "https://www.google.com", "right-top");
    const company = identity("https://ibb.istanbul/assets/images/logos/main-logo-light.png", "IBB", "https://ibb.istanbul/", "left-top");

    techStack.forEach(techStackInfo => {
        const techStackElement = techStackLogo(techStackInfo);
        cardVisitContainerLowerBody.appendChild(techStackElement)
    })
    

    cardVisitContainerUpperBody.appendChild(person)
    cardVisitContainerUpperBody.appendChild(company)
    cardVisitContainerUpperBody.appendChild(information());

    cardVisitContainer.appendChild(cardVisitBackgroundContainer);
    cardVisitContainer.appendChild(cardVisitContainerUpperBody);
    cardVisitContainer.appendChild(cardVisitContainerLowerBody);

    return cardVisitContainer
}

export default cardvisitContainer