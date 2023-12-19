class KeybindManager {
    private keybinds: { [key: string]: () => void } = {};

    constructor() {
        document.getElementById("GameCanvas")!.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keydown", this.handleKeyDown);
    }

    public addKeybind(key: string, callback: () => void) {
        this.keybinds[key.toLowerCase()] = callback;
    }

    public removeKeybind(key: string) {
        delete this.keybinds[key.toLowerCase()];
    }

    private handleKeyDown = (event: KeyboardEvent) => {
        const key = event.code.toLowerCase();
        this.keybinds[key]?.();
    };

    public destroy() {
        document.getElementById("GameCanvas")!.removeEventListener("keydown", this.handleKeyDown);
        document.removeEventListener("keydown", this.handleKeyDown);
        this.keybinds = {};
    }
}
let keybindManager = new KeybindManager();

//@ts-ignore
window.km = keybindManager;
export default keybindManager;
