const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			profilePhoto: "",
			logos: [],
			imgs: ""
		},

		actions: {
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

			addImg: url => {
				setStore({ imgs: url });
				const store = getStore();
				console.log(store.imgs);
			},

			enterUser: async (newDate, newDescription) => {
				let enter = {
					username: newUsername,
					password: newPassword,
					email: newEmail,
					name: newName
				};
				console.log(enter);
				let response = await fetch(
					"https://3000-adb6bc1e-1ff5-4873-b2dc-9cda91ea97ac.ws-eu01.gitpod.io/users",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(enter)
					}
				);
				let result = await response.json();
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
					"https://3000-adb6bc1e-1ff5-4873-b2dc-9cda91ea97ac.ws-eu01.gitpod.io/socials",
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
					"https://3000-adb6bc1e-1ff5-4873-b2dc-9cda91ea97ac.ws-eu01.gitpod.io/posts",
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

			addMultimedia: async (newMultimediaType, newMultimediaUrl) => {
				let multimedia = {
					multimedia_type: newMultimediaType,
					multimedia_url: newMultimediaUrl
				};
				console.log(multimedia);
				let response = await fetch(
					"https://3000-adb6bc1e-1ff5-4873-b2dc-9cda91ea97ac.ws-eu01.gitpod.io/multimedias",
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
