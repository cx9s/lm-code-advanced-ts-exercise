import * as readline from "node:readline/promises";
import { EOL } from "os";

export const printNewLine = () => {
	console.log(EOL); // this imports the correct End-Of-Line for either Windows or Unix
};

export const print = (str: string, newLine: boolean = true) => {
	console.log(str);
	if (newLine === true) {
		printNewLine();
	}
};

export const clear = (addTopBorder: string = "") => {
	console.clear();
	if (addTopBorder === "yes") {
		print("------------------------------------");
	}
};

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export const prompt = async (prompt: string) => {
	const answer = await reader.question(`${prompt}  > `);
	return answer;
};
