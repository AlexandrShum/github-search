import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}}},
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      semi: ["error", "always"],
      "object-curly-spacing": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "key-spacing": ["error", {"beforeColon": false}],
      "react/jsx-curly-spacing": ["error", {
        "when": "never",
        "children": true
      }],
      "react/jsx-wrap-multilines": ["error", {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }]
    }
  }
];