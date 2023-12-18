import * as cctype from "cc";

interface cc {
    Scene: cctype.Scene;
    game: {
        _sceneInfos: {
            uuid: string;
            url: string;
            packs: {
                ext: string;
                uuid: string;
                ver: string;
                packedUuids: string[];
            }[];
        }[];
    };
    director: cctype.Director;
};

export { cc };