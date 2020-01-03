import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './Components/Search';
import List from './Components/List';
import Detail from './Components/Detail';
import axios from 'axios';


class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: termFromSearchBar,
                part:'snippet',
                key: "AIzaSyAcOMN2AMae5uMd0sN61ZIYv9N3g51xRhk",
                maxResults:20
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }





  render() 
  {
    return (
      <>
        <div className="float-left m-1 h3"><i className="fab fa-youtube"></i>MyTube</div>
        <div className="container">
          <Search handleForm = {this.handleSubmit}/>
          <div className="row">
            {this.state.selectedVideo === null ? <div>No Video has been clicked...</div> :
            <Detail  video={this.state.selectedVideo}/>
            }
            {this.state.videos.length !== 0 ?
            <List className="col-sm-3" handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>: ''
            }
          </div>
        </div>
      </>
       
    );
  }
}

export default App;
