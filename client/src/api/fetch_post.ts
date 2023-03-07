import { Post } from "../types/types";
import { baseUrl } from "./base_url";

export const fetchPost = async (id: string): Promise<Post[]> => {
	try {
		const result = await fetch(baseUrl + "/api/posts/" + id);
		const post = await result.json();
		return post;
	} catch {
		return [];
	}
};
