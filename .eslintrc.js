module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "object-curly-newline": "off",
    "no-lone-blocks": "off",
    "no-unused-expressions": "off",
    "max-len": "off",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": "off",
  },
};
