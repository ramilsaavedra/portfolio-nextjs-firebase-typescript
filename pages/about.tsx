import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/About.module.css';
import GoToPage from '../components/GoToPage';

const about: NextPage = () => {
  const copyToClipBoard = (value: string) => {
    navigator.clipboard.writeText(value);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me | Ramil Saavedra</title>
      </Head>
      <h1>About Me</h1>
      <div className={styles.bio}>
        <div>
          <h5>Hello World, Ramil here!👋 Welcome to my website.</h5>
          <p className={styles.bioText}>
            Im a web developer from the Philippines. I simply enjoy every aspect
            of web development, the never-ending learning, the satisfication
            when you solved a problem, the heart-warming feedback from the user,
            the welcoming community, the annoying bugs and the ability to turn
            ideas to reality.
          </p>
          <p className={styles.bioText}>
            In my 4 years experience in the industry. I already built multiple
            projects from static to complex web application using different
            tools and technologies
          </p>
        </div>
        <div>
          <Image
            className={styles.avatar}
            src='/static/images/about/me.jpg'
            alt='Ramil Saavedra'
            height={200}
            width={200}
          />
        </div>
      </div>
      <div className={styles.tech}>
        <h3>Tech</h3>
        <p className={styles.techSubheading}>
          Here is the list of technologies and tools I have used.
        </p>
        <ul>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>CSS Modules</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>Figma</li>
          <li>NodeJS</li>
          <li>Webpack</li>
          <li>Firebase</li>
          <li>PHP</li>
          <li>Laravel</li>
          <li>MySQL</li>
        </ul>
      </div>
      <div className={styles.links}>
        <h3>Links</h3>
        <ul>
          <li>
            <div className={styles.linkWrap}>
              <span>Website:</span>
              <a
                className={styles.link}
                href='https://ramilsaavedra.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                https://ramilsaavedra.vercel.app/
              </a>
            </div>
          </li>
          <li>
            <div className={styles.linkWrap}>
              <span>Github:</span>
              <a
                className={styles.link}
                href='https://github.com/ramilsaavedra'
                target='_blank'
                rel='noreferrer'
              >
                https://github.com/ramilsaavedra
              </a>
            </div>
          </li>
          <li>
            <div className={styles.linkWrap}>
              <span>LinkedIn:</span>
              <a
                className={styles.link}
                href='https://www.linkedin.com/in/rdsaavedra/'
                target='_blank'
                rel='noreferrer'
              >
                https://www.linkedin.com/in/rdsaavedra/
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.contactInfo}>
        <h3>Contacts</h3>
        <ul>
          <li>
            <div className={styles.contactWrap}>
              <span>Viber:</span>
              <p>+63-969-523-7638</p>
              <div
                className={styles.contactWrapCopyButton}
                onClick={() => copyToClipBoard('+639695237638')}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
                  <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.contactWrap}>
              <span>Email:</span>
              <p>rdsaavedra15@gmail.com</p>
              <div
                className={styles.contactWrapCopyButton}
                onClick={() => copyToClipBoard('rdsaavedra15@gmail.com')}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
                  <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.contactWrap}>
              <span>Discord:</span>
              <p>Jet#8854</p>
              <div
                className={styles.contactWrapCopyButton}
                onClick={() => copyToClipBoard('Jet#8854')}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
                  <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <GoToPage className={styles.goToButton} href='/projects'>
        See all projects
      </GoToPage>
    </div>
  );
};
export default about;
