const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			createUser: async (newUsername, newEmail, newPassword, newName) => {
				let user = {
					email: newEmail,
					password: newPassword,
					username: newUsername,
					name: newName
				};
				console.log(user);
				let response = await fetch(
					"https://3000-ba72c270-9a3a-457d-a531-5aa780bd058d.ws-eu01.gitpod.io/users",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(user)
					}
				);
				let result = await response.json();
			}
		}
	};
};

export default getState;
