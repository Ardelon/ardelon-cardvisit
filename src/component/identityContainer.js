import { createElement, creteElement } from './utilities';
import { configIdentityContainer } from './config';

const identity = (logoSrc, description, url = "", containerClass = "dumy-class") => {

    const {identityContainerConfig, identityContainerLogoContainerConfig, identityContainerLogoConfig, identityContainerDescriptionConfig} = configIdentityContainer

    const identityContainer = createElement(identityContainerConfig);
    const identityContainerLogoContainer = createElement(identityContainerLogoContainerConfig)
    const identityContainerLogo = createElement({...identityContainerLogoConfig, src : logoSrc});
    const identityContainerDescription = createElement({...identityContainerDescriptionConfig, innerText : description});

    identityContainer.classList.add(containerClass);

    identityContainerLogo.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(url, "_blank");
        identityContainerLogo.removeEventListener('click', (e) => {
            e.preventDefault();
            window.open(url, "_blank");
        });
    })

    identityContainerLogoContainer.appendChild(identityContainerLogo);

    identityContainer.appendChild(identityContainerLogoContainer);
    identityContainer.appendChild(identityContainerDescription);

    return identityContainer
}

export default identity