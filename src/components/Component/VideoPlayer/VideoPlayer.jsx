import './VideoPlayer.scss' 

function VideoPlayer({currentVideo}) {
    const {
        image, 
        duration
    } = currentVideo;

    return (
        <section className="video-player">
            <img className="video-player__image" src={image}/>
            <div>
                <div>
                    {duration}
                </div>
            </div>
        </section>
    )
}

export default VideoPlayer