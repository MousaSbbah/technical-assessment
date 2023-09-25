module.exports = {
	env: {
		browser: true,
		node: true,
	},
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	extends: ['eslint:recommended'],
	rules: {
		'indent': [2, 'tab'],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'comma-dangle': ['error', 'always-multiline'],
		'no-unused-vars': 'error',
		'no-console': 'error',
		'lines-between-class-members': ['error', 'always'],
		'no-trailing-spaces': 'error',
		'space-before-function-paren': ['error', 'always'],
		'max-len': ['error', { 'code': 150 }],
		'no-multi-spaces':'error',
		'comma-spacing':2,
	},
};