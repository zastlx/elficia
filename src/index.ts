import { moduleManager } from "./module/ModuleManager";
import { testModule } from "@modules/index";
import "./gui/index";
moduleManager.registerModule(testModule);
moduleManager.registerModule(testModule);


// @ts-ignore
window.mm = moduleManager;