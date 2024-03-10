import './VideoPlayer.scss' 

function VideoPlayer({currentVideoData}) {
    if (!currentVideoData) {
        return <p>Loading...</p>;
    }
    
    // retrieve the image data from the server
    const {
        image
    } = currentVideoData;


    // display the poster image of the video in the video player component
    return (
        <section className="video-player">
            <video className="video-player__image" poster={image} controls></video>
        </section>
    )
}

export default VideoPlayer