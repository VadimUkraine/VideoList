import React, { useState } from 'react';
import './FileInputField.css';

const FileInputField = () => {

  const [file, setFile] = useState('');

  const handleChange = ({ target }) => {
    if (target.files) {
      setFile(target.files[0]);
    }
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
          <button type="button" className="file-upload-btn">Upload file</button>
        </div>
      )}
    </div>
  );
};

export default FileInputField;
