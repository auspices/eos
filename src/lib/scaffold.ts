import fs from "fs";

export const scaffold = () => {
  const [componentName] = process.argv.slice(2);

  if (!componentName) {
    console.error(`Please name your component!`);
    return;
  }

  const COMPONENT = `import styled from "styled-components";
import { Box, BoxProps } from "../Box";

export type ${componentName}Props = BoxProps;

export const ${componentName} = styled(Box)\`\`;
`;

  const STORIES = `import React from "react";
import { States } from "storybook-states";
import { ${componentName}, ${componentName}Props } from "./${componentName}";

export default { title: "${componentName}", component: ${componentName} };

export const Default = () => (
  <States<${componentName}Props>>
    <${componentName}>Hello</${componentName}>
  </States>
);
`;

  const FILES = {
    "index.ts": `export * from './${componentName}';`,
    [`${componentName}.tsx`]: COMPONENT,
    [`${componentName}.stories.tsx`]: STORIES,
  };

  fs.mkdir(`./src/${componentName}`, { recursive: true }, (err) => {
    if (err) throw err;

    Object.entries(FILES).forEach(([fileName, fileSource]) => {
      const filePath = `./src/${componentName}/${fileName}`;

      fs.writeFile(filePath, fileSource, (err) => {
        console.log(`Wrote: ${filePath}`);
        if (err) console.error(err);
      });
    });
  });

  const indexFilePath = `./src/index.ts`;

  fs.readFile(indexFilePath, "utf8", (err, data) => {
    if (err) throw err;

    fs.writeFile(
      indexFilePath,
      data + `export * from './${componentName}';\n`,
      (err) => {
        console.log(`Updated index.`);
        if (err) console.error(err);
      }
    );
  });
};
