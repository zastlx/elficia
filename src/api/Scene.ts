import cocos from "@api/cocos";
import { Scene } from "cc";
import { getGameManager } from "./Game";
import { getNetworkManager } from "./Net";


const allScenes: {
    uuid: string;
    name: string | null;
}[] = cocos().game._sceneInfos.map(s => ({
    uuid: s.uuid,
    name: s.url.match(/\/([^/]+)\.scene$/)?.[1] || null
}));

function getScene(): Scene {
    return cocos().director.getScene()!;
}

function getLocalBall() {
    return getNetworkManager()._netGame.localPlayer.localState.visual.node;
}

function getBallController() {
    return getNetworkManager()._netGame.localPlayer.localState.visual;
}


export { getScene, getLocalBall, getBallController };