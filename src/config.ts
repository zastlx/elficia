import { moduleManager } from "Module/ModuleManager";

export default {
    catagories: [
        "Visuals",
        "World",
        "Movement",
        "Misc",
    ],
    githubUrl: "https://github.com/zastlx/elficia",
    authors: [{
        name: "zastix",
        url: "https://zastix.club/"
    }],
    version: "0.0.0",
    versionType: "alpha",
    keybinds: localStorage.getItem("keybinds") ? JSON.parse(localStorage.getItem("keybinds")!) : [
        {
            key: "ShiftRight",
            callback: () => moduleManager.toggleModule("ClickGUI")
        }
    ]
}