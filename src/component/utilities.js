
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
