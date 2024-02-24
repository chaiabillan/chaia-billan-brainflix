import './VideoPlayer.scss' 

function VideoPlayer({currentVideoData}) {
    const {
        image, 
        duration
    } = currentVideoData;


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