import './App.css';
import Navbar from './components/Component/Navbar/Navbar';
import VideoPlayer from './components/Component/VideoPlayer/VideoPlayer';
import currentVideoData from './data/video-details.json'
import VideoPlayerDetails from './components/Component/VideoPlayerDetails/VideoPlayerDetails';
import VideoPlayerComments from './components/Component/VideoPlayerComments/VideoPlayerComments';

function App() {

  const currentVideo = currentVideoData[1];
  const currentVideoDetails = currentVideoData[1];
  const currentVideoComments = currentVideoData[1];


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
    </div>
  );
}

export default App;
