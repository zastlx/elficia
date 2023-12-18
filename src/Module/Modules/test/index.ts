import { getScene } from "@api/Scene";
import { Module } from "../../ModuleManager";

class TestModule extends Module {
    constructor() {
        super("TestModule", "A test module", "Elficia", "World")
    }

    getDisplayName(): string {
        return "Test Module";
    }

    onEnable(): void {
        console.log(getScene());
    
    }

    onDisable(): void {
        console.log("TestModule disabled");
    }

}

export default new TestModule();