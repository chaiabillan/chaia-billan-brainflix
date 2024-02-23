import './VideoNext.scss'

function VideoNext({nextVideo}) {
    const {
        title, 
        channel, 
        image
    } = nextVideo;

    return (
        <section>
            <p>
                NEXT VIDEOS
            </p>
            <div>
                <img src={image}/>
                <h3>
                    {title}
                </h3>
                <p>
                    {channel}
                </p>
            </div>
        </section>
    )
}

export default VideoNext