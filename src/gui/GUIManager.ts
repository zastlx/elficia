import { gui, catagories } from "./index";
import { IElement, createElement, createCssFromObjects } from "./helper";
import { Module } from "Module/ModuleManager";
import * as styles from "./styles";

interface IGUIManager {
    registerModule(module: Module): void;
    removeModule(name: string): void;
    render(): void;
}
// this is probably the most messy code ive ever written but it works and i aint using react
class GUIManager implements IGUIManager {
    private modules: Module[] = [];
    private moduleElements: {
        catagory: string;
        element: {
            module: IElement;
            moduleTitleContainer: IElement;
            moduleTitle: IElement;
            moduleTitleOpenIndicator: IElement;
            moduleSettingsContainer: IElement;
            moduleSettingsElements: IElement[];
        };
    }[] = [];
    private moduleDescription: IElement;

    constructor() {
        console.log("Initlizing GUIManager");
        const guiStyle = createElement("style", { style: { display: "none" }, id: "elficia-styles-settings" })
            .setInnerHtml(createCssFromObjects(styles.sliderSettingStyles))
            .appendTo(document.head);

        this.moduleDescription = createElement("div", { id: "mod-desc", style: {
                ...styles.moduleDescription,
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

            let settingsOpen = false;

            const moduleSettingOpenIndicator = createElement("span", { style: {
                position: "absolute",
                fontSize: "4vh",
                left: "85%"
            } })
            .setText("+");
            const moduleNameElementContainer = createElement("div", { style: {
                ...styles.moduleNameContainer,
                flexDirection: "row",
                alignItems: "center",
            } })
                .onHover((hovering) => {
                    if (hovering) {
                        this.moduleDescription.setText(module.getDescription());
                        this.moduleDescription.setStyle("display", "flex");
                        moduleNameElementContainer.setStyle("backgroundImage", "");
                        moduleNameElementContainer.setStyle("backgroundColor", "rgba(151, 69, 245, 0.5)");
                    } else {
                        this.moduleDescription.setText("");
                        this.moduleDescription.setStyle("display", "none");
                        if (module.isEnabled()) {
                            moduleNameElementContainer.setStyle("backgroundImage", "linear-gradient(90deg, #9745f5, black)");
                            moduleNameElementContainer.setStyle("backgroundColor", "");
                        }
                        else {
                            moduleNameElementContainer.setStyle("backgroundImage", "");
                            moduleNameElementContainer.setStyle("backgroundColor", "");
                        }
                    }
                })
                .onClick(() => {
                    module.toggleEnabled();
                    if (module.isEnabled()) {
                        moduleNameElementContainer.setStyle("backgroundImage", "linear-gradient(90deg, #9745f5, black)");
                        moduleNameElementContainer.setStyle("backgroundColor", "");
                    }
                    else {
                        moduleNameElementContainer.setStyle("backgroundImage", "");
                        moduleNameElementContainer.setStyle("backgroundColor", "");
                    }
                })
                .onRightClick(() => {
                    if (settingsOpen) {
                        moduleSettingOpenIndicator.setText("+");
                        moduleSettingsContainer.setStyle("display", "none");
                        settingsOpen = false;
                    } else {
                        moduleSettingOpenIndicator.setText("-");
                        moduleSettingsContainer.setStyle("display", "flex");
                        settingsOpen = true;
                    }
                });
            const moduleNameElement = createElement("span", {})
                .setText(module.name)
                .appendTo(moduleNameElementContainer.element);
            const moduleElement = createElement("div", { style: styles.module })
                .setId(`module-${module.getCatagory().toLowerCase()}-${module.name}`)
                .appendTo(catagory.moduleContainer.element);
            moduleNameElementContainer.appendTo(moduleElement.element);
            const moduleSettingsContainer = createElement("div", { style: styles.moduleSettingsContainer })
                .appendTo(moduleElement.element);
            
            moduleSettingOpenIndicator.appendTo(moduleNameElementContainer.element);

            const moduleSettingsElements: IElement[] = [];
            
            const testSliderSetting = createElement("div", { style: styles.sliderModuleSetting })
                .appendTo(moduleSettingsContainer.element);
            const testSliderSettingTitle = createElement("span", { style: {} })
                .setText("Slider:");
            const testSliderSettingSliderContainer = createElement("div", { style: styles.sliderModuleSettingSliderContainer });
            const testSliderSettingSlider = createElement("input", { style: styles.sliderModuleSettingSliderInput }, { type: "range", min: "0", max: "100", value: "50" });
        
            testSliderSettingTitle.appendTo(testSliderSetting.element);
            testSliderSettingSliderContainer.appendTo(testSliderSetting.element);
            testSliderSettingSlider.appendTo(testSliderSettingSliderContainer.element);
            moduleSettingsElements.push(testSliderSetting);


            this.moduleElements.push({
                catagory: module.getCatagory().toLowerCase(),
                element: {
                    module: moduleElement,
                    moduleTitleContainer: moduleNameElementContainer,
                    moduleTitle: moduleNameElement,
                    moduleTitleOpenIndicator: moduleSettingOpenIndicator,
                    moduleSettingsContainer: moduleSettingsContainer,
                    moduleSettingsElements: moduleSettingsElements
                }
            });
        }
    }
}

const guiManager = new GUIManager();
// @ts-ignore
window.gm = guiManager;
export { guiManager };