// ==UserScript==
// @name         putt party fix
// @version      2024-04-23
// @description  gay
// @match        https://945737671223947305.discordsays.com/*
// ==/UserScript==

// go to https://945737671223947305.discordsays.com/versions/Prod-38-CLaa997/index.html

/* eslint-disable */
const startBtn = document.createElement("button");
startBtn.textContent = "Start";
startBtn.onclick = () => {
    startBtn.remove();
	const topLevelImport = (url) => System.import(url);

	const gdiv = document.createElement("canvas");
	gdiv.id = "GameCanvas";
	document.body.appendChild(gdiv);
	canvas = document.getElementById("GameCanvas");
	$p = canvas.parentElement;
	bcr = $p.getBoundingClientRect();
	canvas.width = bcr.width;
	canvas.height = bcr.height;

	topLevelImport("cc").then(async (cc) => {
		await cc.game.init({
			debugMode: cc.DebugMode.INFO,
			settingsPath: "http://localhost:5050/alt/settings.json",
			overrideSettings: {
				profiling: {
					showFPS: true
				}
			}
		});
		cc.game.run()
        fetch("http://localhost:5050/dist/elficia.js").then(a=>a.text()).then(eval)
	});
};

document.body.appendChild(startBtn);