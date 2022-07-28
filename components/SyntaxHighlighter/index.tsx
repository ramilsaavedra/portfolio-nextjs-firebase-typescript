import React, { useEffect } from 'react';
// @ts-ignore
import Prism from 'prismjs';

interface SyntaxHighlighterProps {
  code: string;
  tech: string;
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  code,
  tech,
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${tech}`}>{code}</code>
    </pre>
  );
};

export default SyntaxHighlighter;
