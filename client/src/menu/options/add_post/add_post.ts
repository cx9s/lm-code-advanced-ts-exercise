import { addPostToServer } from "../../../api/add_post_to_server";
import { Post } from "../../../types/types";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export const addPost = async (): Promise<Post[]> => {
	clear();

	const content = await prompt(
		"What is the title, text and author (id) of new post? Separate by '??'."
	);

	printNewLine();
	print(`📨 Adding a new post with content "${content}"...`);

	let result: Post[] = [];

	if (content !== "") {
		result = await addPostToServer(content);

		print("🥳 New post added successfully!");
		print(`🥳 There are ${result.length} posts in total. Here they are:`);
		console.log(result);
	} else {
		print(`Content shouldn't be empty.`);
	}

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result;
};
