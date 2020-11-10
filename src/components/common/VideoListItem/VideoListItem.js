import React from 'react';
import PropTypes from 'prop-types';
import './VideoListItem.css';

const VideoListItem = ({ video }) => (
  <div className="video-list-item">
    <p className="video-list-item__name">{video.name}</p>
    <p className="video-list-item__duration">{video.duration}</p>
    <p className="video-list-item__size">{video.size}</p>
  </div>
);

export default VideoListItem;

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired,
};
