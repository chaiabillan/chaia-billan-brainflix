import VideoPlayer from '../../components/Component/VideoPlayer/VideoPlayer';
// import currentVideoData from '../../data/video-details.json';
// import nextVideoData from '../../data/videos.json'
import VideoPlayerDetails from '../../components/Component/VideoPlayerDetails/VideoPlayerDetails';
import VideoPlayerComments from '../../components/Component/VideoPlayerComments/VideoPlayerComments';
import VideoList from '../../components/Component/VideoNext/VideoNext';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"

// import VideoDetails from '../../components/Component/NextVideoDetails/VideoDetails';

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
                // console.log(videoList);
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

    //make another useEffect that displays the first video only 

    // if (loaded) {
    //     return <p>Site is loading...</p>
    // }
    
    // function updateActiveVideo (  ) {
    //     // const newActiveVideo = currentVideoData.find((video) => video.id === clickedID)

    // setActiveVideo(data);
    // } 

    // function updateActiveVideo ( clickedID ) {
    //     const newActiveVideo = currentVideoData.find((video) => video.id === clickedID)

    // setActiveVideo(newActiveVideo);
    // } //this goes through the array of currentVideoData to find the video with the id of 
    //the one that was clicked 
    //i think we should do this in the use params (newvideodetails) page though 
    //but how do we update the active video here? do we even need to? 
    //id say that this useeffect could be used in the other page instead but i dont think
    //i can display the current video without it. i think i need to carry it over from here

    //what else do we need in the newvideodetails page? 
    //the same return statement as below bc it should have the same UI except the curr vid

    console.log(videoList);
    console.log(activeVideo)

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
                {/* <VideoDetails videoList={videoList} /> */}
            </>  
        )}
            
        </>    
    )
}

export default HomePage