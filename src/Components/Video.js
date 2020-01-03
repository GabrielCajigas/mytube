import React from 'react';



const Video =({video, handleVideoSelect}) => {
        return(
        < div className="col-sm-12 video m-1 p-2 videos" onClick= {() => handleVideoSelect(video)} >
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div>
                <div>{video.snippet.title}</div>
            </div>
        </div>

    )

};

export default Video;