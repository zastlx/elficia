import { getGameManager } from "@api/Game";
import { NetworkManager } from "@cctypes/net";

function getNetworkManager(): NetworkManager {
    // @ts-ignore
    return getGameManager().components.find(comp => comp._netGame);
}
// @ts-ignore
window.gnm = getNetworkManager;
export { getNetworkManager };