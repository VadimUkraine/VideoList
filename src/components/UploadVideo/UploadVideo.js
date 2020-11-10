import React from 'react';
import { Link } from 'react-router-dom';
import FileInputField from '../common/FileInputField';
import './UploadVideo.css';

const UploadVideo = () => (
    <div className="upload-video-wrap">
      <FileInputField />
      <Link to="/" className="video-list-link"> Back to the list?</Link>
    </div>
);

export default UploadVideo;
