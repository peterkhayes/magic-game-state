module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    "es6": true,
    "node": true,
    "browser": true,
  },
  plugins: [
    "flowtype",
    "jest",
    "react",
    "react-hooks",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/flowtype",
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-unused-expressions": "off", // replaced by flow version
    "flowtype/no-unused-expressions": "error", // replaced by flow version
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_.+",
        varsIgnorePattern: "^_.+",
      }
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 90,
        singleQuote: true,
        arrowParens: 'always',
        trailingComma: 'all',
      },
    ],
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: '*.test.js',
      extends: [
        "plugin:jest/recommended",
      ],
      env: {
        "jest": true,
      },
    },
  ]
}