import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/TopTracks.module.css';
import { getTopTracks } from '../lib/spotify';
import Image from 'next/image';

const TopTracks: React.FC = () => {
  const [tracks, setTracks] = useState<SpotifyApi.UsersTopTracksResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      const res = await getTopTracks();
      setTracks(res);
      setLoading(false);
    };
    fetchTracks();
  }, []);

  return (
    <div className='container'>
      <Head>
        <title>Top Tracks | Ramil Saavedra</title>
      </Head>
      <h1>Top Tracks</h1>
      {loading ? (
        <div className={styles.loadingWrap}>
          <div className='lds-facebook'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : tracks ? (
        tracks &&
        tracks.items && (
          <ol className={styles.tracks}>
            {tracks.items.map((track, index) => (
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
        )
      ) : (
        <div className={styles.errorWrap}>
          <h1 className={styles.glitchText}>Error</h1>
          <p>Things are a little unstable</p>
          <p>Please try again later</p>
        </div>
      )}
    </div>
  );
};

export default TopTracks;
