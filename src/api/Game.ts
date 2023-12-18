import { getScene } from "@api/Scene";

function getGameManager() {
    return getScene().getChildByName("GameManager")!;
};

export { getGameManager };