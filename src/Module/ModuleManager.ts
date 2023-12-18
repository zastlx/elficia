import { IModule, IModuleManager, ModuleCatagory, ModuleSettingBool, ModuleSetting, ModuleSettingNumber, ModuleSettingEnum, ModuleSettingString } from "./ModuleManager.types.ts";

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
}

abstract class Module implements IModule {
    public readonly name: string;
    private enabled: boolean = false;
    private readonly description: string;
    private readonly author: string;
    private readonly catagory: ModuleCatagory;
    private settings: (ModuleSetting | ModuleSettingBool | ModuleSettingNumber | ModuleSettingString | ModuleSettingEnum)[] = [];

    constructor(name: string, description: string, author: string, catagory: ModuleCatagory) {
        console.log(`Loading module ${name}`);

        this.name = name;
        this.description = description;
        this.author = author;
        this.catagory = catagory;
    }

    public registerBoolSetting(name: string, description: string, defaultValue: boolean): void {
        this.settings.push({
            name: name,
            description: description,
            currentValue: defaultValue
        } as ModuleSettingBool);
    }

    public registerNumberSetting(name: string, description: string, defaultValue: number, min: number, max: number): void {
        this.settings.push({
            name: name,
            description: description,
            currentValue: defaultValue,
            min: min,
            max: max
        } as ModuleSettingNumber);
    }

    public registerStringSetting(name: string, description: string, defaultValue: string): void {
        this.settings.push({
            name: name,
            description: description,
            currentValue: defaultValue
        } as ModuleSettingString);
    }

    public registerEnumSetting(name: string, description: string, defaultValue: number, values: string[]): void {
        this.settings.push({
            name: name,
            description: description,
            currentValue: defaultValue,
            values: values
        } as ModuleSettingEnum);
    }

    toggleEnabled(enabled?: boolean | undefined): void {
        const doEnable = enabled ?? !this.isEnabled();

        if (doEnable) this.onEnable();
        else this.onDisable();

        this.enabled = doEnable;
    }

    isEnabled(): boolean {
        return this.enabled;
    }

    getSettings(): (ModuleSetting | ModuleSettingBool | ModuleSettingNumber | ModuleSettingString | ModuleSettingEnum)[] {
        return this.settings;
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
 
    abstract getDisplayName(): string;
    abstract onEnable(): void;
    abstract onDisable(): void;

    
}
const moduleManager = new ModuleManager();

export { Module, ModuleManager, moduleManager };