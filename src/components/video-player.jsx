import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
  const { url } = useParams();

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        controls
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
