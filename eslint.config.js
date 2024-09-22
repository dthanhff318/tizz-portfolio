import { fixupPluginRules } from "@eslint/compat";
import eslintJS from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
//import eslintPluginStorybook from "eslint-plugin-storybook" // does not support eslint v9
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

const baseESLintConfig = {
	name: "eslint",
	extends: [eslintJS.configs.recommended],
	rules: {
		camelcase: "error",
	},
};

const typescriptConfig = {
	name: "typescript",
	extends: [...typescriptEslint.configs.recommendedTypeChecked],
	languageOptions: {
		parser: tsParser,
		parserOptions: {
			ecmaFeatures: { modules: true },
			ecmaVersion: "latest",
			project: "./tsconfig.json",
		},
		globals: {
			...globals.builtin,
			...globals.browser,
			...globals.es2025,
		},
	},
	linterOptions: {},
	plugins: {
		import: patchedImportPlugin,
	},
	rules: {},
	settings: {
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: "./tsconfig.json",
			},
		},
	},
};

const reactConfig = {
	name: "react",
	extends: [eslintPluginReact.configs.flat["jsx-runtime"]],
	plugins: {
		"react-hooks": patchedReactHooksPlugin,
		"react-refresh": eslintPluginReactRefresh,
	},
	rules: {},
};

const jsxA11yConfig = {
	name: "jsxA11y",
	...jsxA11yPlugin.flatConfigs.recommended,
	plugins: {
		"jsx-a11y": jsxA11yPlugin,
	},
	rules: {},
};

const unicornConfig = {
	name: "unicorn",
	plugins: {
		unicorn: eslintPluginUnicorn,
	},
	rules: {},
};

const eslintConfig = typescriptEslint
	.config
	// baseESLintConfig,
	// typescriptConfig,
	// eslintConfigPrettier,
	// reactConfig
	();

eslintConfig.map((config) => {
	config.files = ["src/**/*.ts", "src/**/*.tsx"];
});

export default eslintConfig;
