
import { Module } from "../../ModuleManager";
import { getGameManager } from "@api/Game";
import cocos from "@api/cocos";
import { ModuleSettingBool, ModuleSettingNumber } from "module/ModuleManager.types";
import { after } from "spitroast";
import { unpatch } from "spitroast/dist/types/unpatch";

enum GameState {
    Init = 0,
    GameplayModeSelect = 1,
    CourseSelect = 2,
    Play = 3,
    WaitToCompleteHole = 4,
    TournamentSelect = 5,
    TournamentWait = 6,
    TournamentOver = 7
}

class FPSUnlockedModule extends Module {
    constructor() {
        super("FPSUnlocker", "A way to unlock or limit your FPS", "Misc")
        this.registerNumberSetting("FPS", "Set your default maximum game FPS", 60, 0, 500);
        this.registerNumberSetting("Menu FPS", "Set your FPS when the game is in ANY menu (e.g Map Voting, Game Mode Selection, etc...), this is chosen over FPS", 25, 0, 500);
        this.registerBoolSetting("Infinite FPS", "Unlock your FPS fully, ignores all other values", false);
    }
    // @ts-ignore it gets angy
    currentGameState: number = getGameManager().getChildByName("GolfMode")!.getComponent("GolfMode")!.gameState ?? -1;
    unpatch: (() => boolean) | undefined;

    updateFPS(): void {
        // incase i fail cleanup
        if (!this.isEnabled()) return;

        // i dont reasonably see anyones computer being able to handle above this \_(;-;)_/
        if ((this.getSettings().get("Infinite FPS") as ModuleSettingBool).currentValue) return cocos().game.setFrameRate(99999);
        if (!document.hasFocus()) return cocos().game.setFrameRate((this.getSettings().get("Unfocused FPS") as ModuleSettingNumber)?.currentValue);
            
        switch (this.currentGameState) {
            case GameState.Init:
            case GameState.GameplayModeSelect:
            case GameState.CourseSelect:
            case GameState.TournamentSelect:
            case GameState.TournamentWait:
            case GameState.TournamentOver:
                cocos().game.setFrameRate((this.getSettings().get("Menu FPS") as ModuleSettingNumber)?.currentValue);
                break;
            case GameState.WaitToCompleteHole:
            case GameState.Play:
                cocos().game.setFrameRate((this.getSettings().get("FPS") as ModuleSettingNumber)?.currentValue);
                break;
            default:
                console.warn("Unknown game state, setting to focused FPS")
                cocos().game.setFrameRate((this.getSettings().get("FPS") as ModuleSettingNumber)?.currentValue);
                break;
        }
    }

    getDisplayName(): string {
        return `FPS Unlocker | ${this.getSettings().get("Infinite FPS")?.currentValue ? "Infinite" : this.getSettings().get("FPS")?.currentValue} FPS`
    }

    onEnable(): void {
        this.updateFPS();
        this.unpatch = after("SendCurrentState", getGameManager().getChildByName("GolfMode")!.getComponent("GolfMode"), (args) => {
            this.currentGameState = args[0];
            this.updateFPS();
        });
    }

    onDisable(): void {
        cocos().game.setFrameRate(60);
        if (this.unpatch) this.unpatch();
    }

    onSettingsUpdate(setting: string): void {
        this.updateFPS();
    }
}

export default new FPSUnlockedModule();