import './VideoNavItem.scss';

function VideoNavItem ( { video, activeVideo, updateActiveVideo } ) {
    
    let className = "video-next__indiv";
    if (isActive) {
        className += "video-next__indiv--selected";
    }

    const handleClick = () => {
        updateActiveVideo(video.id);
    }
    
    return (
        <li onClick = {handleClick} className={className} key={video.id}>
            <div className="video-next__indiv--image">
                <img className="video-next__indiv--image--src" src={video.image} alt={video.title} />
            </div>
            <div className="video-next__indiv--text">
                <h3 className="video-next__indiv--text--title demi">{video.title}</h3>
                <p className="video-next__indiv--text--channel regular">{video.channel}</p>
            </div>
        </li>
    )
}


export default VideoNavItem