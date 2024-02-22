import './App.css';
import Navbar from './components/Component/Navbar/Navbar';
import VideoPlayer from './components/Component/VideoPlayer/VideoPlayer';
import currentVideoData from './data/video-details.json'
import VideoPlayerDetails from './components/Component/VideoPlayerDetails/VideoPlayerDetails';

function App() {

  const currentVideo = currentVideoData[0];
  const currentVideoDetails = currentVideoData[0];


  return (//
    <div className="App">
      < Navbar />
      < VideoPlayer
      currentVideo={currentVideo}
      />
      <VideoPlayerDetails 
      currentVideoDetails={currentVideoDetails}
      />
    </div>
  );
}

export default App;
