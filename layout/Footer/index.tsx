import React from 'react';
import style from './Footer.module.css';
import Link from 'next/link';
import Contact from '../Contact';

const Footer: React.FC = () => {
  return (
    <>
      <Contact />
      <footer>
        <div className={style.mainDiv}>
          <div className={style.subDiv}>
            <a href='/static/Resume.pdf' target='_blank' rel='noreferrer'>
              Download CV
            </a>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </div>
          <div className={style.subDiv}>
            <a
              href='https://www.linkedin.com/in/rdsaavedra/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/ramilsaavedra'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </div>
          <div className={style.subDiv}>
            <Link href='/experiences'>
              <a>Experiences</a>
            </Link>
            <Link href='/certificates'>
              <a>Certificates</a>
            </Link>

            <Link href='/snippets'>
              <a>Snippets</a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
