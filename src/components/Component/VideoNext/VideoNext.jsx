import './VideoNext.scss'

// function VideoNext(props) {
function VideoList({VideoList}) {

    // const nextVideo = props.nextVideo;
    const {
        // id,
        // image,
        // title,
        // channel
    } = VideoList;

    return (
        <section className ="video-next">
            <p className="video-next__title regular">
                NEXT VIDEOS
            </p>
            <div className="video-next__options">
                {/* {nextVideo.map((video) => {
                        return (
                            <div className="video-next__indiv"key={video.id}>
                                <div className="video-next__indiv--image">
                                    <img className="video-next__indiv--image--src" src={video.image} alt={video.title} />
                                </div>
                                <div className="video-next__indiv--text">
                                        <h3 className="video-next__indiv--text--title demi">{video.title}</h3>
                                        <p className="video-next__indiv--text--channel regular">{video.channel}</p>
                                </div>
                            </div>
                        );
                    })
                } */}
            </div>
        </section>
    )
}

export default VideoList