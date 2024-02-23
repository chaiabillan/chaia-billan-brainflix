import './VideoPlayerDetails'

function VideoPlayerDetails({currentVideoDetails}) {
    const {
        title, 
        channel, 
        timestamp, 
        views, 
        likes, 
        description
    } = currentVideoDetails;

    return (
        <section>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <div>
                    <h2>By {channel}</h2>
                    <p>{timestamp}</p>
                </div>
                <div>
                    <div>
                        {views}
                    </div>
                    <div>
                        {likes}
                    </div>
                </div>
            </div>
            <div>
                {description}
            </div>
        </section>
    )
}

export default VideoPlayerDetails