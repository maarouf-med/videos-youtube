import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import api from "./component/api/api";
import SearchBar from "./component/SearchBar/SearchBar";
import VideoList from "./component/VideoList/VideoList";
import VideoDetail from "./component/VideoDetail/VideoDetail";

function App() {
	const [videos, setVideos] = useState([]);
	const [video, setVideo] = useState(null);

	useEffect(() => {
		termSubmit("tamer hosny");
	}, []); // one time

	const termSubmit = async (term) => {
		const { data } = await api.get("/search", {
			params: {
				q: term,
			},
		});
		setVideos(data.items);
		setVideo(data.items[0]); // get first item form array
	};

	const selectVideo = (video) => {
		setVideo(video);
	};

	return (
		<div className={styles}>
			<div className="container">
				<SearchBar termSubmit={termSubmit} />
				<div className="row">
					<div className="col-8">
						<VideoDetail video={video} />
					</div>
					<div className="col-4">
						<VideoList videos={videos} selectVideo={selectVideo} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
