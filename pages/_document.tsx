import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

const Document = (props: DocumentProps) => {
  return (
    <Html>
      <Head>
        <meta charSet='UTF-8' />
        <link
          href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
