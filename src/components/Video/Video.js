import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchForm from '../common/SearchForm';
import VideoList from './VideoList';
import './Video.css';

const Video = () => {

  const [search, setSearch] = useState('');
  const list = useSelector((state) => state.video.list);

  const handleSearch = (text) => {
    setSearch(text);
  };

  const videos = useMemo(() => {
    if (!search.length) {
      return list;
    }

    return list.filter((item) => item.name.includes(search));
  }, [search, list]);

  return (
    <div className="video-wrapper">
      <SearchForm onSearch={handleSearch} search={search} />
      <Link to="/upload" className="upload-link"> Want to upload a file?</Link>
      <VideoList videos={videos}/>
    </div>
  );
};

export default Video;
