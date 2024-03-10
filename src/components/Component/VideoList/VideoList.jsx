import VideoNavItem from '../VideoNavItem/VideoNavItem';
import './VideoNext.scss'

function VideoList({ videoList, activeVideo, updateActiveVideo }) {

    // if the videoList is empty, return a loading message
    if (videoList === 0) {
        return <p>Loading...</p>;
    }

    return (
        <section className ="video-next">
            <p className="video-next__title regular">
                NEXT VIDEOS
            </p>
            <div className="video-next__options">
                {/* map through the videos from the server and create a list composed of several nav items */}
                {videoList.map((video) => {
                        return (
                            <VideoNavItem
                                key={video.id}
                                video={video}
                                parentClass="video-next__options"
                                isActive={activeVideo && video.id === activeVideo.id}
                                updateActiveVideo={updateActiveVideo}
                                isCurrentVideo={activeVideo && video.id === activeVideo.id}
                            />
                        );
                    })
                }
            </div>
        </section>
    )
}

export default VideoList