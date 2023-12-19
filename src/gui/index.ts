import keybindManager from "keybind/KeybindManager";
import { useState } from "./state";
import { createElement, parseCSSAnimation } from "./helper";
import { slideInFromUp, slideOutToUp, guiIn, gui as guiStyles, catagory as catagoryStyles, catagoryTitle as catagoryTitleStyles, catagoryTitleLine as catagoryTitleLineStyles, catagoryTitleText as catagoryTitleTextStyles } from "./styles";
import config from "config";


const toggleOpenGui = useState(false, (open: boolean) => gui.setStyle({ display: open ? "flex" : "none" }));
const toggleOpenCats = useState(false, (open: boolean) => catagories.forEach((catagory) => catagory.catagory.setStyle({ display: open ? "flex" : "none" })));

const gui = createElement("div", { id: "gui", style: guiStyles })
    .appendTo(document.body);
const catagories = config.catagories.map((catagoryName) => {
    const catagory = createElement("div", { id: `catagory-${catagoryName.toLowerCase()}`, style: catagoryStyles }).appendTo(gui.element);
    const catagoryTitle = createElement("div", { style: catagoryTitleStyles }).appendTo(catagory.element);
    const catagoryTitleText = createElement("span", { style: catagoryTitleTextStyles }).setText(catagoryName).appendTo(catagoryTitle.element);
    const catagoryTitleLine = createElement("div", { style: catagoryTitleLineStyles }).appendTo(catagory.element);

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
    toggleOpenGui((open) => !open);
    // add 100 to the timeout to make sure the animation is done for slower computers
    setTimeout(() => toggleOpenCats((open) => !open), 500 + 100);
});