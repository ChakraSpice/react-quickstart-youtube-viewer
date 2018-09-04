import React from 'react'
import VideoListItem from './videoListItem';

const VideoList = (props) => {
    const videoItems = props.videos.map(video => {
        // Unique key, so the react knows which list entry to update 
        return <VideoListItem key={video.etag} video={video}/>
    });

    return (


        // Instead of "class", so naming conflict with JS reserved word class is avoided 
        <ul className="col-md-4 list-group"> 
            {videoItems}
        </ul>
    )
};

export default VideoList;