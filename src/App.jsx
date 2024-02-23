import './App.css';
import Navbar from './components/Component/Navbar/Navbar';
import VideoPlayer from './components/Component/VideoPlayer/VideoPlayer';
import currentVideoData from './data/video-details.json'
import nextVideoData from './data/videos.json'
import VideoPlayerDetails from './components/Component/VideoPlayerDetails/VideoPlayerDetails';
import VideoPlayerComments from './components/Component/VideoPlayerComments/VideoPlayerComments';
import VideoNext from './components/Component/VideoNext/VideoNext';

function App() {

  const currentVideo = currentVideoData[1];
  const currentVideoDetails = currentVideoData[1];
  const currentVideoComments = currentVideoData[1];
  const nextVideo = nextVideoData;

  return (//
    <div className="App">
      < Navbar />
      < VideoPlayer
      currentVideo={currentVideo}
      />
      <VideoPlayerDetails 
      currentVideoDetails={currentVideoDetails}
      />
      <VideoPlayerComments 
      currentVideoComments={currentVideoComments}
      />
      <VideoNext 
      nextVideo={nextVideo} //this holds the next video data
      />
    </div>
  );
}

export default App;
