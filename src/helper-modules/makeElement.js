// Allows for one line element creation with tag, content and attributes

export default function makeEl(type, innerHTML, attr) {
    let element = document.createElement(type);
    element.innerHTML = innerHTML || null
    if (attr) {
        for (let a in attr) element.setAttribute(a, attr[a])
    }

    return element;
}
