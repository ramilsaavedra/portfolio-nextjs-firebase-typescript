import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from './Header.module.css';
import ThemeChanger from '../../components/ThemeChanger';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();

  const activeStyle = {
    color: 'var(--active-link)',
    fontWeight: 'bold',
  };

  useEffect(() => {
    setIsOpen(false);
  }, [asPath]);

  return (
    <header className={style.header}>
      <div className={`container ${style.main}`}>
        <div
          className={`${style.hamburger} ${isOpen && style.open}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div></div>
        </div>
        <div className={`${style.menuWrap} ${isOpen && style.open}`}>
          <Link href='/'>
            <a style={asPath === '/' ? activeStyle : {}}>Home</a>
          </Link>
          <Link href='/about'>
            <a style={asPath === '/about' ? activeStyle : {}}>About</a>
          </Link>
          <Link href='/projects'>
            <a style={asPath === '/projects' ? activeStyle : {}}>Projects</a>
          </Link>
          <Link href='/snippets'>
            <a style={asPath === '/snippets' ? activeStyle : {}}>Snippets</a>
          </Link>
          <a href='/static/Resume.pdf' target='_blank' rel='noreferrer'>
            Download CV
          </a>
        </div>
        <ThemeChanger />
      </div>
    </header>
  );
};
export default Header;
