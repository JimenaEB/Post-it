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
			getUsers: async (newEmail, newPassword) => {
				let user = {
					email: newEmail,
					password: newPassword
				};

				let response = await fetch(
					"https://3000-adb46d90-6bf9-47e5-95ad-73fccc9586fc.ws-eu01.gitpod.io/login",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json;charset=utf-8"
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
