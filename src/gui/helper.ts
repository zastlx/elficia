interface createElementOptions {
    className?: string;
    id?: string;
    style?: Partial<CSSStyleDeclaration>;
}

interface IElement {
    element: Element;
    
    setStyle(key: string, value: string): IElement;
    setClass(className: string): IElement;
    setText(text: string): IElement;
    setInnerHtml(html: string): IElement;
    setId(id: string): IElement;
    appendTo(element: Element): IElement;
}

type elementTypes = "div" | "span" | "button" | "input" | "textarea" | "h1" | "style" | "hr";

const createElement = (type: elementTypes, options: createElementOptions): IElement => {
    const element = document.createElement(type);
    if (options.className) element.className = options.className;
    if (options.id) element.id = options.id;
    if (options.style) Object.assign(element.style, options.style);

    return {
        setStyle(thingyy, value) {
            // @ts-ignore idek whats wrong
            element.style[thingyy] = value;
            return this;
        },
        setClass(className) {
            element.className = className;
            return this;
        },
        setId(id) {
            element.id = id;
            return this;
        },
        appendTo(target) {
            target.appendChild(element);
            return this;
        },
        setText(text) {
            element.textContent = text;
            return this;
        },
        setInnerHtml(html) {
            element.innerHTML = html;
            return this;
        },
        get element() {
            return element;
        }
    };
};

const parseCSSAnimation = (animationObjects: {
    name: string;
    style: any;
}[]): string => {
    let cssString = '';

    animationObjects.forEach((animationObject, index) => {
        cssString += `@keyframes ${animationObject.name} {\n`;

        for (const key in animationObject.style) {
            cssString += `${key} {\n`;
            for (const property in animationObject.style[key]) {
                cssString += `    ${property}: ${animationObject.style[key][property]};\n`;
            }
            cssString += '}\n';
        }

        cssString += '}\n';
    });

    return cssString;
}


export { createElement, parseCSSAnimation };