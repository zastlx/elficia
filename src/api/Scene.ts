import cocos from "@api/cocos";
import { getNetworkManager } from "./Net";


const allScenes: {
    uuid: string;
    name: string | null;
}[] = cocos().game._sceneInfos.map(s => ({
    uuid: s.uuid,
    name: s.url.match(/\/([^/]+)\.scene$/)?.[1] || null
}));

function getScene() {
    try {
        return cocos().director.getScene()!;
    } catch (error) {
        console.warn("Failed to get scene", error);
        return null;
    }
    //return cocos().director.getScene()!;
}

function getLocalBall() {
    try {
        return getNetworkManager()?._netGame.localPlayer.localState.visual.node;
    } catch (error) {
        console.warn("Failed to get local ball", error);
        return null;
    }
}

function getBallController() {
    try {
        return getNetworkManager()?._netGame.localPlayer.localState.visual;
    } catch (error) {
        console.warn("Failed to get ball controller", error);
        return null;
    }
    //return getNetworkManager()._netGame.localPlayer.localState.visual;
}


export { getScene, getLocalBall, getBallController };