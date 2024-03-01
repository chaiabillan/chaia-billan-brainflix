import { useParams } from "react-router-dom"
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoPlayerDetails from "../VideoPlayerDetails/VideoPlayerDetails";
import VideoList from "../VideoNext/VideoNext";
import VideoPlayerComments from "../VideoPlayerComments/VideoPlayerComments";
// import videoList from 

function VideoDetails({ videoList, setActiveVideo }) {
    const { videoId } = useParams();

    const videoList1 = videoList;

    console.log(videoList);

    if (!videoList) {
        return <p>Loading...</p>;
    }
    if (!videoList || videoList.length === 0) {
        return <p>Loading...</p>;
    }
    console.log(videoList)

    const selectedVideo = videoList1.filter(video => video.id === videoId);
    // const selectedVideo = videoList.videoID;

    // console.log(selectedVideo);

    console.log(videoList);

    if (!selectedVideo) {
        return <p>Video not found</p>;
    }
    // function updateActiveVideo ( clickedID ) {
    //     const newActiveVideo = currentVideoData.find((video) => video.id === clickedID)
    // setActiveVideo(newActiveVideo);
    // }
    // updateActiveVideo doesnt exist anymore. 
    // we dont need the clicked ID because we will have the <Link/> on each
    //  VideoNavItem list item 
    // then we set a const which is equal to the video data.find
        // and we need to find the video.id which is equal to the nav item that 
        // was clicked on
    // then need an if statement were if the id doesnt exist to navigate to home


    return (
            <>
            
                    < VideoPlayer
                    currentVideoData={selectedVideo}
                    />
                    <div className='bottom-half'>
                        <div className='bottom-half__left'>
                            <VideoPlayerDetails 
                                currentVideoData={selectedVideo}
                            />
                            <VideoPlayerComments 
                                currentVideoData={selectedVideo}
                            />
                        </div>
                        <div className='bottom-half__right'>
                            <VideoList 
                                videoList={videoList} 
                                activeVideo={selectedVideo}
                                updateActiveVideo={setActiveVideo}
                            />
                        </div>
                    </div>  
                </>  
            )
        }
         
    


export default VideoDetails
