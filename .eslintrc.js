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
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
	rules: {
		'prettier/prettier': 'error',
		quotes: ['error', 'single', { avoidEscape: true }],
		'jsx-quotes': ["error", "prefer-double"],
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'no-empty-function': ["error", { allow: ["arrowFunctions", "constructors"] }],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
	},
};
