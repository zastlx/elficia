import { moduleManager } from "./Module/ModuleManager";
import { testModule } from "@modules/index";

moduleManager.registerModule(testModule);

// @ts-ignore
window.mm = moduleManager;