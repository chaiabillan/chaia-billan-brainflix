import VideoNavItem from '../VideoNavItem/VideoNavItem';
import './VideoNext.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';


function VideoList({ activeVideo, updateActiveVideo }) {

    const [nextVideo, setNextVideo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNextVideoData = async() => {
            const api_url = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
            const api_key = 'c1b34c15-ee8a-45e3-a5f3-461d51880189';
            const videos = 'videos';

            try {
                const response = await axios.get(`${api_url}/${videos}?api_key=${api_key}`)
                // console.log(response.data); 
                setNextVideo(response.data);
                // nextVideo = response.data;
                setLoading(false);
            } catch(error) {
                console.log(error);
                setLoading(true);
            }
        }
        fetchNextVideoData();
    }, []);


// function VideoList({ activeVideo, updateActiveVideo }) {
//     const [loading, setLoading] = useState(true);
//     let nextVideo = [];

//     useEffect(() => {
//         const fetchNextVideoData = async () => {
//             const api_url = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
//             const api_key = 'c1b34c15-ee8a-45e3-a5f3-461d51880189';
//             const videos = 'videos';

//             try {
//                 const response = await axios.get(`${api_url}/${videos}?api_key=${api_key}`);
//                 nextVideo = response.data;
//                  console.log(nextVideo)
//                 setLoading(false);
//             } catch (error) {
//                 console.log(error);
//                 setLoading(true);
//             }
//         };
//         fetchNextVideoData();
//     }, []);


    if (loading) {
        return <p>loading</p>
    }

    return (
        <section className ="video-next">
            <p className="video-next__title regular">
                NEXT VIDEOS
            </p>
            <div className="video-next__options">
                {/* {videoList.map((video) => { */}
                {nextVideo.map((video) => {
                        return (
                            <VideoNavItem
                                key={video.id}
                                video={video}
                                parentClass="video-next__options"
                                isActive={video.id === activeVideo.id}
                                updateActiveVideo={updateActiveVideo}
                                isCurrentVideo={video.id === activeVideo.id}
                            />
                        );
                    })
                }
            </div>
        </section>
    )
}

export default VideoList