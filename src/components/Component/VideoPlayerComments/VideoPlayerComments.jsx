import './VideoPlayerComments.scss'
import comment from '../../../assets/images/Icons/add_comment.svg'

function VideoPlayerComments({currentVideoData}) {
    if (!currentVideoData || !currentVideoData.comments) {
        return <p>Loading...</p>;
    }

    const {
        comments
    } = currentVideoData;

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      };

    return (
        <section>
            <div className="comment">
                <div className="comment__picture">
                    <span className="comment__picture--icon comment__picture--icon--mohan"></span>
                </div>
                <form id = "add-comment-form" className="comment__form">
                        <label className="comment__form--label comment__form--comment demi">
                            JOIN THE CONVERSATION
                        </label>
                        <div className='comment__form--field--tablet'>
                            <textarea className="comment__form--field comment__form--field--comment regular" type="text" name="comment" placeholder="Add a new comment"></textarea>
                            
                            <div className="comment__form--button">
                                <button className="comment__form--button--content demi" type="submit"><img className="comment__form--button--content--icon" src={comment} alt="comment icon"/>COMMENT</button>
                            </div>
                        </div>
                        <div className="comment__form--bottom">
                            <p className="comment__form--bottom--error regular" id="add-comment-form-errors"></p> 
                        </div>
                    
                </form>
            </div>
            <div className="comment__posted">
                {comments.map(comment => (
                    <div key={comment.id} className="comment comment--posted">
                        <div className='comment__picture'>
                            <span className='comment__picture--icon'></span>
                        </div>    
                        <div className='comment__form posts'>
                            <div className='posts__info'>
                                <p className="posts__info--name demi">{comment.name}</p>
                                <p className="posts__info--date regular">{formatDate(comment.timestamp)}</p>
                            </div>    
                            <div className='posts__content'>
                                <p className="posts__content--inside regular">{comment.comment}</p>
                            </div>
                        </div>    
                    </div>
                ))}
            </div>
        </section>
    )
}


export default VideoPlayerComments