import { baseUrl } from "./base_url";

export const fetchAllPosts = async () => {
	try {
		const result = await fetch(baseUrl + "/api/posts/all");
		const posts = await result.json();
		return posts;
	} catch {
		return [];
	}
};
