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
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <meta
          name='description'
          content='Hi!👋 I am a full stack web developer from the Philippines. I love spending
            my time admiring the beauty of web development, from learning new
            technologies to building a web application that can heavily
            contribute to the community.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Ramil Saavedra | Full Stack Web Developer'
        />
        <meta property='og:site-name_title' content='Ramil Saavedra' />
        <meta
          property='og:description'
          content='Hi!👋 I am a full stack web developer from the Philippines. I love spending
            my time admiring the beauty of web development, from learning new
            technologies to building a web application that can heavily
            contribute to the community.'
        />
        <meta
          property='og:image'
          content='/static/images/ramil-saavedra-og.png'
        />
        <meta
          property='og:image:alt'
          content='Ramil Saavedra | Full Stack Web Developer'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@SaavedraRamil' />
        <meta name='twitter:image' content='/static/images/twitter-image.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
