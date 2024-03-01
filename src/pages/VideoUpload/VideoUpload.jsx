import './VideoUpload.scss'
import defaultThumbnail from '../../assets/images/Upload-video-preview.jpg'
import publish from '../../assets/images/Icons/publish.svg'

function VideoUpload() {
    return (
        <>
            <form className='form'>
                <section className="top">
                    <h1 className='top__title demi'>Upload Video</h1>
                </section>
                <section className="middle">
                    <div className='middle__thumbnail'>
                        <h3 className='form__label demi'>VIDEO THUMBNAIL</h3>
                        <img className='middle__thumbnail--image' src={defaultThumbnail}></img>
                    </div>
                    <div className='middle__inputs'>
                        <div className='middle__inputs--title'>
                            <h3 className='form__label demi'>TITLE YOUR VIDEO</h3>
                            <input className='form__field regular' type="text" name="title" placeholder="Add a title to your video"></input>
                        </div>
                        <div className='middle__inputs--description'>
                            <h3 className='form__label demi'>ADD A VIDEO DESCRIPTION</h3>
                            <textarea className='form__field regular' type="text" name="description" placeholder="Add a description to your video"></textarea>
                        </div>
                    </div>
                </section>
                <section className="bottom">
                    <div className='bottom__cancel1'> {/*im not sure if we need these divs */}
                        <button className='bottom__cancel1--button'>cancel for tablet desktop</button>
                    </div>
                    <div className='bottom__publish'>
                        <button className='bottom__publish--button demi'><img className='bottom__publish--button--icon' src={publish}/>PUBLISH</button> 
                    </div>
                    <div className='bottom__cancel2'>
                        <button className='bottom__cancel2--button demi'>CANCEL</button>
                    </div>
                </section>
            </form>

        </>
    );
}
export default VideoUpload