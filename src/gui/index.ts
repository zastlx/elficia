import keybindManager from "keybind/KeybindManager";
import { useState } from "./state";
import { createElement } from "./helper";
import { gui as guiStyles, catagory } from "./styles";


const toggleOpen = useState(false, (open: boolean) => gui.setStyle({ display: open ? "flex" : "none" }));

const gui = createElement("div", { id: "gui", style: guiStyles })
    .appendTo(document.body);

keybindManager.addKeybind("ShiftRight", () => toggleOpen((open) => !open));