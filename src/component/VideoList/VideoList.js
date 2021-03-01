import React from "react";
import classes from "./VideoList.module.css";
import VideoItem from "../VideoItem/VideoItem";

function VideoList({ videos, selectVideo }) {
	const renderedItems = videos.map((video) => (
		<VideoItem key={video.id.videoId} video={video} selectVideo={selectVideo} />
	));
	return <div className={classes.videoList}>{renderedItems}</div>;
}

export default VideoList;
