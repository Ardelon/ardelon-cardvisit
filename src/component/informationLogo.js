import { createElement } from "./utilities";
import { configInformationLogo } from "./config";

const informationLogo = (logoSrc, url) => {

    const {informationLogoContainerConfig, informationLogoImageConfig} = configInformationLogo;

    const informationLogoContainer = createElement(informationLogoContainerConfig);
    const informationLogoImage = createElement({...informationLogoImageConfig, src : logoSrc});

    informationLogoImage.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(url, "_blank");
        informationLogoImage.removeEventListener('click', (e) => {
            e.preventDefault();
        })
    })

    informationLogoContainer.appendChild(informationLogoImage);

    return informationLogoContainer

}

export default informationLogo