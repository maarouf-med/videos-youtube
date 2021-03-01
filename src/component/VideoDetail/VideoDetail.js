import React from "react";
import classes from "./VideoDetail.module.css";

function VideoDetail({ video }) {
	if (!video) {
		return <p>loading...</p>;
	}
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<div className={classes.videoDetail}>
			<iframe src={videoSrc} frameBorder="0" title="video player"></iframe>
			<div>
				<h3>{video.snippet.title}</h3>
				<h6>{video.snippet.channelTitle}</h6>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetail;
