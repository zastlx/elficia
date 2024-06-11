import { getScene } from "@api/Scene";

function getGameManager() {
    try {
        return getScene()?.getChildByName("GameManager");
    } catch (error) {
        console.warn("Failed to get GameManager", error);
        return null;
    }
};

export { getGameManager };