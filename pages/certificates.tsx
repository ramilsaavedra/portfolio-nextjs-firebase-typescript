import type { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Certificates.module.css';
import CustomLink from '../components/CustomLink';
import {
  certificates as certificatesData,
  CertificatesProps,
} from '../mock_data/certificates';

const certificates: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ data }) => {
  return (
    <div className='container'>
      <Head>
        <title>Certificates | Ramil Saavedra</title>
      </Head>
      <h1>Certificates</h1>
      <p className={styles.subheading}>List of my udemy course certificates</p>
      <div className={styles.certificates}>
        {data &&
          data.map((certificate) => (
            <div className={styles.certificate} key={certificate.id}>
              <Image
                src={certificate.src}
                width={760}
                height={560}
                alt={certificate.title}
              />
              <div className={styles.certificateDiv}>
                <h4>{certificate.title}</h4>
                <p>{certificate.instructor}</p>
                <CustomLink type='home' href={certificate.link}>
                  Certificate Link
                </CustomLink>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const data: CertificatesProps[] = certificatesData;

  return { props: { data } };
};

export default certificates;
