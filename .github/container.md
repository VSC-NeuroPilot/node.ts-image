# Containers

- [Python + uv](./containers/python-uv) <!-- Uses uv + ruff + ty -->
- [Python + pip](./containers/python-pip) <!-- Uses pip + pylint + pylance + Black(?) -->
- [Python + Neuro API](./containers/python-neuroapi) <!-- Uses uv + neuro_api + neuro-api-tony -->
- [Node.js + TypeScript (Unbundled)](./containers/nodejs-ts) <!-- Also includes ESLint + Prettier, otherwise nothing too fancy so we leave them unbundled. -->
- [Node.js + HTML](./containers/nodejs-html) <!-- Uses the minify + serve CLI packages instead of something fancy like Vite or a framework like React, also includes Prettier (actually maybe using webpack/esbuild instead) -->
- [VS Code Extension Development](./containers/vscode-ext) <!-- Comes with @types/vscode and vsce scripts (probably), also bundles files with esbuild -->
