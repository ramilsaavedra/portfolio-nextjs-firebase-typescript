import axios from 'axios';

const basic_token = process.env.NEXT_PUBLIC_BASIC_TOKEN;
const refresh_token = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

type GetRefreshableUserTokensResponse = {
  access_token: string;
  token_type: 'Bearer';
  scope: string;
  expires_in: number;
  refresh_token: string;
};

const getAccessToken = async () => {
  const params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');

  if (refresh_token) {
    params.append('refresh_token', refresh_token);
  }

  const res = await axios.post(
    'https://accounts.spotify.com/api/token',
    params,
    {
      headers: {
        Authorization: `Basic ${basic_token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentlyPlaying = async () => {
  const token: GetRefreshableUserTokensResponse = await getAccessToken();
  const res = await axios.get(
    'https://api.spotify.com/v1/me/player/currently-playing',

    {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  );

  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTopTracks = async () => {
  const token: GetRefreshableUserTokensResponse = await getAccessToken();
  const res = await axios.get(
    'https://api.spotify.com/v1/me/top/tracks',

    {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  );

  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
