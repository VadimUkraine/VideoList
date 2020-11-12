import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchVideosRequest, getVideosRequest } from '../../redux/actions/video';
import SearchForm from './SearchForm';
import VideoList from './VideoList';
import './Video.css';

const Video = () => {

  const [searchText, setSearchText] = useState('');
  const list = useSelector((state) => state.video.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosRequest());
  }, [dispatch]);

  const handleInputText = (text) => {
    setSearchText(text);
  };

  const handleSearch = () => {
    dispatch(searchVideosRequest(searchText));
  };

  return (
    <div className="video-wrapper">
      <SearchForm onSearch={handleSearch} onInputText={handleInputText} text={searchText} />
      <Link to="/upload" className="upload-link"> Want to upload a file?</Link>
      <VideoList videos={list}/>
    </div>
  );
};

export default Video;
