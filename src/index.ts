import { moduleManager } from "./module/ModuleManager";
import "./patcher/index";
import "./gui/index";
import { FPSUnlocker, RemoveFatasses } from "@modules/index";

moduleManager.registerModule(FPSUnlocker);
moduleManager.registerModule(RemoveFatasses)

// @ts-ignore
window.mm = moduleManager;