import { gui, catagories } from "./index";
import { IElement, createElement } from "./helper";
import { Module } from "Module/ModuleManager";
import { moduleDescription as moduleDescriptionStyles, module as moduleStyles, moduleName as moduleNameStyles } from "./styles";

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
    private moduleDescription: IElement;

    constructor() {
        console.log("Initlizing GUIManager");

        this.moduleDescription = createElement("div", { id: "mod-desc", style: {
                ...moduleDescriptionStyles,
                display: "none"
            } })
            .setId("module-description")
            .appendTo(gui.element);
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
                .onHover((hovering) => {
                    if (hovering) {
                        this.moduleDescription.setText(module.getDescription());
                        this.moduleDescription.setStyle("display", "flex");
                        moduleElement.setStyle("backgroundImage", "");
                        moduleElement.setStyle("backgroundColor", "rgba(151, 69, 245, 0.5)");
                    } else {
                        this.moduleDescription.setText("");
                        this.moduleDescription.setStyle("display", "none");
                        if (module.isEnabled()) {
                            moduleElement.setStyle("backgroundImage", "linear-gradient(90deg, #9745f5, black)");
                            moduleElement.setStyle("backgroundColor", "");
                        }
                        else {
                            moduleElement.setStyle("backgroundImage", "");
                            moduleElement.setStyle("backgroundColor", "");
                        }
                    }
                })
                .onClick(() => {
                    module.toggleEnabled();
                    moduleElement.setStyle("backgroundImage", module.isEnabled() ? "inear-gradient(90deg, #9745f5, black)" : "");
                })
                .appendTo(catagory.moduleContainer.element)

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