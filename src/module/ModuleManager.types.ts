import { Module } from "./ModuleManager";

type IModuleSetting = 
    ModuleSettingBool |
    ModuleSettingNumber |
    ModuleSettingString |
    ModuleSettingEnum;

interface IModule {
    getName(): string;
    getDescription(): string;
    getSettings(): Map<string, IModuleSetting>;
    getCatagory(): ModuleCatagory;
    isEnabled(): boolean;
    toggleEnabled(enabled?: boolean): void;

    registerBoolSetting(name: string, description: string, defaultValue: boolean): void;
    registerNumberSetting(name: string, description: string, defaultValue: number, min: number, max: number): void;
    registerStringSetting(name: string, description: string, defaultValue: string): void;
    registerEnumSetting(name: string, description: string, defaultValue: number, values: string[]): void;

    onEnable(): void;
    onDisable(): void;
    onSettingsUpdate(setting: string): void;
}

interface IModuleManager {
    registerModule(module: Module): void;
    getModule(name: string): Module | undefined;
}

interface ModuleSetting {
    type: "bool" | "number" | "string" | "enum";
    name: string;
    description: string;
}

interface ModuleSettingBool extends ModuleSetting {
    defaultValue: boolean;
    currentValue: boolean;
}

interface ModuleSettingNumber extends ModuleSetting {
    defaultValue: number;
    currentValue: number;
    min: number;
    max: number;
}

interface ModuleSettingString extends ModuleSetting {
    defaultValue: string;
    currentValue: string;
}

interface ModuleSettingEnum extends ModuleSetting {
    defaultValue: number;
    currentValue: number;
    values: string[];
}

type ModuleCatagory = "Visuals" | "World" | "Movement" | "Misc";

export { 
    IModule,
    IModuleManager,
    ModuleSetting,
    ModuleSettingBool,
    ModuleSettingNumber,
    ModuleSettingString,
    ModuleSettingEnum,
    ModuleCatagory,
    IModuleSetting
};