import { IModuleSetting } from "module/ModuleManager.types";
import { Module } from "../../ModuleManager";

class FPSUnlockedModule extends Module {
    constructor() {
        super("FPSUnlocker", "A way to unlock or limit your FPS", "Misc")
        this.registerNumberSetting("Focused FPS", "Set your FPS when the game is focused", 60, 0, 1000);
        this.registerNumberSetting("Unfocused FPS", "Set your FPS when the game is unfocused", 25, 0, 1000);
        this.registerBoolSetting("Infinite FPS", "Unlock your FPS", false);
    }

    getDisplayName(): string {
        return "FPSUnlocker";
    }

    onEnable(): void {
        console.log(this.getSettings().get("Infinite FPS")?.currentValue);
    }

    onDisable(): void {
        console.log(this.getSettings().get("Infinite FPS")?.currentValue);
    }

    onSettingsUpdate(setting: string): void {
    }
}

export default new FPSUnlockedModule();