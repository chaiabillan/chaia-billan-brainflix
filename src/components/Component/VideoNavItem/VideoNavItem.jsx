import './VideoNavItem.scss';

function VideoNavItem ( { video, isActive, updateActiveVideo, isCurrentVideo } ) {
    
    let className = "video-next__indiv";
    if (isActive) {
        className += " video-next__indiv--selected";
        //try to figur eout how to say that its not included in nav list 
    }

    if (isCurrentVideo) {
        return null;
    }

    const handleClick = () => {
        updateActiveVideo(video.id);
    }
    
    return (
        <div onClick = {handleClick} className={className}>
            <div className="video-next__indiv--image">
                <img className="video-next__indiv--image--src" src={video.image} alt={video.title} />
            </div>
            <div className="video-next__indiv--text">
                <h3 className="video-next__indiv--text--title demi">{video.title}</h3>
                <p className="video-next__indiv--text--channel regular">{video.channel}</p>
            </div>
        </div>
    )
}


export default VideoNavItem