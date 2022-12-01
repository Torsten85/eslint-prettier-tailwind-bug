module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:react/recommended",
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "18",
    },
  },
};
