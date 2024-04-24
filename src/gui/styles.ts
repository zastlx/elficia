const catagory = {
    height: "fit-content",
    display: "none",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "1.2vw",
    width: "15vw",
    border: "solid rgba(151, 69, 245, 0.5)",
    boxShadow: "0 0 9px 8px rgba(151, 69, 245, 0.1)",
    animation: "slideInFromUp 0.5s ease",
    flexDirection: "column",
    opacity: "0",
    animationFillMode: "forwards",
    overflow: "hidden",
    marginTop: "9vh"
};

const catagoryTitle = {
    width: "100%",
    color: "white",
    fontSize: "2vw",
    height: "5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const catagoryTitleText = {
    textShadow: "0 0 10px #fff, 0 0 20px rgba(151, 69, 245), 0 0 30px rgba(151, 69, 245)",
};

const catagoryTitleLine = {
    border: "2px solid rgba(151, 69, 245, 0.5)",
    margin: "0",
    padding: "0",
};

const moduleDescription = {
    position: "absolute",
    bottom: "0",
    border: "solid rgba(151, 69, 245, 0.5)",
    left: "0",
    color: "white",
    display: "flex",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxShadow: "rgba(151, 69, 245, 0.1) 0px 0px 9px 8px",
    minWidth: "7vw",
    margin: "2vh",
    fontSize: "2.2vh",
    paddingLeft: "1vw",
    paddingRight: "1vw",
    width: "fit-content",
    height: "4vh",
    justifyContent: "center",
    alignItems: "center",
};

/*
<div id="module-world-TestModule" style="width: 100%; height: max-content; min-height: 5.5vh; display: flex; padding: 0px; justify-content: center; align-items: center; flex-direction: column; margin: 0px;"><div style="
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    padding: 0;
    margin: 0;
    height: 5.5vh;
    min-height: 100%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
"><span style="color: white; font-size: 3vh;">TestModule</span></div><div style="
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 10vh;
    display: none;
    width: 100%;
"></div></div>
*/

const moduleContainer = {
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
};

const module = {
    width: "100%",
    height: "max-content",
    minHeight: "5.5vh",
    display: "flex",
    padding: "0px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0px",
};

const moduleNameContainer = {
    position: "relative",
    width: "100%",
    top: "0",
    left: "0",
    display: "flex",
    padding: "0",
    margin: "0",
    height: "5.5vh",
    minHeight: "100%",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "3vh",
};

const moduleSettingsContainer = {
    position: "relative",
    top: "0",
    left: "0",
    overflow: "hidden",
    minHeight: "10vh",
    height: "fit-content",
    display: "none",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
};

const sliderModuleSetting = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontSize: "2.2vh",
    justifyContent: "center",
    boxSizing: "border-box",
    paddingLeft: "2vh",
    paddingRight: "2vh",
    alignItems: "flex-start",
};
/*
    height: 2vh;
    width: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid white;
    */
const sliderModuleSettingSliderContainer = {
    height: "2vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    border: "1px solid white",
};

const sliderModuleSettingSliderInput = {
    width: "100%",
    padding: "0",
    appearance: "none",
};

const gui = {
    position: "absolute",
    top: "0px",
    left: "0px",
    display: "none",
    width: "100%",
    gap: "8vw",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(0.25vw)",
    zIndex: "999",
    justifyContent: "center",
    animationFillMode: "forwards",
    animation: "guiIn 0.5s ease",
};

const guiIn = {
    "0%": {
        opacity: "0",
        backgroundColor: "rgba(0, 0, 0, 0)",
        backdropFilter: "blur(0vw)",
    },
    "100%": {
        opacity: "1",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(0.25vw)",
    },
};

const slideInFromUp = {
    "0%": {
        filter: "opacity(0)",
        opacity: "0",
        transform: "translateY(-100%)"
    },
    "100%": {
        filter: "opacity(1)",
        transform: "translateY(0)",
        opacity: "1",
    },
};

const slideOutToUp = {
    "0%": {
        filter: "opacity(1)",
        transform: "translateY(0)",
    },
    "100%": {
        transform: "translateY(-100%)",
        filter: "opacity(0)",
    },
};
/*width: 100%;
    height: 5vh;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1vh;*/
const boolModuleSetting = {
    width: "100%",
    height: "5vh",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "1vw",
};
/*    width: 80%;
    border: 2px solid rgba(151, 69, 245, 0.5);
    margin: 0px;
    padding: 0px;*/
const boolSettingIndicator = {
    width: "80%",
    border: "0.3vh solid rgba(151, 69, 245, 0.5)",
    margin: "0px",
    padding: "0px",
    transform: "translateY(1.5vh)",
    position: "absolute",
};

const sliderSettingStyles = [
    {
        selector: "input[type=range]::-webkit-slider-thumb",
        style: {
            appearance: "none",
            width: "2vw",
            height: "2vw",
            borderRadius: "50%",
            background: "rgba(151, 69, 245, 0.5)",
            cursor: "pointer",
        }
    },
    {
        selector: "input[type=range]::-webkit-slider-runnable-track",
        style: {
            width: "100%",
            height: "0.5vw",
            cursor: "pointer",
            background: "rgba(151, 69, 245, 0.5)",
        }
    },
    // FF
    {
        selector: "input[type=range]::-moz-range-thumb",
        style: {
            appearance: "none",
            width: "2vw",
            height: "2vw",
            borderRadius: "50%",
            background: "rgba(151, 69, 245, 0.5)",
            cursor: "pointer",
        }
    },
    {
        selector: "input[type=range]::-moz-range-track",
        style: {
            width: "100%",
            height: "0.5vw",
            cursor: "pointer",
            background: "rgba(151, 69, 245, 0.5)",
        }
    },
];



export { boolSettingIndicator, boolModuleSetting, sliderModuleSetting, sliderModuleSettingSliderContainer, sliderModuleSettingSliderInput, sliderSettingStyles, moduleDescription, module, moduleContainer, moduleNameContainer, moduleSettingsContainer, catagory, gui, catagoryTitle, catagoryTitleText, catagoryTitleLine, guiIn, slideInFromUp, slideOutToUp };

/*
.gui {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(0.25vw);
        z-index: 999;
        display: none;
        flex-direction: row;
        animation-fill-mode: forwards;
        animation: guiIn 0.5s ease;
    }

    @keyframes guiIn {
        0% {
            opacity: 0;
            background: rgba(0, 0, 0, 0);
            backdrop-filter: blur(0vw);
        }
        100% {
            opacity: 1;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(0.25vw);
        }
    }
    */