import React, { Component } from 'react';
import './App.css';
import SideBar from './components/Sidebar';
import Video from './components/Video';
import { Provider } from 'react-redux';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={ store}>
          <Video />
          <SideBar />
        </Provider>
          
      </div>
    )
  }
}


export default App;
