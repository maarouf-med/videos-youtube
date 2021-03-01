import React from "react";
import classes from "./VideoItem.module.css";

function VideoItem({ video, selectVideo }) {
	return (
		<div
			className={classes.videoItem}
			key={video.id.videoId}
			onClick={() => selectVideo(video)}
		>
			<div className={classes.image}>
				<img src={video.snippet.thumbnails.medium.url} alt="" />
			</div>
			<div className={classes.title}>
				<h6>{video.snippet.title}</h6>
			</div>
		</div>
	);
}

export default VideoItem;
