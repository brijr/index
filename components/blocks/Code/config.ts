import { Block } from "payload";

export const CodeBlock: Block = {
  slug: "codeBlock",
  fields: [
    {
      name: "language",
      type: "select",
      required: true,
      options: [
        { label: "jsx", value: "jsx" },
        { label: "tsx", value: "tsx" },
        { label: "javascript", value: "javascript" },
        { label: "typescript", value: "typescript" },
        { label: "html", value: "html" },
        { label: "css", value: "css" },
        { label: "bash", value: "bash" },
      ],
    },
    {
      name: "code",
      type: "textarea",
      required: true,
    },
  ],
};
