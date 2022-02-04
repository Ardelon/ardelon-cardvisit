import { createElement } from "./utilities";
import { configInformationContainer } from "./config";
import informationLogo from "./informationLogo";
import * as github from '../assets/images/github.png'
import * as linkedin from '../assets/images/linkedin.png';
import * as webStore from '../assets/images/webStore.png';

const information = () => {
    
    const {informationContainerConfig, informationContainerNameConfig, informationContainerMailConfig, informationContainerAddressConfig, informationContainerSocialMediaContainerConfig} = configInformationContainer;

    const informationContainer = createElement(informationContainerConfig);
    const informationContainerName = createElement(informationContainerNameConfig);
    const informationContainerMail = createElement(informationContainerMailConfig);
    const informationContainerAddress = createElement(informationContainerAddressConfig)
    const informationContainerSocialMediaContainer = createElement(informationContainerSocialMediaContainerConfig);

    const socialMediaList = [
        {logoSrc : github.default, url : "https://www.github.com/ardelon"},
        {logoSrc : linkedin.default, url : "https://www.linkedin.com/in/alihankeskin/"},
        {logoSrc : webStore.default, url : "https://chrome.google.com/webstore/detail/tab-tracker/effjhkgfakdenmlpfeadfcdofghpffki?hl=tr&authuser=0"},

    ];


    socialMediaList.forEach(socialMedia => {
        informationContainerSocialMediaContainer.appendChild(informationLogo(socialMedia.logoSrc, socialMedia.url));
    })

    informationContainer.appendChild(informationContainerName);
    informationContainer.appendChild(informationContainerMail);
    informationContainer.appendChild(informationContainerAddress);
    informationContainer.appendChild(informationContainerSocialMediaContainer);

    return informationContainer;
}

export default information