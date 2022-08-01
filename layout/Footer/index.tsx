import React from 'react';
import style from './Footer.module.css';
import Link from 'next/link';
import SpotifyCurrentlyPlaying from '../../components/SpotifyCurrentlyPlaying';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={`container ${style.mainDiv}`}>
        <SpotifyCurrentlyPlaying />
        <div className={style.subDiv}>
          <a href='/static/Resume.pdf' target='_blank' rel='noreferrer'>
            Download CV
          </a>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/projects'>
            <a>Projects</a>
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
          {/* <Link href='/experiences'>
            <a>Experiences</a>
          </Link>
          <Link href='/certificates'>
            <a>Certificates</a>
          </Link> */}

          <Link href='/snippets'>
            <a>Snippets</a>
          </Link>
          <Link href='/certificates'>
            <a>Certificates</a>
          </Link>
          <Link href='/top-tracks'>
            <a>Top Tracks</a>
          </Link>
        </div>
        <div className={style.credits}>
          <a
            href='https://github.com/ramilsaavedra/portfolio-nextjs-firebase-typescript'
            target='_blank'
            rel='noreferrer'
          >
            Built and Designed with &#10084;&#65039;
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
