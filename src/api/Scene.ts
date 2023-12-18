import cocos from "@api/cocos";
import { Scene } from "cc";


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
    
}

export { getScene };