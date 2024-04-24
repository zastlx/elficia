import { before, instead, after, unpatchAll } from "spitroast";
// @ts-ignore
window.spitroast = { before, instead, after, unpatchAll };

export { before, instead, after, unpatchAll };