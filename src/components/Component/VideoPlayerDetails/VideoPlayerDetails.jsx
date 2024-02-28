import './VideoPlayerDetails.scss'
import eye from '../../../assets/images/Icons/views.svg'
import like from '../../../assets/images/Icons/likes.svg'


function VideoPlayerDetails({currentVideoData}) {
    const {
        title, 
        channel, 
        timestamp, 
        views, 
        likes, 
        description
    } = currentVideoData;

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      };

    return (
        <section className = "video-details">
            <div className = "video-details__title">
                <h1 className = "video-details__title--text bold">{title}</h1>
            </div>
            <div className ="video-details__info">
                <div className ="video-details__info--left">
                    <h2 className ="video-details__info--left--channel demi">By {channel}</h2>
                    <p className ="video-details__info--left--date normal">{formatDate(timestamp)}</p>
                </div>
                <div className ="video-details__info--right">
                    <div className ="video-details__info--right--views normal">
                        <img className ="video-details__info--right--views--icon" src={eye}/>
                        {views}
                    </div>
                    <div className ="video-details__info--right--likes normal">
                        <img className ="video-details__info--right--likes--icon" src={like}/>
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