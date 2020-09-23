const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			profilePhoto: "",
			logos: [],

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
},

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
			addPhoto: url => {
				setStore({ profilePhoto: url });
				const store = getStore();
				console.log(store.profilePhoto);
			},

			displayLogo: logo => {
				setStore({ logos: [TwitterLogo, FacebookLogo, InstagramLogo, LinkedinLogo] });
				const store = getStore();
				console.log(store.logos);
			},

			addSocial: async (newUsername, newPassword, newEmail, newSocialName, newPhoto) => {
				let social = {
					username: newUsername,
					password: newPassword,
					email: newEmail,
					social_name: newSocialName,
					photo: newPhoto
				};
				console.log(social);
				let response = await fetch(
					"https://3000-ba72c270-9a3a-457d-a531-5aa780bd058d.ws-eu01.gitpod.io/socials",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(social)
					}
				);
				let result = await response.json();
			},

			createPost: async (newDate, newDescription) => {
				let post = {
					date: newDate,
					description: newDescription
				};
				console.log(post);
				let response = await fetch(
					"https://3000-ba72c270-9a3a-457d-a531-5aa780bd058d.ws-eu01.gitpod.io/posts",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(post)
					}
				);
				let result = await response.json();
			},

			registerMultimedia: async (newMultimediaType, newMultimediaUrl) => {
				let multimedia = {
					multimedia_type: newMultimediaType,
					multimedia_url: newMultimediaUrl
				};
				console.log(multimedia);
				let response = await fetch(
					"https://3000-ba72c270-9a3a-457d-a531-5aa780bd058d.ws-eu01.gitpod.io/multimedias",

					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(multimedia)

					}
				);
				let result = await response.json();

			}
		}
	};
};

export default getState;
