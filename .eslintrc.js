module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		es6: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react-hooks/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks', 'import'],
	ignorePatterns: [
		'.eslintrc.js'
	],
	rules: {
		'prettier/prettier': 'error',
		'semi': ['error', 'always'],
		'no-var': 'error',
		'quotes': ['error', 'single', { avoidEscape: true }],
		'jsx-quotes': ['error', 'prefer-double'],
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'no-empty-function': ['error', { allow: ['arrowFunctions', 'constructors'] }],
		'eqeqeq': ['error', 'always'],
		'dot-location': ['error', 'property'],
		'require-await': 'error',
		'no-empty': 'error',
		'no-eq-null': 'error',
		'no-implicit-coercion': 'error',
		'yoda': 'error',
		'init-declarations': ['error', 'never', { 'ignoreForLoopInit': true }],
		'no-use-before-define': ['off', { 'functions': false, 'classes': true, 'variables': false }],
		'comma-dangle': ['error', 'only-multiline'],
		'key-spacing': ['error', { 'beforeColon': false , 'afterColon': true }],
		'max-classes-per-file': ['error', 1],
		'max-len': ['error', { 'code': 80, 'tabWidth': 2 }],
		'no-multiple-empty-lines': 'error',
		'object-curly-spacing': ['error', 'always'],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-key': ['error', { 'checkFragmentShorthand': true }],
		'react/jsx-fragments': ['warn', 'syntax'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'import/no-unresolved': 'off',
		'import/named': 'off',
		'import/namespace': 'warn',
		'import/no-named-as-default': 'off',
		'import/export': 'warn',
		'import/order': [
			'error',
			{
				'groups': ['builtin', 'external', ['sibling', 'parent'], 'index', 'object'],
				'newlines-between': 'always',
				'alphabetize': {
					'order': 'asc',
					'caseInsensitive': false
				}
			}
		]
	},
};
