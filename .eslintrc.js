module.exports = {
  root: true,
  extends: [
    "universe/native",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    node: false,
    browser: false,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    // Expo uses the new JSX transforms from React 17, so we can turn off the
    // "React must be in scope" errors.
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    // No preference for type of export.
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",

    // We can add prop defaults in the function body, no need for the React
    // defaultProps implementation.
    "react/require-default-props": "off",

    // Consistently don't use file extensions
    "import/extensions": [
      "error",
      "always",
      {
        ignorePackages: true,
        pattern: {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      },
    ],

    // In React Native, I like to define styles after the component
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: false },
    ],

    // This clashes with the way some links in routers are built for Expo.
    "jsx-a11y/anchor-is-valid": "off",
  },
};
