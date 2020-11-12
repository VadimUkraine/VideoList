import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchVideosRequest, getVideosRequest } from '../../redux/actions/video';
import SearchForm from './SearchForm';
import VideoList from './VideoList';
import './Video.css';

const Video = () => {

  const list = useSelector((state) => state.video.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosRequest());
  }, [dispatch]);

  const handleSearch = (searchText) => {
    dispatch(searchVideosRequest(searchText));
  };

  return (
    <div className="video-wrapper">
      <SearchForm onSearch={handleSearch} />
      <Link to="/upload" className="upload-link">Want to upload a file?</Link>
      <VideoList videos={list}/>
    </div>
  );
};

export default Video;
