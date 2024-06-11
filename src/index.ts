import { moduleManager } from "./module/ModuleManager";
import "./patcher/index";
import "./gui/index";
import { FPSUnlocker, RemoveFatasses, AutoWin } from "@modules/index";

moduleManager.registerModule(FPSUnlocker);
moduleManager.registerModule(RemoveFatasses)
moduleManager.registerModule(AutoWin);

// @ts-ignore
window.mm = moduleManager;