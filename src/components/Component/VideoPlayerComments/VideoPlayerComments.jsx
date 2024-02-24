import './VideoPlayerComments.scss'
import comment from '../../../assets/images/Icons/add_comment.svg'

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
                        <label class="comment__form--label comment__form--comment demi">
                            JOIN THE CONVERSATION
                        </label>
                        <div className='comment__form--field--tablet'>
                            <textarea class="comment__form--field comment__form--field--comment regular" type="text" name="comment" placeholder="Add a new comment"></textarea>
                            
                            <div class="comment__form--button">
                                <button class="comment__form--button--content demi" type="submit"><img className="comment__form--button--content--icon" src={comment}/>COMMENT</button>
                            </div>
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

                        
                        
                        
                        
                    </div>
                ))}
            </div>
        </section>
    )
}


export default VideoPlayerComments


    //   const formatTimestamp = (timestamp) => {
    //     const date = new Date(timestamp);
    //     const currentDate = new Date();
    //     const timeDifference = currentDate - date;
        
    //     // Convert milliseconds to seconds
    //     const seconds = Math.floor(timeDifference / 1000);
        
    //     // Define time intervals
    //     const intervals = {
    //         year: 31536000,
    //         month: 2592000,
    //         week: 604800,
    //         day: 86400,
    //         hour: 3600,
    //         minute: 60
    //     };

    //     // Calculate time difference
    //     let counter;
    //     for (const [interval, secondsInterval] of Object.entries(intervals)) {
    //         counter = Math.floor(seconds / secondsInterval);
    //         if (counter > 0) {
    //             if (counter === 1) {
    //                 return `${counter} ${interval} ago`;
    //             } else {
    //                 return `${counter} ${interval}s ago`;
    //             }
    //         }
    //     }
    //     return 'Just now';
    // };