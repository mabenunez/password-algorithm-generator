const onCommit = process.env.REACT_APP_ON_COMMIT ? 2 : 1;

module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended'],
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
    plugins: ['react'],
    rules: {
        'react/prop-types': 0,
        'no-debugger': onCommit,
        'no-console': onCommit,
        'prefer-const': 1,
        'no-unused-vars': 0,
    },
};
