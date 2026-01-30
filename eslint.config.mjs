import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import reactPlugin from "@eslint-react/eslint-plugin";
import reactHooks from 'eslint-plugin-react-hooks';


const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  reactHooks.configs.flat.recommended,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      "@eslint-react": reactPlugin,
    },
    rules: {
      "@next/next/no-img-element": "off",
      "@eslint-react/no-duplicate-key": "error", // Catches duplicate keys!
    }
  }
]);

export default eslintConfig;
