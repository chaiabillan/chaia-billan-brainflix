import './VideoNavItem.scss';
import { Link } from 'react-router-dom';

function VideoNavItem ( { video, isActive, updateActiveVideo, isCurrentVideo } ) {
    
    let className = "video-next__indiv";
    if (isActive) {
        className += " video-next__indiv--selected";
    }

    if (isCurrentVideo) {
        return null;
    }

    const handleClick = () => {
        updateActiveVideo(video.id);
    }
    
    return (
        <Link to ={`/videos/${video.id}`}>
            <div onClick = {handleClick} className={className}>
                <div className="video-next__indiv--image">
                    <img className="video-next__indiv--image--src" src={video.image} alt={video.title} />
                </div>
                <div className="video-next__indiv--text">
                    <h3 className="video-next__indiv--text--title demi">{video.title}</h3>
                    <p className="video-next__indiv--text--channel regular">{video.channel}</p>
                </div>
            </div>
        </Link>
    )
}


export default VideoNavItem