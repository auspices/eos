import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@auspices/eos"],
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      "react/jsx-runtime": path.resolve(__dirname, "node_modules/react/jsx-runtime.js"),
      "react/jsx-dev-runtime": path.resolve(
        __dirname,
        "node_modules/react/jsx-dev-runtime.js"
      ),
      "styled-components": path.resolve(
        __dirname,
        "node_modules/styled-components/dist/styled-components.browser.esm.js"
      ),
    };
    return config;
  },
};

export default nextConfig;
