// import './App.css';
import './App.scss'
import Navbar from './components/Component/Navbar/Navbar';
import VideoPlayer from './components/Component/VideoPlayer/VideoPlayer';
import currentVideoData from './data/video-details.json'
import nextVideoData from './data/videos.json'
import VideoPlayerDetails from './components/Component/VideoPlayerDetails/VideoPlayerDetails';
import VideoPlayerComments from './components/Component/VideoPlayerComments/VideoPlayerComments';
import VideoList from './components/Component/VideoNext/VideoNext';
import React, { useState } from 'react';

function App() {

  const [activeVideo, setActiveVideo] = useState(currentVideoData[0]);

  function updateActiveVideo ( clickedID ) {
    const newActiveVideo = currentVideoData.find((video) => video.id === clickedID)

    setActiveVideo(newActiveVideo);
  }

  return (
    <div className="App">
      < Navbar />
      < VideoPlayer
      currentVideoData={activeVideo}
      />
      <div className='bottom-half'>
        <div className='bottom-half__left'>
          <VideoPlayerDetails 
          currentVideoData={activeVideo}
          />
          <VideoPlayerComments 
          currentVideoData={activeVideo}
          />
        </div>
        <div className='bottom-half__right'>
          <VideoList 
          videoList={nextVideoData} 
          activeVideo={activeVideo}
          updateActiveVideo={updateActiveVideo}
          />
        </div>
        
      </div>
      
    </div>
    
  );
  
}

export default App;
