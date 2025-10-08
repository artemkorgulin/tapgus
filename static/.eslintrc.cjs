module.exports = {
    ignorePatterns: ['dist', '.eslintrc.cjs', '*.config.*'],
    env: {
        browser: true,
        es2023: true,
    },
    extends: [
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'simple-import-sort',
        'react',
        'jsx-a11y',
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        'import/no-cycle': [2, { maxDepth: 2 }],
        'import/no-named-as-default-member': ['off'],
        'import/no-unresolved': ['off'],
        'max-len': [
            'error',
            {
                code: 80,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
                ignoreComments: true,
            },
        ],
        curly: ['error', 'all'],
        // -- Prettier
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        // -- TypeScript
        '@typescript-eslint/no-unnecessary-type-constraint': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/consistent-type-imports': 'error',
        // -- React
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.jsx', '.tsx'] },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'react/prop-types': ['off', {}],
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-curly-newline': 'off',
        'react/boolean-prop-naming': ['error', { rule: '^(is|has|can)[A-Z]+' }],
        // -- JSX A11y
        'jsx-a11y/anchor-is-valid': 'off',
        // -- ESLint
        'no-bitwise': 'off',
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        'padding-line-between-statements': 'off',
        '@typescript-eslint/padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'block' },
            { blankLine: 'always', prev: 'block', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block-like' },
            { blankLine: 'always', prev: 'block-like', next: '*' },
            { blankLine: 'always', prev: '*', next: ['interface', 'type'] },
            { blankLine: 'always', prev: ['interface', 'type'], next: '*' },
        ],
        // -- Simple import sort
        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    // Side effect imports
                    ['^\\u0000'],
                    // React and Packages
                    ['^react$', '^@?[a-zA-Z0-9]'],
                    // 'lodash' related packages
                    ['^lodash'],
                    // Internal packages
                    ['^assets(/.*|$)'],
                    ['^components(/.*|$)'],
                    ['^environments(/.*|$)'],
                    ['^fonts(/.*|$)'],
                    ['^hooks(/.*|$)'],
                    ['^models(/.*|$)'],
                    ['^modules(/.*|$)'],
                    ['^pages(/.*|$)'],
                    ['^styles(/.*|$)'],
                    ['^types(/.*|$)'],
                    ['^containers(/.*|$)'],
                    // Other relative imports
                    [
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\./(?=.*/)(?!/?$)',
                        '^\\.(?!/?$)',
                        '^\\./?$',
                    ],
                ],
            },
        ],
        'simple-import-sort/exports': 'warn',
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
