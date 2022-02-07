import * as javascriptLogo from '../assets/logo/javascript.png';
import * as nodeJsLogo from '../assets/logo/nodejs.png';
import * as reactLogo from '../assets/logo/react.png';
import * as htmlLogo from '../assets/logo/html.png';
import * as cssLogo from '../assets/logo/css.png';
import * as webpackLogo from '../assets/logo/webpack.png';
import * as redisLogo from '../assets/logo/redis.png';
import * as gitLogo from '../assets/logo/git.png';
import * as sassLogo from '../assets/logo/sass.png';
import * as bashLogo from '../assets/logo/bash.png';


export const createElement = (config) => {
    const {id,classList = [], type = 'div',innerText,innerHTML, src, contentEditable,row, options,optionValues,multiple,size, placeholder} = config

    const container = document.createElement(type);
    id              ? container.id = id                                                     : '';
    classList       ? classList.forEach(className => {container.classList.add(className)})  : '';
    innerText       ? container.innerText = innerText                                       : '';
    innerHTML       ? container.innerHTML = innerHTML                                       : '';
    src             ? container.src = src                                                   : '';
    contentEditable ? container.contentEditable = contentEditable                           : '';
    row             ? container.row = row                                                   : '';
    multiple        ? container.multiple = multiple                                         : '';
    size            ? container.size = size                                                 : '';
    placeholder     ? container.placeholder = placeholder                                   : '';

    if (options) {
        options.forEach((value, index) => {
            let option = document.createElement('option');
            optionValues ? option.value = optionValues[index] : option.value = value;            
            option.innerText = value;
            container.appendChild(option);
        })
    }

    return container;
}

export const techStack = [
    {
        name : 'Javascript',
        logoSrc : javascriptLogo,
        url : 'https://www.javascript.com/'

    }, {
        name : 'Node.js',
        logoSrc : nodeJsLogo,
        url : 'https://nodejs.org/en/'
    }, {
        name : 'React',
        logoSrc : reactLogo,
        url : 'https://reactjs.org/'
    }, {
        name : 'HTML',
        logoSrc : htmlLogo,
        url : 'https://html.com/'
    }, {
        name : 'CSS',
        logoSrc : cssLogo,
        url : 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    }, {
        name : 'Webpack',
        logoSrc : webpackLogo,
        url : 'https://webpack.js.org/'
    }, {
        name : 'Redis',
        logoSrc : redisLogo,
        url : 'https://redis.io/'
    }, {
        name : 'Git',
        logoSrc : gitLogo,
        url : 'https://git-scm.com/'
    }, {
        name : 'Sass',
        logoSrc : sassLogo,
        url : 'https://sass-lang.com/'
    }, {
        name : 'Bash',
        logoSrc : bashLogo,
        url : 'https://en.wikipedia.org/wiki/Bash_(Unix_shell)'
    }
]