import './VideoPlayerComments.scss'

function VideoPlayerComments({currentVideoComments}) {
    const {
        comments
        // name, 
        // comment, 
        // likes, 
        // timestamp
    } = currentVideoComments;

    return (
        <section>
            <h3>Comments</h3>
            <div className="comments-container">
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <p className="comment-name">
                            {comment.name}
                        </p>
                        <p className="comment-text">
                            {comment.comment}
                        </p>
                        <p className="comment-likes">
                            {comment.likes} likes
                        </p>
                        <p>
                            {comment.timestamp}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default VideoPlayerComments