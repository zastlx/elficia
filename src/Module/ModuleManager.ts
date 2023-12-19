import keybindManager from "keybind/KeybindManager";
import { IModuleSetting, IModule, IModuleManager, ModuleCatagory, ModuleSettingBool, ModuleSetting, ModuleSettingNumber, ModuleSettingEnum, ModuleSettingString } from "./ModuleManager.types.ts";

class ModuleManager implements IModuleManager {
    private modules: Module[] = [];

    constructor() {
        console.log("Initlizing ModuleManager");
    }

    public registerModule(module: Module): void {
        this.modules.push(module);
    }

    public getModule(name: string): Module | undefined {
        return this.modules.find(m => m.name === name);
    }

    public toggleModule(name: string, enabled?: boolean): void {
        const module = this.getModule(name);
        if (!module) return;
        module.toggleEnabled(enabled);
    }

    public getModules(): Module[] {
        return this.modules;
    }
}

abstract class Module implements IModule {
    public readonly name: string;
    private enabled: boolean = false;
    private readonly description: string;
    private readonly catagory: ModuleCatagory;
    public keybind: string | undefined;
    private settings: Map<string, IModuleSetting> = new Map();

    constructor(name: string, description: string, catagory: ModuleCatagory, keybind?: string) {
        console.log(`Loading module ${name}`);

        this.name = name;
        this.description = description;
        this.catagory = catagory;
        this.setKeybind(keybind ?? "");
    }

    public registerBoolSetting(name: string, description: string, defaultValue: boolean): void {
        // this.settings.push({
        //     name: name,
        //     description: description,
        //     currentValue: defaultValue
        // } as ModuleSettingBool);

        this.settings.set(name, {
            description: description,
            currentValue: defaultValue
        } as ModuleSettingBool);
    }

    public registerNumberSetting(name: string, description: string, defaultValue: number, min: number, max: number): void {
        // this.settings.push({
        //     name: name,
        //     description: description,
        //     currentValue: defaultValue,
        //     min: min,
        //     max: max
        // } as ModuleSettingNumber);

        this.settings.set(name, {
            description: description,
            currentValue: defaultValue,
            min: min,
            max: max
        } as ModuleSettingNumber);
    }

    public registerStringSetting(name: string, description: string, defaultValue: string): void {
        // this.settings.push({
        //     name: name,
        //     description: description,
        //     currentValue: defaultValue
        // } as ModuleSettingString);

        this.settings.set(name, {
            description: description,
            currentValue: defaultValue
        } as ModuleSettingString);
    }

    public registerEnumSetting(name: string, description: string, defaultValue: number, values: string[]): void {
        // this.settings.push({
        //     name: name,
        //     description: description,
        //     currentValue: defaultValue,
        //     values: values
        // } as ModuleSettingEnum);

        this.settings.set(name, {
            description: description,
            currentValue: defaultValue,
            values: values
        } as ModuleSettingEnum);
    }

    toggleEnabled(enabled?: boolean): void {
        const shouldEnable = enabled ?? !this.isEnabled();
        this.enabled = shouldEnable;

        if (shouldEnable) this.onEnable();
        else this.onDisable();
    }

    isEnabled(): boolean {
        return this.enabled;
    }

    getSettings(): Map<string, IModuleSetting> {
        return this.settings;
    }

    setSetting(name: string, value: boolean | string | number ): void {
        const setting = this.settings.get(name);
        if (!setting) return;
        setting.currentValue = value;
    }

    getCatagory(): ModuleCatagory {
        return this.catagory;
    }

    getDescription(): string {
        return this.description;
    }

    getName(): string {
        return this.name;
    }

    setKeybind(keybind: string): void {
        this.keybind = keybind;
        keybindManager.removeKeybind(this.keybind ?? "");
        keybindManager.addKeybind(keybind, () => this.toggleEnabled());
    }
 
    abstract getDisplayName(): string;
    abstract onEnable(): void;
    abstract onDisable(): void;

    
}
const moduleManager = new ModuleManager();

export { Module, ModuleManager, moduleManager };