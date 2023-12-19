import keybindManager from "keybind/KeybindManager";
import { useState } from "./state";
import { createElement, parseCSSAnimation } from "./helper";
import { slideInFromUp, slideOutToUp, guiIn, gui as guiStyles, catagory as catagoryStyles, catagoryTitle as catagoryTitleStyles, catagoryTitleLine as catagoryTitleLineStyles, catagoryTitleText as catagoryTitleTextStyles } from "./styles";
import config from "config";
import { moduleManager } from "Module/ModuleManager";


const toggleOpenGui = useState(false, (open: boolean) => gui.setStyle({ display: open ? "flex" : "none" }));
const toggleOpenCats = useState(false, (open: boolean) => {
    catagories.forEach((catagory, index) => {
        setTimeout(() => {
            catagory.catagory.setStyle({ display: open ? "flex" : "none" })
        }, index * 100);
    });
});

const gui = createElement("div", { id: "gui", style: guiStyles })
    .appendTo(document.body);
const catagories = config.catagories.map((catagoryName) => {
    const catagory = createElement("div", { id: `catagory-${catagoryName.toLowerCase()}`, style: catagoryStyles }).appendTo(gui.element);
    const catagoryTitle = createElement("div", { style: catagoryTitleStyles }).appendTo(catagory.element);
    const catagoryTitleText = createElement("span", { style: catagoryTitleTextStyles }).setText(catagoryName).appendTo(catagoryTitle.element);
    const catagoryTitleLine = createElement("hr", { style: catagoryTitleLineStyles }).appendTo(catagory.element);

    return {
        catagory: catagory,
        title: catagoryTitle,
        titleText: catagoryTitleText,
        titleLine: catagoryTitleLine
    };
});
const animationsStyle = createElement("style", { style: { display: "none" }, id: "elficia-styles" }).setInnerHtml(parseCSSAnimation([
    {
        name: "guiIn",
        style: guiIn
    },
    {
        name: "slideInFromUp",
        style: slideInFromUp
    },
    {
        name: "slideOutToUp",
        style: slideOutToUp
    }
])).appendTo(document.head);

console.log(catagories, animationsStyle);
keybindManager.addKeybind("ShiftRight", () => {
    const mods = moduleManager.getModules();

    

    toggleOpenGui((open) => !open);
    setTimeout(() => toggleOpenCats((open) => !open), 500 + 100);
});