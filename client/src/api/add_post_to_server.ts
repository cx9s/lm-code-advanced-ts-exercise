import { Post } from "../types/types";
import { baseUrl } from "./base_url";

export const addPostToServer = async (content: string): Promise<Post[]> => {
	const title = content.split("??")[0];
	const text = content.split("??")[1] ?? "";
	const authorId = content.split("??")[2];
	try {
		const result = await fetch(baseUrl + "/api/posts/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ title: title, text: text, authorId: authorId }),
		});

		const posts = await result.json();
		return posts;
	} catch (e) {
		return [];
	}
};
