import './VideoPlayer.scss' 

function VideoPlayer({currentVideoData}) {
    const {
        image, 
        duration
    } = currentVideoData;


    return (
        <section className="video-player">
            <video className="video-player__image" poster={image} controls></video>
            <div>{duration}</div>
        </section>
    )
}

export default VideoPlayer