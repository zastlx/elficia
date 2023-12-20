import { gui, catagories } from "./index";
import { IElement, createElement } from "./helper";
import { Module } from "Module/ModuleManager";
import { module as moduleStyles, moduleName as moduleNameStyles } from "./styles";

interface IGUIManager {

    registerModule(module: Module): void;
    removeModule(name: string): void;
    render(): void;
}

class GUIManager implements IGUIManager {
    private modules: Module[] = [];
    private moduleElements: {
        catagory: string;
        element: {
            module: IElement;
            moduleTitle: IElement;
        };
    }[] = [];

    constructor() {
        console.log("Initlizing GUIManager");
    }

    public registerModule(module: Module): void {
        this.modules.push(module);
        this.render();
    }
    public removeModule(name: string): void {
        this.modules = this.modules.filter(m => m.name !== name);
        this.render();
    }
    render() {
        console.log("Rendering GUI");

        for (const catagory of catagories) {
            catagory.moduleContainer.setInnerHtml("");
        }
        for (const module of this.modules) {
            const catagory = catagories.find(c => c.catagory.element.id.split("-")[1] === module.getCatagory().toLowerCase());
            if (!catagory) {
                console.error(`Could not find catagory ${module.getCatagory()} for module ${module.name}`);
                continue;
            }

            const moduleElement = createElement("div", { style: moduleStyles })
                .setId(`module-${module.getCatagory().toLowerCase()}-${module.name}`)
                .appendTo(catagory.moduleContainer.element);

            const moduleTitleElement = createElement("span", { style: moduleNameStyles })
                .setText(module.name)
                .appendTo(moduleElement.element);

            this.moduleElements.push({
                catagory: module.getCatagory().toLowerCase(),
                element: {
                    module: moduleElement,
                    moduleTitle: moduleTitleElement
                }
            });
        }
    }
}

const guiManager = new GUIManager();
// @ts-ignore
window.gm = guiManager;
export { guiManager };