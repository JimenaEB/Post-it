import React, { useState, useContext } from "react";
import "../../styles/userprofile.scss";
import { Context } from "../store/appContext";

export default function UserProfile() {
	const { store, actions } = useContext(Context);

	const [profilePhoto, setProfilePhoto] = useState("");
	const [logos, setLogos] = useState({ twitter: false, instagram: false, facebook: false, linkedin: false });
	const [activeSocial, setActiveSocial] = useState("");

	const onChangePhoto = event => {
		let url = event.target.value;
		setProfilePhoto(url);
		actions.addPhoto(url);
	};

	const logoView = () => {
		let obj = {};
		obj[activeSocial] = true;
		for (let social in logos) {
			if (activeSocial != social) {
				obj[social] = logos[social];
			}
		}
		setLogos(obj);
	};

	return (
		<div className="container">
			<div className="row header perfil-header rounded-lg  text-center mb-4">
				<h1 className="text-white col">
					<strong>User Profile</strong>
				</h1>
			</div>
			<div className="row mb-4">
				<form className="col container">
					<div className="col row p-0 mb-3">
						<label htmlFor="w3review" className="label-perfil align-items-start ml-3">
							<strong>Profile photo:</strong>
						</label>
						<div className="user-photo-container ml-5 mt-3 mb-3 d-flex align-items-center">
							<img
								className="user-photo ml-3 d-flex align-items-center"
								src={profilePhoto}
								alt="user-photo"
							/>
						</div>
						<div className="row mt-0 mb-5 ml-1">
							<label htmlFor="w3review" className="col-5 label-perfil align-items-start">
								<i className="fas fa-edit" />
								<strong>Photo URL:</strong>
							</label>

							<textarea
								name="w3review"
								rows="2"
								cols="50"
								className="rounded col-10 ml-5 p-2"
								defaultValue=""
								id="Photo"
								onChange={onChangePhoto}
							/>
						</div>
					</div>

					<div className="row mt-2">
						<label htmlFor="w3review" className="col-5 label-perfil ml-0 align-items-start">
							<i className="fas fa-edit" />
							<strong> Name:</strong>
						</label>
						<input className="col-10 InputE ml-5 p-2" type="text" id="Name" name="Name" />
					</div>

					<div className="row mt-4">
						<label htmlFor="w3review" className="col-5 label-perfil">
							<i className="fas fa-edit" />
							<strong> Username:</strong>
						</label>
						<input className="col-10 ml-5 p-2" type="text" id="Username" name="Username" />
					</div>
				</form>
				<div className="col container border-left">
					<div>
						<form className="flex-container d-flex flex-column">
							<label htmlFor="w3review" className="label-perfil ml-0 align-items-start">
								<strong>Select the social network to register:</strong>
							</label>
							<select
								className="selectSocialNetwork"
								name="socialNetwork"
								onChange={e => {
									setActiveSocial(e.target.value);
								}}>
								<option className="text-secondary" value="select">
									Select...
								</option>
								<option value="instagram">Instagram</option>
								<option value="twitter">Twitter</option>
								<option value="facebook">Facebook</option>
								<option value="linkedin">Linkedin</option>
							</select>
						</form>
					</div>
					<form className="flex-container d-flex flex-column">
						<div className="row mt-4">
							<label htmlFor="w3review" className="col-5 label-perfil ml-0 align-items-start">
								<strong>Social network email:</strong>
							</label>
							<input
								className="col-10 InputE ml-5 p-2"
								type="text"
								id="Email"
								name="Email"
								placeholder="Enter your email"
							/>
						</div>

						<div className="row mt-4">
							<label htmlFor="w3review" className="col-5 label-perfil">
								<strong>Social network password:</strong>
							</label>
							<input
								className="col-10 ml-5 p-2"
								type="text"
								id="Password"
								name="Password"
								placeholder="Enter your password"
							/>
						</div>
					</form>
					<div className="d-flex justify-content-center mt-3 mb-5">
						<button
							className="PlusAndMinus"
							onClick={() => {
								logoView();
							}}>
							<i className="fas fa-plus-circle label-perfil icon-add " />
						</button>
					</div>
					<span className="label-perfil mt-5">
						<strong>Registered social networks:</strong>
					</span>
					<div className="col d-flex justify-content-around align-items-baseline py-3 mt-2">
						<div className={logos["twitter"] == true ? "d-flex align-items-baseline" : "d-none"}>
							<input type="radio" name="social" value="twitter" className="mr-3" />
							<label htmlFor="male">
								<div className="TwitterLogo d-flex justify-content-center align-items-center text-center">
									<i className="fab fa-twitter" />
								</div>
							</label>
						</div>
						<div className={logos["facebook"] == true ? "d-flex align-items-baseline" : "d-none"}>
							<input type="radio" name="social" value="facebook" className="mr-3" />
							<label htmlFor="female">
								<div className="FacebookLogo d-flex justify-content-center align-items-center text-center">
									<i className="fab fa-facebook-f" />
								</div>
							</label>
						</div>
						<div className={logos["instagram"] == true ? "d-flex align-items-baseline" : "d-none"}>
							<input type="radio" name="social" value="instagram" className="mr-3" />
							<label htmlFor="other">
								<div className="InstagramLogo d-flex justify-content-center align-items-center text-center">
									<i className="fab fa-instagram" />
								</div>
							</label>
						</div>
						<div className={logos["linkedin"] == true ? "d-flex align-items-baseline" : "d-none"}>
							<input type="radio" name="social" value="linkedin" className="mr-3" />
							<label htmlFor="other">
								<div className="LinkedinLogo d-flex justify-content-center align-items-center text-center">
									<i className="fab fa-linkedin-in" />
								</div>
							</label>
						</div>
					</div>
					<div className="d-flex justify-content-center mt-3">
						<button className="PlusAndMinus">
							<i className="fas fa-minus-circle label-perfil icon-delete" />
						</button>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<button className="Save-Button mt-5 mb-5">Save changes!</button>
			</div>
		</div>
	);
}
