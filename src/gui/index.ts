import keybindManager from "keybind/KeybindManager";
import { useState } from "./state";
import { createElement, parseCSSAnimation } from "./helper";
import { moduleContainer as moduleContainerStyles, slideInFromUp, slideOutToUp, guiIn, gui as guiStyles, catagory as catagoryStyles, catagoryTitle as catagoryTitleStyles, catagoryTitleLine as catagoryTitleLineStyles, catagoryTitleText as catagoryTitleTextStyles, moduleContainer } from "./styles";
import config from "config";


const toggleOpenGui = useState(false, (open: boolean) => gui.setStyle("display", open ? "flex" : "none"));
const toggleOpenCats = useState(false, (open: boolean) => {
    catagories.forEach((catagory, index) => {
        if (!open) catagory.catagory.setStyle("opacity", "0");
        catagory.catagory.setStyle("display", open ? "flex" : "none");
    });
});

const gui = createElement("div", { id: "gui", style: guiStyles })
    .appendTo(document.body);
const catagories = config.catagories.map((catagoryName, index) => {
    const catagory = createElement("div", { id: `catagory-${catagoryName.toLowerCase()}`, style: {
        ...catagoryStyles,
        animationDelay: `${index * 100}ms`
    } }).appendTo(gui.element);
    const catagoryTitle = createElement("div", { style: catagoryTitleStyles }).appendTo(catagory.element);
    const catagoryTitleText = createElement("span", { style: catagoryTitleTextStyles }).setText(catagoryName).appendTo(catagoryTitle.element);
    const catagoryTitleLine = createElement("hr", { style: catagoryTitleLineStyles }).appendTo(catagory.element);
    const catagoryModuleContainer= createElement("div", { style: moduleContainerStyles }).appendTo(catagory.element);

    return {
        catagory: catagory,
        title: catagoryTitle,
        titleText: catagoryTitleText,
        titleLine: catagoryTitleLine,
        moduleContainer: catagoryModuleContainer
    };
});
const animationsStyle = createElement("style", { style: { display: "none" }, id: "elficia-styles" }).setInnerHtml("@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');".concat(`* { font-family: 'VT323', monospace; };`).concat(parseCSSAnimation([
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
]))).appendTo(document.head);

console.log(catagories, animationsStyle);
keybindManager.addKeybind("ShiftRight", () => {
    toggleOpenGui((open) => !open);
    toggleOpenCats((open) => !open)
});

export { gui, catagories, animationsStyle };