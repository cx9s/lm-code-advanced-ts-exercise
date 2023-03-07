export const states = [
	"MENU",
	"SEND_MESSAGE",
	"SHOW_POSTS",
	"SHOW_USERS",
	"BROWSE_POSTS",
	"ADD_USER",
	"UNKNOWN",
	"CABBAGE",
] as const;

export type States = typeof states[number];
