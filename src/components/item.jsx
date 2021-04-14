import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VideoCard = ({
  title = 'This is a video',
  description,
  url,
}) => {
  const strSplit = encodeURI(url).split('/');
  const videoName = strSplit[strSplit.length - 1];

  return (
    <Link to={`/video/${videoName}`}>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{title}</div>
          {description}
        </div>
      </li>
    </Link>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default VideoCard;
