const catagory = {
    height: "fit-content",
    display: "none",
    minHeight: "55vh",
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
    position: absolute;
    bottom: 0;
    border: solid rgba(151, 69, 245, 0.5);
    left: 0;
    color: white;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: rgba(151, 69, 245, 0.1) 0px 0px 9px 8px;
    min-width: 7vw;
    margin: 2vh;
    font-size: 2.2vh;
    padding-left: 1vw;
    padding-right: 1vw;
    width: fit-content;
    height: 4vh;
    justify-content: center;
    align-items: center;
*/

const moduleContainer = {
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
};

const module = {
    width: "100%",
    height: "5.5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const moduleName = {
    color: "white",
    fontSize: "3vh",
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



export { moduleDescription, module, moduleContainer, moduleName, catagory, gui, catagoryTitle, catagoryTitleText, catagoryTitleLine, guiIn, slideInFromUp, slideOutToUp };

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