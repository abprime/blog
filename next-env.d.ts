/// <reference types="next" />
/// <reference types="next/types/global" />
const fml = require("frontmatter-markdown-loader");
declare module "*.md" {
  const content: string;
  export default fml(content);
}
