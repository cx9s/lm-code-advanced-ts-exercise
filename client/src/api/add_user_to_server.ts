import { User } from "../types/types";
import { baseUrl } from "./base_url";

export const addUserToServer = async (name: string): Promise<User[]> => {
	try {
		const result = await fetch(baseUrl + "/api/users/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ name: name }),
		});

		const users = await result.json();
		return users;
	} catch (e) {
		return [];
	}
};
