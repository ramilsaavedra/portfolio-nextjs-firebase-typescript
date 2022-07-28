import React from 'react';
import style from './CodeSnippet.module.css';
import CodeSnippetIcon from './CodeSnippetIcon';
import { TechProps } from '../../mock_data/codes';
import Link, { LinkProps } from 'next/link';

interface CodeSnippetProps extends LinkProps {
  tech: TechProps;
  title: string;
  description: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  tech,
  title,
  description,
  href,
}) => {
  return (
    <Link href={href}>
      <div className={style.wrap}>
        <CodeSnippetIcon icon={tech} />
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </Link>
  );
};
export default CodeSnippet;
