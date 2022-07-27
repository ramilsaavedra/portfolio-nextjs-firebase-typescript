import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Snippets.module.css';
import GoToPage from '../components/GoToPage';
import ProjectItem from '../components/ProjectItem';
import Contact from '../layout/Contact';
import CodeSnippet from '../components/CodeSnippet';
import codes from '../mock_data/codes';

const snippets: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Code Snippets | Ramil Saavedra</title>
        </Head>
        <h1 className={styles.heading}>Code Snippets</h1>
        <p className={styles.subheading}>
          Collection of random code snippets that I have used in the past and
          can be used in multiple projects for faster development
        </p>
        <div className={styles.codeWrap}>
          {codes.map((code) => (
            <CodeSnippet
              key={code.id}
              title={code.title}
              description={code.description}
              tech={code.tech}
            />
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
};
export default snippets;
