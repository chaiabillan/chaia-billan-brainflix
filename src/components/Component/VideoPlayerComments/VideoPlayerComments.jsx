import './VideoPlayerComments.scss'

function VideoPlayerComments({currentVideoData}) {
    const {
        comments
    } = currentVideoData;

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      };

    return (
        <section>
            <div class="comment">
                <div class="comment__picture">
                    <span class="comment__picture--icon comment__picture--icon--mohan"></span>
                </div>
                <form id = "add-comment-form" class="comment__form">
                        <label class="comment__form--label comment__form--comment regular">
                            JOIN THE CONVERSATION
                        </label>
                        <textarea class="comment__form--field comment__form--field--comment regular" type="text" name="comment" placeholder="Add a new comment"></textarea>
                        
                        <div class="comment__form--button">
                            <button class="comment__form--button--content regular" type="submit">COMMENT</button>
                        </div>
                        <div class="comment__form--bottom">
                            <p class="comment__form--bottom--error regular" id="add-comment-form-errors"></p> 
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
                                <p class="posts__info--name demi">{comment.name}</p>
                                <p class="posts__info--date regular">{formatDate(comment.timestamp)}</p>
                            </div>    
                            <div className='posts__content'>
                                <p class="posts__content--inside regular">{comment.comment}</p>
                            </div>
                        </div>    

                        
                        
                        {/* <p className="comment-likes">
                            {comment.likes} likes
                        </p> */}
                        
                    </div>
                ))}
            </div>
        </section>
    )
}


export default VideoPlayerComments