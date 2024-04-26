import { Module } from "../../ModuleManager";
import { getScene } from "@api/Scene";

class EjectModule extends Module {
    constructor() {
        super("RemoveFatasses", "Removes all the large dancing creatures from the current map (client-sided)", "World")
    }

    getDisplayName(): string {
        return "RemoveFatasses";
    }

    onEnable(): void {
        // for some reason they are located in a different positions in the node tree depending on the map ???? discord stupid
        try {
            getScene().getChildByName("LevelCharacters")?.setScale(0,0,0)
            // most maps seem to do this
            getScene().getChildByName("Level")?.getChildByName("Level_Characters")?.setScale(0,0,0);
            // Jumpington
            getScene().getChildByName("Level")?.getChildByName("Levels_Characters")?.setScale(0,0,0);
        } catch (error) {
            console.error("Failed to remove fatasses", error)
        }
    }

    onDisable(): void {
        try {
            getScene().getChildByName("LevelCharacters")?.setScale(1,1,1)
            getScene().getChildByName("Level")?.getChildByName("Level_Characters")?.setScale(1,1,1);
            getScene().getChildByName("Level")?.getChildByName("Levels_Characters")?.setScale(1,1,1);
        } catch (error) {
            console.error("Failed to add fatasses", error)
        }
    }

    onSettingsUpdate(setting: string): void {
    }
}

export default new EjectModule();