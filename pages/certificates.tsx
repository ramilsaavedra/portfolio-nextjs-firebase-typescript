import type { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Certificates.module.css';
import CustomLink from '../components/CustomLink';
import { fetchCertificates } from '../lib/firebase/certificateAction';

const Certificates: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ certificates }) => {
  return (
    <div className='container'>
      <Head>
        <title>Certificates | Ramil Saavedra</title>
      </Head>
      <h1>Certificates</h1>
      <p className={styles.subheading}>List of my udemy course certificates</p>
      <div className={styles.certificates}>
        {certificates &&
          certificates.map((certificate) => (
            <div className={styles.certificate} key={certificate.id}>
              <Image
                src={certificate.imageSrc}
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

export const getStaticProps = async () => {
  const certificates = await fetchCertificates();

  return { props: { certificates } };
};

export default Certificates;
