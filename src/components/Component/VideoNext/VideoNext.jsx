import './VideoNext.scss'

function VideoNext(props) {
    // const {
    //     title, 
    //     channel, 
    //     image
    // } = nextVideo;
    const nextVideo = props.nextVideo;

    // console.log('nextVideo:', nextVideo);
    // console.log('Type of nextVideo:', typeof nextVideo);

    if (!Array.isArray(nextVideo)) {
        return null; // Return null or handle the case when nextVideo is not an array
    }
    // const videos = Object.values(nextVideo);


    return (
        <section className ="video-next">
            <p className="video-next__title regular">
                NEXT VIDEOS
            </p>
            <div className="video-next__options">
                {nextVideo.map((video) => {
                        return (
                            <div className="video-next__indiv"key={video.id}>
                                <div className="video-next__indiv--image">
                                    <img className="video-next__indiv--image--src" src={video.image} alt={video.title} />
                                </div>
                                <div className="video-next__indiv--text">
                                    {/* <div className="video-next__indiv--text--title demi"> */}
                                        <h3 className="video-next__indiv--text--title demi">{video.title}</h3>
                                    {/* </div> */}
                                    {/* <div> */}
                                        <p className="video-next__indiv--text--channel regular">{video.channel}</p>
                                    {/* </div> */}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default VideoNext