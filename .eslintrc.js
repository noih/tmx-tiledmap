module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended', 
    ],
    parserOptions: {
        ecmaVersion: 2018, 
        sourceType: 'module', 
        project: './tsconfig.json',
        tsconfigRootDir: './',
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'accessor-pairs': 2, 
        'arrow-parens': [2, 'always'], 
        'arrow-spacing': [2, { 
            'before': true,
            'after': true
        }],
        'block-spacing': [2, 'always'], 
        'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }], 
        'comma-dangle': [2, 'never'], 
        'comma-spacing': [2, { 'before': false, 'after': true }], 
        'comma-style': [2, 'last'], 
        'indent': [2, 4], 
        'key-spacing': [2, { 
            'beforeColon': false,
            'afterColon': true
        }],
        'keyword-spacing': [2, { 
            'before': true,
            'after': true
        }],
        'linebreak-style': [2, 'unix'], 
        'max-nested-callbacks': [1, 5], 
        'max-params': [1, 5], 
        'padded-blocks': [2, 'never'], 
        'prefer-const':  [2], 
        'quotes': [1, 'single'], 
        'semi': [2, 'never'], 
        'semi-spacing': [2, { 
            'before': false,
            'after': true }
        ],
        'space-before-blocks': [2, 'always'], 
        'space-before-function-paren': [2, 'always'], 
        'space-in-parens': [2, 'never'], 
        'space-infix-ops': 2, 
        'space-unary-ops': [2, { 
            'words': true,
            'nonwords': false
        }],


    },
};