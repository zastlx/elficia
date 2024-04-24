import { moduleManager } from "./module/ModuleManager";
import "./patcher/index";
import "./gui/index";
import { FPSUnlocker } from "@modules/index";

moduleManager.registerModule(FPSUnlocker);

// @ts-ignore
window.mm = moduleManager;