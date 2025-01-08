interface CodeBlockProps {
  language: string;
  code: string;
}

export const CodeBlock = ({ language, code }: CodeBlockProps) => {
  return (
    <div className="w-full my-4 rounded-lg overflow-hidden">
      <pre className="text-sm">{language}</pre>
      <pre>{code}</pre>
    </div>
  );
};

export default CodeBlock;
