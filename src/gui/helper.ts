interface createElementOptions {
    className?: string;
    id?: string;
    style?: Partial<CSSStyleDeclaration>;
}

interface IElement {
    element: Element;
    
    setStyle(style: Partial<CSSStyleDeclaration>): IElement;
    setClass(className: string): IElement;
    setId(id: string): IElement;
    appendTo(element: Element): IElement;
}

type elementTypes = "div" | "span" | "button" | "input" | "textarea" | "h1";

const createElement = (type: elementTypes, options: createElementOptions): IElement => {
    const element = document.createElement(type);
    if (options.className) element.className = options.className;
    if (options.id) element.id = options.id;
    if (options.style) Object.assign(element.style, options.style);

    return {
        setStyle(style) {
            Object.assign(element.style, style);
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
        get element() {
            return element;
        }
    };
};


export { createElement };