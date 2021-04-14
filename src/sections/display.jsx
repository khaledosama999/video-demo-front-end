import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item from '../components/item';

const DisplayVideo = () => {
  const [videos, setVideos] = useState([]);

  const getVideosService = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}videos?limit=1000`);

    setVideos(response.data.videos || []);
  };

  useEffect(() => {
    getVideosService();
  }, []);

  const cards = videos
    .map(({ title, url, description }) => (
      <Item
        title={title}
        url={url}
        description={description}
      />
    ));

  return (
    <ul>
      {cards}
    </ul>
  );
};

export default DisplayVideo;
