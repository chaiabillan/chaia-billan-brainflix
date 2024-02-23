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
        <section>
            <p>
                NEXT VIDEOS
            </p>
            <div>
                {nextVideo.map((video) => {
                        return (
                            <div key={video.id}>
                                <h3>{video.title}</h3>
                                <p>{video.channel}</p>
                                <img src={video.image} alt={video.title} />
                            </div>
                        );
                    })
                }
                
            </div>
        </section>
    )
}

export default VideoNext