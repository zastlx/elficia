// ==UserScript==
// @name         putt party fix
// @version      2024-04-23
// @description  real
// @match        https://945737671223947305.discordsays.com/*
// ==/UserScript==

// go to https://945737671223947305.discordsays.com/versions/Prod-38-CLaa997/index.html
// these require you to run `bunx serve . -p 5050` in the root of the project

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
		cc.game.run();
	});
};

const elf = document.createElement("button");
elf.textContent = "Elficia";
elf.style.position = "absolute";
elf.style.top = "0";
elf.style.left = "0";
elf.style.zIndex = "999";

elf.onclick = () => fetch("http://localhost:5050/dist/elficia.js").then(a=>a.text()).then(() => {
    elf.remove();
    fetch("http://localhost:5050/dist/elficia.js").then(a => a.text()).then(eval);
});

document.body.appendChild(elf);
document.body.appendChild(startBtn);