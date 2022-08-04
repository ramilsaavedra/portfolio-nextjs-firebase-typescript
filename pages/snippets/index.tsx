import type { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styles from '../../styles/Snippets.module.css';
import Contact from '../../layout/Contact';
import CodeSnippet from '../../components/CodeSnippet';
import { fetchCodeSnippets } from '../../lib/firebase/codeSnippetsAction';

const snippets: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <>
      <div className={`container ${styles.container}`}>
        <Head>
          <title>Code Snippets | Ramil Saavedra</title>
        </Head>
        <h1 className={styles.heading}>Code Snippets</h1>
        <p className={styles.subheading}>
          Collection of random code snippets that I have used in the past and
          can be used in multiple projects for faster development
        </p>
        <div className={styles.codeWrap}>
          {data &&
            data.map((code) => (
              <CodeSnippet
                href={{
                  pathname: `/snippets/${code.slug}`,
                }}
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

export const getStaticProps = async () => {
  const data = await fetchCodeSnippets();

  return { props: { data } };
};

export default snippets;
