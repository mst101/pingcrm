import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,vue}'],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
  },
  {
    rules: {
      indent: ['error', 2],
      quotes: ['warn', 'single'],
      semi: ['warn', 'never'],
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
      'comma-dangle': ['warn', 'always-multiline'],
      'vue/component-api-style': [
        'error',
        ['script-setup', 'composition', 'options'],
      ],
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-html': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/require-default-prop': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': [
        'warn',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
        },
      ],
    },
  },
]
