import React from 'react';
import style from './CodeSnippet.module.css';
import CodeSnippetIcon from './CodeSnippetIcon';
import { TechProps } from '../../mock_data/codes';

interface CodeSnippetProps {
  tech: TechProps;
  title: string;
  description: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  tech,
  title,
  description,
}) => {
  return (
    <div className={style.wrap}>
      <CodeSnippetIcon icon={tech} />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};
export default CodeSnippet;
