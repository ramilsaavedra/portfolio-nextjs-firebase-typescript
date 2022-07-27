import React, { useState, useEffect } from 'react';
import { getCurrentlyPlaying } from '../../lib/spotify';
import Image from 'next/image';
import style from './SpotifyCurrentlyPlaying.module.css';

interface TrackDataObject
  extends Omit<SpotifyApi.CurrentlyPlayingObject, 'item'> {
  item: SpotifyApi.TrackObjectFull;
}

const SpotifyCurrentlyPlaying: React.FC = () => {
  const [data, setData] = useState<TrackDataObject>();

  useEffect(() => {
    nowPlaying();
  }, []);

  const nowPlaying = async () => {
    const res = await getCurrentlyPlaying();
    console.log(res);
    setData(res);
  };

  const artistsNameHandler = (artists: SpotifyApi.ArtistObjectSimplified[]) => {
    let artistsName = '';

    artists.map((artist, index) => {
      if (artists.length === index + 1) {
        artistsName += `${artist.name}`;
      } else {
        artistsName += `${artist.name}, `;
      }
    });

    return artistsName;
  };

  if (
    !data ||
    !data['is_playing'] ||
    data.currently_playing_type !== 'track' ||
    !data.item
  ) {
    return (
      <div className={style.wrap}>
        <svg
          width='40'
          height='40'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.9846 0.0527344C7.18331 0.0527344 0.0481567 7.1877 0.0481567 15.9889C0.0481567 24.7906 7.18331 31.925 15.9846 31.925C24.7867 31.925 31.9211 24.7906 31.9211 15.9889C31.9211 7.18827 24.7869 0.0527344 15.9846 0.0527344ZM23.2929 23.0373C23.0074 23.5055 22.3947 23.6539 21.9265 23.3665C18.1848 21.081 13.4745 20.5634 7.9272 21.8308C7.39264 21.9526 6.8598 21.6177 6.73801 21.0829C6.61564 20.5482 6.94924 20.0153 7.48513 19.8935C13.5557 18.5066 18.7629 19.1038 22.9637 21.671C23.4318 21.9583 23.5802 22.5692 23.2929 23.0373ZM25.2435 18.6981C24.8838 19.2827 24.1188 19.4673 23.5346 19.1076C19.2509 16.4746 12.7211 15.7121 7.65431 17.2501C6.9972 17.4486 6.30317 17.0782 6.10373 16.4223C5.90582 15.7651 6.27634 15.0724 6.9323 14.8726C12.7199 13.1165 19.915 13.9672 24.8343 16.9901C25.4185 17.3498 25.6031 18.1146 25.2435 18.6981ZM25.4109 14.1796C20.2747 11.1288 11.8006 10.8483 6.89672 12.3367C6.10925 12.5755 5.27649 12.131 5.03785 11.3435C4.79922 10.5556 5.24338 9.72346 6.03142 9.48406C11.6607 7.77516 21.0188 8.10533 26.9322 11.6158C27.642 12.0362 27.8742 12.951 27.4536 13.6583C27.035 14.3666 26.1169 14.6001 25.4109 14.1796Z'
            fill='#57B65F'
          />
        </svg>
        <p className={style.name}>Not playing</p>
        <p className={style.artists}>&#8212; Spotify</p>
      </div>
    );
  }

  return (
    <a
      className={style.wrap}
      href={data.item.external_urls.spotify}
      target='_blank'
      rel='noreferrer'
    >
      <Image
        src={data.item.album.images[2].url}
        alt={data.item.name}
        height={40}
        width={40}
      />
      <p className={style.name}>{data.item.name}</p>
      {/* <p className={style.artists}>&#8212; {data.item.artists[0].name}</p> */}
      <p className={style.artists}>
        &#8212; {artistsNameHandler(data.item.artists)}
      </p>
    </a>
  );
};
export default SpotifyCurrentlyPlaying;
