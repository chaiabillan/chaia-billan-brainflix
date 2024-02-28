import VideoPlayer from '../../components/Component/VideoPlayer/VideoPlayer';
import currentVideoData from '../../data/video-details.json';
import nextVideoData from '../../data/videos.json'
import VideoPlayerDetails from '../../components/Component/VideoPlayerDetails/VideoPlayerDetails';
import VideoPlayerComments from '../../components/Component/VideoPlayerComments/VideoPlayerComments';
import VideoList from '../../components/Component/VideoNext/VideoNext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage () {
    const [activeVideo, setActiveVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideoData = async() => {
            const api_url = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
            const api_key = 'c1b34c15-ee8a-45e3-a5f3-461d51880189';
            const videos = 'videos';
            const id = "84e96018-4022-434e-80bf-000ce4cd12b8";
            // const 

            try {
                const response = await axios.get(`${api_url}/${videos}/${id}?api_key=${api_key}`)
                console.log(response.data);
                const data = response.data;
                setActiveVideo(response.data);
                // console.log(response); 
                //need to use a function here...
                // function updateActiveVideo ( clickedID ) {
                //     const newActiveVideo = response.find((video) => video.id === clickedID)
            
                // setActiveVideo(newActiveVideo);
                // } 
                setLoading(false);
            } catch(error) {
                console.log(error);
                setLoading(true);
            }
        }
        fetchVideoData();
    }, [])

    if (loading) {
        return <p>loading</p>
    }
    
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
                        updateActiveVideo={setActiveVideo}
                    />
                </div>
            </div>    
        </>    
    )
}

export default HomePage