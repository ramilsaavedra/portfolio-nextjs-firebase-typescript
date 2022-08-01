import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import GoToPage from '../components/GoToPage';
import ProjectItem from '../components/ProjectItem';
import Contact from '../layout/Contact';
import LinkButton from '../components/LinkButton';

const Home: NextPage = () => {
  return (
    <>
      <div className={`container ${styles.container}`}>
        <Head>
          <title>Ramil Saavedra | Software Engineer</title>
        </Head>
        <div className={styles.landing}>
          <h1>Ramil Saavedra</h1>
          <p className={styles.subheading}>Software Engineer</p>
          <p className={styles.description}>
            Hi!👋 I am a software engineer from the Philippines. I love spending
            my time admiring the beauty of web development, from learning new
            technologies to building a web application that can heavily
            contribute to the community.
          </p>
          <div className={styles.ctaDiv}>
            <LinkButton href='/static/Resume.pdf'>Download CV</LinkButton>
            <GoToPage href='/about'>Go to about page</GoToPage>
          </div>
        </div>

        <div className={styles.featuredProjectDiv}>
          <h2>Featured Project</h2>

          <ProjectItem
            title='Web Blocker'
            techs={['React', 'Typescript', 'Webpack', 'Manifest V3', 'Figma']}
            description='A chrome extension built with React and Typescript with Webpack lets the user block distracting websites to keep the user focused and improve their productivity.'
            imageSrc='/static/images/projects/webblocker.png'
            homeUrl='https://www.webblockerextension.com/'
            homeText='Visit website'
            codeUrl='https://github.com/ramilsaavedra/webblocker-chrome-v2'
            codeText='View source code'
          />
          <GoToPage className={styles.goToProjects} href='/projects'>
            Go to projects page
          </GoToPage>
        </div>

        <div className={styles.labDiv}>
          <h2>Lab</h2>
          <p className={styles.subheading}>
            This section shows what I’m currently working on or studying.
          </p>

          <ProjectItem
            title='React 2025'
            description='This course teaches how to build a production-grade SaaS business using modern technologies (Next.js, React, Firebase Authentication, Firestore, and Stripe)'
            homeUrl='https://react2025.com/'
            homeText='View course'
          />

          <ProjectItem
            title='Node with React: Fullstack Web Development'
            description='This courses teaches how to build and deploy fullstack web app with NodeJS, React, Redux, Express and MongoDB.'
            homeUrl='https://www.udemy.com/course/node-with-react-fullstack-web-development/'
            homeText='View course'
          />
          <GoToPage className={styles.goToProjects} href='/certificates'>
            View my certificates
          </GoToPage>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Home;
