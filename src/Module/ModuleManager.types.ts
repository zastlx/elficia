import { Module } from "./ModuleManager";

interface IModule {
    getName(): string;
    getDescription(): string;
    getSettings(): ModuleSetting[];
    getCatagory(): ModuleCatagory;
    isEnabled(): boolean;
    toggleEnabled(enabled?: boolean): void;

    registerBoolSetting(name: string, description: string, defaultValue: boolean): void;
    registerNumberSetting(name: string, description: string, defaultValue: number, min: number, max: number): void;
    registerStringSetting(name: string, description: string, defaultValue: string): void;
    registerEnumSetting(name: string, description: string, defaultValue: number, values: string[]): void;

    onEnable(): void;
    onDisable(): void;
}

interface IModuleManager {
    registerModule(module: Module): void;
    getModule(name: string): Module | undefined;
}

interface ModuleSetting {
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

type ModuleCatagory = "Combat" | "Movement" | "Player" | "Render" | "World";

export { 
    IModule,
    IModuleManager,
    ModuleSetting,
    ModuleSettingBool,
    ModuleSettingNumber,
    ModuleSettingString,
    ModuleSettingEnum,
    ModuleCatagory
};