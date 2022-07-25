import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import GoToPage from '../components/GoToPage';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ramil Saavedra | Software Engineer</title>
      </Head>
      <h1>Ramil Saavedra</h1>
      <p className={styles.subheading}>Software Engineer</p>
      <p className={styles.description}>
        Hi!👋 I’m a software engineer from the Philippines. I just love spending
        my time admiring the beauty of web development, from learning new
        technolgies to building web application that can heavily contribute to
        the community.
      </p>
      <div className={styles.ctaDiv}>
        <Button>Download CV</Button>
        <GoToPage href='/about'>Go to about page</GoToPage>
      </div>

      {/* <div className={styles.featuredProjectDiv}>
        <h2>Featured Project</h2>
      </div> */}
    </div>
  );
};

export default Home;
