import type { NextPage, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Head from 'next/head';
import styles from '../styles/TopTracks.module.css';
import { getTopTracks } from '../lib/spotify';
import Image from 'next/image';

const topTracks: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  return (
    <div className='container'>
      <Head>
        <title>Top Tracks | Ramil Saavedra</title>
      </Head>
      <h1>Top Tracks</h1>
      {data.items && (
        <ol className={styles.tracks}>
          {data.items.map((track, index) => (
            <li key={index} className={styles.track}>
              <div className={styles.trackDiv}>
                <div className={styles.trackImg}>
                  <Image
                    src={track.album.images[2].url}
                    alt={track.name}
                    height={50}
                    width={50}
                  />
                </div>

                <a
                  href={track.external_urls.spotify}
                  target='_blank'
                  rel='noreferrer'
                >
                  {track.name}
                </a>
                <div className={styles.artists}>
                  {track.artists.map((artist, index) => (
                    <a
                      key={index}
                      href={artist.external_urls.spotify}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {artist.name}
                      {track.artists.length === index + 1 ? ' ' : ', '}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const topTracks: SpotifyApi.UsersTopTracksResponse = await getTopTracks();

  return { props: { data: topTracks } };
};

export default topTracks;
