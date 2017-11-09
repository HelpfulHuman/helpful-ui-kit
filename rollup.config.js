import resolve from "rollup-plugin-node-resolve";
import buble from "rollup-plugin-buble";

export default {
  input: "./src/index.js",
  output: [
    { file: "build/index.js", format: "cjs" },
    { file: "build/index.es.js", format: "es" },
  ],
  exports: "named",
  external: [
    "react"
  ],
  plugins: [
    resolve({ main: true, jsnext: true }),
    buble({
      objectAssign: "Object.assign",
      transforms: { dangerousTaggedTemplateString: true },
    }),
  ],
};