import React from 'react';

const Detail = ({video}) => {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div className='col-sm-8'>
            <div className="responsive-video ">
                <iframe  src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className=''>
                <h4 className=''>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default Detail;