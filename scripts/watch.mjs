import chokidar from "chokidar";
import { build  } from "esbuild";

const rebuild = async () => {
    await build({
        entryPoints: ["src/index.ts"],
        bundle: true,
        minify: true,
        format: "iife",
        external: ["cc"],
        loader: {
            ".tsx": "tsx",
        },
        target: ["esnext"],
        outfile: "dist/elficia.js"
    });
};

console.log("\x1b[38;5;14m[\x1b[38;5;8m-\x1b[38;5;14m] Building for the first time...");
rebuild().then(() => {
    console.log("\x1b[36m[\x1b[32m+\x1b[36m] Successfully built.");
    console.log("\x1b[38;5;14m[\x1b[38;5;8m-\x1b[38;5;14m] Watching for changes..."); 
    chokidar.watch("src").on("change", async (path) => {
        console.log(`\x1b[38;5;14m[\x1b[38;5;200m-\x1b[38;5;14m] File ${path} changed, rebuilding...`);
        rebuild().then(() => console.log("\x1b[36m[\x1b[32m+\x1b[36m] Successfully rebuilt."));
    })
});