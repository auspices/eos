import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = fileURLToPath(new URL(".", import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ["@auspices/eos"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "styled-components": path.join(ROOT_DIR, "node_modules/styled-components"),
    };

    return config;
  },
};

export default nextConfig;
