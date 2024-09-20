module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // or 2015, 2018 based on your requirement
    sourceType: 'module', // This allows the use of imports
  },
  env: {
    es6: true, // Enable ES6 syntax
    node: true, // If using Node.js
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential', // for Vue.js
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'vue/no-multiple-template-root': 'off'
  },
};


