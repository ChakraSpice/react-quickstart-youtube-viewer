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
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('cats');
  }
  
  videoSearch(term) {
    YTSearch({ key: apiKey, term }, (videos) => {
      this.setState({ 
        videos,
        selectedVideo: videos[0] 
      });
    });
  }

  render() {
    return (
        <div>
          <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
      );
  }
};

ReactDOM.render(
  <App/>,
  document.querySelector('.container')
);
