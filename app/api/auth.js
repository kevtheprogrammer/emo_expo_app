import client from "./client";

const login = (email, password) => client.post("/get-token/", { email, password });

export default {
	login,
};
