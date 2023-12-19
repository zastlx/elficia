const catagory = {
    height: "fit-content",
    display: "none",
    minHeight: "55vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "0px 0px 1.2vw 1.2vw",
    width: "15vw",
    border: "solid rgba(151, 69, 245, 0.5)",
    boxShadow: "0 0 9px 8px rgba(151, 69, 245, 0.1)",
    animation: "slideInFromUp 0.5s ease",
};

const catagoryTitle = {
    width: "100%",
    color: "white",
    fontSize: "30px",
    height: "5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const catagoryTitleText = {
    textShadow: "0 0 10px #fff, 0 0 20px rgba(151, 69, 245), 0 0 30px rgba(151, 69, 245)",
};

const catagoryTitleLine = {
    border: "1px solid rgba(151, 69, 245, 0.5)",
    margin: "0",
    padding: "0",
};

const gui = {
    position: "absolute",
    top: "0px",
    left: "0px",
    display: "none",
    width: "100%",
    gap: "8vw",
    paddingTop: "9vh",
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
        transform: "translateY(-100%)"
    },
    "0.01%": {
        filter: "opacity(0)",
        transform: "translateY(-100%)"
    },
    "100%": {
        filter: "opacity(1)",
        transform: "translateY(0)",
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



export { catagory, gui, catagoryTitle, catagoryTitleText, catagoryTitleLine, guiIn, slideInFromUp, slideOutToUp };

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