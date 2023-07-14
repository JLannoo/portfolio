module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'google'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',

	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'require-jsdoc': 'off',
		'linebreak-style': ['error', 'unix'],
		'object-curly-spacing': ['error', 'always'],
		'max-len': 0,
		'spaced-comment': 'off',
		'react/prop-types': 'off',
	},

};

