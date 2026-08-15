import eslintConfigPrettier from '@vue/eslint-config-prettier/skip-formatting'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    ignores: ['.eslintrc.cjs', 'dist/**', 'node_modules/**', 'williambritton_v1/**']
  },
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  eslintConfigPrettier
]
