import VideoPlayer from '../../components/Component/VideoPlayer/VideoPlayer';
import VideoPlayerDetails from '../../components/Component/VideoPlayerDetails/VideoPlayerDetails';
import VideoPlayerComments from '../../components/Component/VideoPlayerComments/VideoPlayerComments';
import VideoList from '../../components/Component/VideoNext/VideoNext';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"

function HomePage () {
    const { videoId } = useParams();

    const [videoList, setVideoList] = useState([]);
    const [activeVideo, setActiveVideo] = useState(); 
    const [loaded, setLoaded] = useState(false);
    const {apiKey, baseURL} = {apiKey:'c1b34c15-ee8a-45e3-a5f3-461d51880189', baseURL: 'https://unit-3-project-api-0a5620414506.herokuapp.com'}


    useEffect(() => {
        const fetchVideos = async() => {
            try {
                const allData = await axios.get(`${baseURL}/videos?api_key=${apiKey}`);
                console.log(allData.data);
                setVideoList(allData.data);
                setLoaded(true);
                return videoList;
            } catch(error) {
                console.log(error);
                setLoaded(false);
            }
        }
        fetchVideos();
    }, []);

    useEffect(() => {
        console.log(videoList);
        
        if (!videoList || videoList.length === 0) {
            return;
        } 

        const activeVideo = videoId || videoList[0].id
        
        const fetchVideoData = async() => {

            try {
                const specificData = await axios.get(`${baseURL}/videos/${activeVideo}?api_key=${apiKey}`)
                setActiveVideo(specificData.data);
                console.log(specificData.data);
                setLoaded(true);
                return activeVideo;
            } catch(error) {
                console.log(error);
                setLoaded(false);
            }
            
        }
        fetchVideoData();
    }, [videoList, videoId])

    return (
        <>
        {loaded && (
            <>
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
                            videoList={videoList} 
                            activeVideo={activeVideo}
                            updateActiveVideo={setActiveVideo}
                        />
                    </div>
                </div>  
            </>  
        )}
            
        </>    
    )
}

export default HomePage