import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from "./components/videoDetail";

// import App from './components/app';
import reducers from './reducers';

const apiKey = "AIzaSyCxVonMXnKd_vjRN7OjtisOhnjisjRftFg";

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: []
    };

    YTSearch({ key: apiKey, term: 'steel panther' }, (videos) => this.setState({ videos }));
  }
  
  render() {
    return (
        <div>
          <SearchBar/>
          <VideoDetail video={this.state.videos[1]}/>
          <VideoList videos={this.state.videos}/>
        </div>
      );
  }
};

ReactDOM.render(
  <App/>,
  document.querySelector('.container')
);
