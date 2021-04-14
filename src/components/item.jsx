import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VideoCard = ({
  title = 'This is a video',
  url,
}) => {
  const strSplit = encodeURI(url).split('/');
  const videoName = strSplit[strSplit.length - 1];

  return (
    <Link to={`/video/${videoName}`}>
      <li>{title}</li>
    </Link>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default VideoCard;
