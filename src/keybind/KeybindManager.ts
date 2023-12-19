class KeybindManager {
    private keybinds: { [key: string]: () => void } = {};

    constructor() {
        document.getElementById("GameCanvas")!.addEventListener('keydown', this.handleKeyDown);
    }

    public addKeybind(key: string, callback: () => void) {
        this.keybinds[key] = callback;
    }

    public removeKeybind(key: string) {
        delete this.keybinds[key];
    }

    private handleKeyDown = (event: KeyboardEvent) => {
        console.log(event.key);
        const key = event.key.toLowerCase();
        if (this.keybinds[key]) {
            this.keybinds[key]();
        }
    };
}
let keybindManager = new KeybindManager();

//@ts-ignore
window.km = keybindManager;
export default keybindManager;
