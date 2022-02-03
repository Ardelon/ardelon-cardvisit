import { createElement } from "./utilities";
import { configCardVisit } from "./config";
import identity from "./identityContainer";
import * as url from '../assets/images/avatar.jpg';

const cardvisitContainer = () => {

    const {cardVisitContainerConfig, cardVisitBackgroundContainerConfig, cardVisitContainerUpperBodyConfig, cardVisitContainerLowerBodyConfig} = configCardVisit;

    const cardVisitContainer = createElement(cardVisitContainerConfig);
    const cardVisitBackgroundContainer = createElement(cardVisitBackgroundContainerConfig);
    const cardVisitContainerUpperBody = createElement(cardVisitContainerUpperBodyConfig);
    const cardVisitContainerLowerBody = createElement(cardVisitContainerLowerBodyConfig);

    
    const person = identity(url.default,"Selam Gardaş", "https://www.google.com", "right-top");
    const company = identity("https://ibb.istanbul/assets/images/logos/main-logo-light.png", "IBB", "https://ibb.istanbul/", "left-top");
    

    cardVisitContainerUpperBody.appendChild(person)
    cardVisitContainerUpperBody.appendChild(company)

    cardVisitContainer.appendChild(cardVisitBackgroundContainer);
    cardVisitContainer.appendChild(cardVisitContainerUpperBody);
    cardVisitContainer.appendChild(cardVisitContainerLowerBody);

    return cardVisitContainer
}

export default cardvisitContainer