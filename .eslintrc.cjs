module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "linebreak-style": [0, "windows"],
    quotes: ["warn", "double"],
    "import/no-unresolved": 0,
    "react/function-component-definition": 0,
    "import/no-": 0,
    "react/jsx-indent": "off",
    "no-console": 0,
    "react/no-array-index-key": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "no-unsafe-optional-chaining": "off",
    "react/prop-types": "off",
  },
};
