import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/404.module.css';
const Custom404: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>Not Found | Ramil Saavedra</title>
      </Head>
      <div className={styles.div}>
        <h1 className={styles.h1}>Lost?</h1>
        <h2 className={styles.h2}>
          There is no place like{' '}
          <Link href='/'>
            <div className={styles.a}>
              <span>home</span>
            </div>
          </Link>
        </h2>
      </div>
    </div>
  );
};
export default Custom404;
