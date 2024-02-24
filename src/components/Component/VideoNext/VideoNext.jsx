import VideoNavItem from '../VideoNavItem/VideoNavItem';
import './VideoNext.scss'

function VideoList({ videoList, activeVideo, updateActiveVideo }) {

    return (
        <section className ="video-next">
            <p className="video-next__title regular">
                NEXT VIDEOS
            </p>
            <div className="video-next__options">
                {videoList.map((video) => {
                        return (
                            <VideoNavItem
                                key={video.id}
                                video={video}
                                parentClass="video-next__options"
                                isActive={video.id === activeVideo.id}
                                updateActiveVideo={updateActiveVideo}
                            />
                        );
                    })
                }
            </div>
        </section>
    )
}

export default VideoList