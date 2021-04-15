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
    .map(({ title, url }, index) => (
      <Item
        title={`${index + 1}. ${title}`}
        url={url}
      />
    ));

  return (
    <ol className="list-group list-group-numbered" style={{ marginTop: '10px' }}>
      {cards}
    </ol>
  );
};

export default DisplayVideo;
