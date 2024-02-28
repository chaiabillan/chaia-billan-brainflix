// import './App.css';
import './App.scss'
import Navbar from './components/Component/Navbar/Navbar';
// import VideoPlayer from './components/Component/VideoPlayer/VideoPlayer';
// import currentVideoData from './data/video-details.json'
// import nextVideoData from './data/videos.json'
// import VideoPlayerDetails from './components/Component/VideoPlayerDetails/VideoPlayerDetails';
// import VideoPlayerComments from './components/Component/VideoPlayerComments/VideoPlayerComments';
// import VideoList from './components/Component/VideoNext/VideoNext';
// import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';


function App() {

  // const [activeVideo, setActiveVideo] = useState(currentVideoData[0]);

  // function updateActiveVideo ( clickedID ) {
  //   const newActiveVideo = currentVideoData.find((video) => video.id === clickedID)

  //   setActiveVideo(newActiveVideo);
  // }

  return (
    <div className="App">
      <BrowserRouter>
        < Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} /> 

            
        </Routes>
      </BrowserRouter>
    </div>
    
  );
  
}

export default App;
