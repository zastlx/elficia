// @ts-nocheck
const BlooketAntiCheatBypass = () => {
    let herbert = {
        walter: window.document.querySelector,
        barb: window.document.getElementsByTagName
    };
    let william = ["querySelector", "getElementsByTagName"];
    william.forEach(x => window.document[x] = (...args) => {
        if (args[0].toLowerCase().startsWith("iframe")) return;
        else return herbert[Object.keys(herbert)[william.indexOf(x)]].apply(window, args);
    });

    var ix = document.createElement('iframe');
    ix.style.display = 'none';
    document.body.appendChild(ix);
    Object.assign(window.console, ix.contentWindow.window.console);
}

export default BlooketAntiCheatBypass;