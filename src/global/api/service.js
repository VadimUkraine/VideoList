import axios from './instance';

class VideoService {

  fetchData = async (query) => {
    try {
      const url = '/graphql';
      const response = await axios.post(url, query);
      return response.data;
    } catch (err) {
      throw new Error(`error in request: ${err}`);
    }
  };
}

export default new VideoService();
