import type { CollectionConfig, Block } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const CodeBlock: Block = {
  slug: "code-block",
  interfaceName: "CodeBlock",
  fields: [
    {
      name: "language",
      type: "select",
      required: true,
      options: [
        { label: "JavaScript", value: "javascript" },
        { label: "TypeScript", value: "typescript" },
        { label: "HTML", value: "html" },
        { label: "CSS", value: "css" },
        { label: "Python", value: "python" },
        { label: "JSX", value: "jsx" },
        { label: "TSX", value: "tsx" },
      ],
    },
    {
      name: "code",
      type: "textarea",
      required: true,
    },
  ],
};

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => defaultFeatures,
      }),
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: [CodeBlock],
    },
  ],
};
