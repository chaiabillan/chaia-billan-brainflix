import './VideoPlayerDetails.scss'

function VideoPlayerDetails({currentVideoData}) {
    const {
        title, 
        channel, 
        timestamp, 
        views, 
        likes, 
        description
    } = currentVideoData;

    return (
        <section className = "video-details">
            <div className = "video-details__title">
                <h1 className = "video-details__title--text bold">{title}</h1>
            </div>
            <div className ="video-details__info">
                <div className ="video-details__info--left">
                    <h2 className ="video-details__info--left--channel demi">By {channel}</h2>
                    <p className ="video-details__info--left--date normal">{timestamp}</p>
                </div>
                <div className ="video-details__info--right">
                    <div className ="video-details__info--right--views normal">
                        {views}
                    </div>
                    <div className ="video-details__info--right--likes normal">
                        {likes}
                    </div>
                </div>
            </div>
            <div className = "video-details__description regular">
                {description}
            </div>
        </section>
    )
}

export default VideoPlayerDetails