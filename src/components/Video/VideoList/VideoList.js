import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './VideoListItem';
import './VideoList.css';

const VideoList = ({ videos }) => (
    <div className="video-list-block">
      <div className="video-list-header">
        <p className="video-list-header__name">Name</p>
        <p className="video-list-header__size">Size</p>
      </div>
      {videos.map((item, index) => (<VideoListItem key={index} video={item} />))}
    </div>
);

export default VideoList;

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};
