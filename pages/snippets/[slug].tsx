import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';
import { useRouter } from 'next/router';
import styles from '../../styles/Snippets.module.css';
import Head from 'next/head';
import {
  fetchCodeSnippet,
  fetchCodeSnippets,
  CodesProps,
} from '../../lib/firebase/codeSnippetsAction';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface SnippetProps {
  code: CodesProps;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchCodeSnippets();

  const paths = data!.map((code) => ({
    params: { slug: code.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<SnippetProps, Params> = async (
  context
) => {
  const { slug } = context.params!;
  const data = await fetchCodeSnippet(slug);

  if (data) {
    return { props: { code: data } };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

const Snippet: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const { code } = props;
  const router = useRouter();

  return (
    <div className='container'>
      <Head>
        <title>{code.title} | Ramil Saavedra</title>
      </Head>
      <div className={styles.backButton} onClick={() => router.back()}>
        <svg
          width='15'
          height='7'
          viewBox='0 0 15 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.00031 3.59228L0.6734 3.21395L0.235559 3.59228L0.6734 3.97061L1.00031 3.59228ZM4.32721 5.80618L1.32721 3.21395L0.6734 3.97061L3.6734 6.56284L4.32721 5.80618ZM1.32721 3.97061L4.32721 1.37837L3.6734 0.621714L0.6734 3.21395L1.32721 3.97061ZM1.00031 4.09228L15.0003 4.09228V3.09228L1.00031 3.09228V4.09228Z'
            fill='var(--primary)'
          />
        </svg>
        Back
      </div>
      <h3>{code.title}</h3>
      <p className={styles.codeDescription}>{code.description}</p>
      <SyntaxHighlighter tech={code.tech} code={code.code} />
    </div>
  );
};

export default Snippet;
