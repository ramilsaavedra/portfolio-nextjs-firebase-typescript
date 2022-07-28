import React from 'react';
import style from './LinkButton.module.css';

const LinkButton: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  href,
}) => {
  return (
    <a className={style.button} href={href} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
};
export default LinkButton;
