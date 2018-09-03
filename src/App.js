import React, { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from './pages/home'
import Swiper from './pages/swiper'
import Music from './common/music/index'

class App extends Component {
  render() {
    const url = require('./common/music/assets/audio/background.mp3')
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Music/>
            <audio ref="audio" autoPlay loop="loop" src={url}>
				    </audio>
            <Route path='/' exact component={Home}></Route>
            <Route path='/swiper' exact component={Swiper}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
