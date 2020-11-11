const videos = require('../db/videos');

module.exports = {

  getVideos() {
    return videos;
  },

  saveVideo({ video }) {
    const newVideo = {
      id: video.id,
      name: video.name,
      size: video.size,
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
