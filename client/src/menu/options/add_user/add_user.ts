import { addUserToServer } from "../../../api/add_user_to_server";
import { User } from "../../../types/types";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export const addUser = async (): Promise<User[]> => {
	clear();

	const name = await prompt("What is the name of new user? ");

	printNewLine();
	print(`📨 Adding a new user named "${name}"...`);

	const result = await addUserToServer(name);

	print("🥳 New user added successfully!");
	print(`🥳 There are ${result.length} users in total. Here they are:`);
	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result;
};
