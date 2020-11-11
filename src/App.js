import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './global/styles/index.css';
import Video from './components/Video';
import UploadVideo from './components/UploadVideo';

const App = () => (
    <Router>
        <Switch>
          <Route exact path="/" component={Video} />
          <Route exact path="/upload" component={UploadVideo} />
        </Switch>
    </Router>
);

export default App;
