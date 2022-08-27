import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

const config = {
  input: "./src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.es.js",
      format: "es",
      exports: "named",
    },
  ],
  plugins: [
    scss({
      output: true,
      failOnError: true,
      outputStyle: "compressed",
    }),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    external(),
    resolve(),
    typescript(),
    terser(),
  ],
};

export default config;
