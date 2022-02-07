import {createElement} from './utilities';
import {configTechStackLogo} from './config';

const techStackLogo = (props) => {

    const {logoSrc, url} = props;
    const {techStackLogoContainerConfig, techStackLogoConfig } = configTechStackLogo;

    const techStackLogoContainer = createElement(techStackLogoContainerConfig);
    const techStackLogo = createElement({...techStackLogoConfig, src : logoSrc.default});

    techStackLogo.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(url, "_blank");
        techStackLogo.removeEventListener('click', (e) => {
            e.preventDefault();
            window.open(url, "_blank");
        })
    })

    techStackLogoContainer.appendChild(techStackLogo);

    return techStackLogoContainer
}

export default techStackLogo