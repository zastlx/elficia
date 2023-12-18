import * as esbuild from "esbuild";

await esbuild.build({
	entryPoints: ["src/index.ts"],
	bundle: true,
	minify: true,
    format: "iife",
	external: ["cc"],
	target: ["esnext"],
	outfile: "dist/elficia.js"
});
