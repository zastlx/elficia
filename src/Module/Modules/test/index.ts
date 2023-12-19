import { getLocalBall, getScene } from "@api/Scene";
import { Module } from "../../ModuleManager";

class TestModule extends Module {
    constructor() {
        super("TestModule", "A test module", "Elficia", "World", "f")
    }

    getDisplayName(): string {
        return "Test Module";
    }

    onEnable(): void {
        getLocalBall().setPosition(getLocalBall().getPosition().add3f(0, 5, 0));
    }

    onDisable(): void {
        console.log("TestModule disabled");
    }

}

export default new TestModule();