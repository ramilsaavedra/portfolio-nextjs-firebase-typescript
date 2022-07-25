import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from './Header.module.css';
import ThemeChanger from '../../components/ThemeChanger';

const Header: React.FC = () => {
  const { asPath } = useRouter();

  const activeStyle = {
    color: 'var(--active-link)',
    fontWeight: 'bold',
  };

  return (
    <header className={style.header}>
      <div className={style.main}>
        <Link href='/'>
          <a style={asPath === '/' ? activeStyle : {}}>Home</a>
        </Link>
        <Link href='/projects'>
          <a style={asPath === '/projects' ? activeStyle : {}}>Projects</a>
        </Link>
        <Link href='/snippets'>
          <a style={asPath === '/snippets' ? activeStyle : {}}>Snippets</a>
        </Link>
        <Link href='/about'>
          <a style={asPath === '/about' ? activeStyle : {}}>About</a>
        </Link>
        <ThemeChanger />
      </div>
    </header>
  );
};
export default Header;
