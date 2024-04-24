import { IModuleSetting } from "module/ModuleManager.types";
import { Module } from "../../ModuleManager";

class EjectModule extends Module {
    constructor() {
        super("Eject", "Eject Elficia", "Misc")
    }

    getDisplayName(): string {
        return "Panic";
    }

    onEnable(): void {
        // do this eventually
    }

    onDisable(): void {
    }

    onSettingsUpdate(setting: string): void {
        
    }
}

export default new EjectModule();