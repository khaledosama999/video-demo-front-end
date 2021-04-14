import React from 'react';
import {
  Container,
} from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/nav';
import VideoPlayer from './components/video-player';
import DisplayVideo from './sections/display';
import UploadSection from './sections/upload';

function App() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Switch>
          <Route path="/upload"><UploadSection /></Route>
          <Route path="/video/:name">
            <VideoPlayer />
          </Route>
          <Route path="/">
            <DisplayVideo />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
