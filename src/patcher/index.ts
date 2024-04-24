import { before, instead, after, unpatchAll } from "spitroast";
// @ts-ignore
window.spitroast = { before, instead, after, unpatchAll };
// instead("fetch", window, (args, oFunc) => {
//     if (args[0].includes("log")) return;
//     else return oFunc(args);
// });