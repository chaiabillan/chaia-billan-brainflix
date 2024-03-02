import './App.scss'
import Navbar from './components/Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import VideoUpload from './pages/VideoUpload/VideoUpload';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        < Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/videos/:videoId" element={<HomePage />}/>
            <Route path="/upload" element={<VideoUpload/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
