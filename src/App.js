import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './global/styles/index.css';
import Video from './components/Video';
import UploadVideo from './components/UploadVideo';
import { getVideosRequest } from './redux/actions/video';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosRequest());
  }, [dispatch]);

  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Video} />
          <Route exact path="/upload" component={UploadVideo} />
        </Switch>
    </Router>
  );
};

export default App;
