import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveVideosRequest, setFiledSaved } from '../../../redux/actions/video';
import './FileInputField.css';

const FileInputField = () => {

  const dispatch = useDispatch();
  const [file, setFile] = useState('');
  const video = useSelector((state) => state.video);
  const { error, isFileSaved } = video;

  useEffect(() => {
    if (isFileSaved) {
      setTimeout(() => {
        dispatch(setFiledSaved());
      }, 1000);
    }
  }, [isFileSaved, dispatch]);

  const handleChange = ({ target }) => {
    if (target.files) {
      setFile(target.files[0]);
    }
  };

  const handleUpload = () => {
    dispatch(saveVideosRequest(file));
  };

  return (
    <div className="input-file-wrap">
      <label
        htmlFor="video_upload"
        className="input-file-label"
      >
        Choose video to upload
        <input
          id="video_upload"
          type="file"
          onChange={handleChange}
          className="input-file"
          accept="video/*"
        />
      </label>
      {file && (
        <div className="input-file-upload-wrap">
          <p className="file-title">{file.name}</p>
          <button type="button" className="file-upload-btn" onClick={handleUpload}>Upload file</button>
          {isFileSaved && (<p className="file-upload-success">Upload success</p>)}
          {error && error.upload && (<p className="file-upload-error">Error in Upload</p>)}
        </div>
      )}
    </div>
  );
};

export default FileInputField;
