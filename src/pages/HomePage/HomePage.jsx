import VideoPlayer from '../../components/Component/VideoPlayer/VideoPlayer';
import currentVideoData from '../../data/video-details.json';
import nextVideoData from '../../data/videos.json'
import VideoPlayerDetails from '../../components/Component/VideoPlayerDetails/VideoPlayerDetails';
import VideoPlayerComments from '../../components/Component/VideoPlayerComments/VideoPlayerComments';
import VideoList from '../../components/Component/VideoNext/VideoNext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage () {
    const [activeVideo, setActiveVideo] = useState(currentVideoData[0]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchNextVideoData = async() => {
    //         const api_url = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
    //         const api_key = 'c1b34c15-ee8a-45e3-a5f3-461d51880189';
    //         const videos = 'videos';
    //         // const 

    //         try {
    //             const response = await axios.get(`${api_url}/${videos}?api_key=${api_key}`)
    //             console.log(response.data); //returns an array of 9 objects that have the video next details
    //             //need to use a function here...
    //             setLoading(false);
    //         } catch(error) {
    //             console.log(error);
    //             setLoading(true);
    //         }
    //     }
    //     fetchNextVideoData();
    // })
    // if (loading) {
    //     return <p>loading</p>
    // }
    

    function updateActiveVideo ( clickedID ) {
        const newActiveVideo = currentVideoData.find((video) => video.id === clickedID)

    setActiveVideo(newActiveVideo);
    } 

    // if (loading) {
    //     return <p>loading</p>
    //   }

    return (
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
                        videoList={nextVideoData} 
                        activeVideo={activeVideo}
                        updateActiveVideo={updateActiveVideo}
                    />
                </div>
            </div>    
        </>    
    )
}

export default HomePage