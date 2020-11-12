const { GraphQLUpload } = require('graphql-upload');
const videos = require('../db/videos');

module.exports = {

  Upload: GraphQLUpload,

  getVideos() {
    return videos;
  },

  saveFile({ video }) {
    const newVideo = {
      id: video.id,
      name: video.name,
      size: video.size,
      type: video.type,
    };
    videos.push(newVideo);
    return true;
  },

  getSearchVideos({ search: { text } }) {
    if (text.length) {
      return videos.filter((video) => video.name.includes(text));
    }
    return videos;
  },
};
