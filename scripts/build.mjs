import * as esbuild from "esbuild";

await esbuild.build({
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
