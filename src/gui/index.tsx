const gui = document.createElement("div");
gui.id = "gui";

gui.style.position = "absolute";
gui.style.top = "0";
gui.style.left = "0";
gui.style.width = "100%";
gui.style.height = "100%";
gui.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
gui.style.display = "none";
gui.style.backdropFilter = "blur(0.25vw)";
gui.style.zIndex = "999";

document.body.appendChild(gui);