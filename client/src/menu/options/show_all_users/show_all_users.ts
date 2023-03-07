import { fetchAllUsers } from "../../../api/fetch_all_users";
import { User } from "../../../types/types";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

export const showAllUsers = async (): Promise<User[]> => {
	clear("yes");

	printNewLine();

	print("📨 Fetching users...");

	const result = await fetchAllUsers();

	print(`🥳 Received ${result.length} users. Here they are:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result;
};
