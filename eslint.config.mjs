import nextPlugin from "@next/eslint-plugin-next";
import nextConfig from "eslint-config-next";
import typescriptConfig from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextConfig,
  ...typescriptConfig,
  nextPlugin.configs["core-web-vitals"],
];

export default eslintConfig;
