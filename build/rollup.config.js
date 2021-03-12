import commonjs from "@rollup/plugin-commonjs"; // Converti les modules CommonJS en ES6
import vue from "rollup-plugin-vue"; // Gère les composants .vue
import buble from "@rollup/plugin-buble"; // Permet un polyfill de notre code pour un meilleur support sur les navigateurs
import scss from "rollup-plugin-scss";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js", // Fichier relatif en partant de notre fichier package.json
  output: {
    name: "Skeleton",
    exports: "named",
  },
  plugins: [
    vue({
      css: true, // Injecte dynamiquement notre CSS dans une balise <style>
      compileTemplate: true, // Converti notre template en fonction de rendu Vue
    }),
    commonjs(),
    babel({ exclude: "node_modules/**", runtimeHelpers: true }),
    scss(),
    buble(), // Traduit en ES5
  ],
};
