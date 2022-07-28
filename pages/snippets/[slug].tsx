import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import codes, { CodesProps } from '../../mock_data/codes';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface SnippetProps {
  code: CodesProps;
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const data: CodesProps[] = codes;
  const paths = data.map((code) => ({
    params: { slug: code.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<SnippetProps, Params> = (
  context
) => {
  const { slug } = context.params!;
  const data: CodesProps | undefined = codes.find((code) => code.slug === slug);

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
  return (
    <div className='container'>
      <h2>{code.title}</h2>
      <p>{code.description}</p>
    </div>
  );
};

export default Snippet;
