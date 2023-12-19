import { getLocalBall, getScene } from "@api/Scene";
import { Module } from "../../ModuleManager";

class TestModule extends Module {
    constructor() {
        super("TestModule", "A test module", "World", "f")
        this.registerBoolSetting("testBool", "testing", false);
    }

    getDisplayName(): string {
        return "Test Module";
    }

    onEnable(): void {
        if (this.getSettings().get("testBool")?.currentValue) getLocalBall().setPosition(getLocalBall().getPosition().add3f(0, 5, 0));
        this.toggleEnabled(false);
    }

    onDisable(): void {
        console.log("TestModule disabled");
    }

}

export default new TestModule();