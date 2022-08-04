import React, { useState, useEffect } from 'react';
// @ts-ignore
import Prism from 'prismjs';
import prettier from 'prettier';
import css from 'prettier/parser-postcss';
import babel from 'prettier/parser-babel';

interface SyntaxHighlighterProps {
  code: string;
  tech: string;
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  code,
  tech,
}) => {
  const [formatted, setFormatted] = useState('failed');

  useEffect(() => {
    if (code && tech) {
      try {
        setFormatted(
          prettier.format(code, {
            parser: tech === 'css' ? 'css' : 'babel',
            plugins: tech === 'css' ? [css] : [babel],
            useTabs: false,
            semi: true,
            singleQuote: true,
          })
        );
      } catch {
        setFormatted('failed');
      }
    }
  }, [code, tech]);

  useEffect(() => {
    if (formatted) {
      Prism.highlightAll();
    }
  }, [formatted]);

  return (
    <pre>
      <code className={`language-${tech}`}>
        {formatted === 'failed' ? code.split('      ').join('\n') : formatted}
      </code>
    </pre>
  );
};

export default SyntaxHighlighter;
