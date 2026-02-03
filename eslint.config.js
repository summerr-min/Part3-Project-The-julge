import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),

  // 1. 공통 설정 (JS, JSX, TS, TSX 모두 해당)
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // React Hook 권장 규칙 적용
      ...reactHooks.configs.recommended.rules,
      // 빠른 새로고침(HMR) 규칙
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json', // 또는 './tsconfig.app.json'
        },
      },
    },
  },

  // 2. JS / JSX 전용 규칙
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    rules: {
      quotes: ['error', 'single', { allowTemplateLiterals: true }], // 싱글 쿼트 강제 (템플릿 리터럴 허용)
      semi: ['error', 'always'], // 세미콜론 필수
      'no-unused-vars': 'warn', // 미사용 변수 경고
    },
  },

  // 3. TS / TSX 전용 규칙
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    rules: {
      quotes: ['error', 'single', { allowTemplateLiterals: true }], // 싱글 쿼트 강제 (템플릿 리터럴 허용)
      semi: ['error', 'always'], // 세미콜론 필수

      // TS 전용 미사용 변수 규칙 (기본 rules는 끄고 TS 전용 사용)
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',

      '@typescript-eslint/no-explicit-any': 'warn', // any 사용 자제
    },
  },
]);
