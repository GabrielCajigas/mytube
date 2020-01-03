import React from 'react';
import Video from './Video';


const List =({videos, handleVideoSelect}) => {
    const renderedVideos = videos.map((video)=>{
        return <Video key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />


    });
return <div className="col-sm-3 video_list">{renderedVideos}</div>
};

export default List;