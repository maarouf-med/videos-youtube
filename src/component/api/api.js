import axios from "axios";
const KEY = "AIzaSyB4N-FG9PdiR_4ZaK0pCUoHdPoIAGSW7CE";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		type: "video",
		key: KEY,
	},
});
