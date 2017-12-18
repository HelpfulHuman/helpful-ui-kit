import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
    input: "./Components/index.tsx",
    output: [
        { file: "build/index.js", format: "cjs" },
        { file: "build/index.es.js", format: "es" },
    ],
    exports: "named",
    external: ["react", "styled-components", "react-dom"],
    plugins: [
        resolve({ main: true }),
        typescript(),
    ],
};