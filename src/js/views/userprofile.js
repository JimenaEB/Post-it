import React, { useState } from "react";
import "../../styles/userprofile.scss";

export default function UserProfile() {
	return (
		<div className="container">
			<div className="row header perfil-header rounded-lg  text-center mb-4">
				<h1 className="text-white col">
					<strong>User Profile</strong>
				</h1>
			</div>
			<div className="row mb-4">
				<form className="col container">
					<div className="col row d-flex justify-content-center p-0">
						<label htmlFor="w3review" className="label-perfil">
							<strong>Profile photo:</strong>
						</label>
						<div className="user-photo-container mt-3 mb-3 d-flex align-items-center">
							<img
								className="user-photo"
								src="https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
								alt="user-photo"
							/>
						</div>
						<div className="d-flex justify-content-center mt-3 mb-3 ml-5">
							<i className="fas fa-plus-circle label-perfil icon-add ml-5" />
							<i className="fas fa-minus-circle label-perfil icon-delete ml-4" />
						</div>
					</div>

					<div className="row mt-4">
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
							<select className="selectSocialNetwork" name="socialNetwork">
								<option value="instagram">Instagram</option>
								<option value="twitter">Twitter</option>
								<option value="facebook">Facebook</option>
								<option value="likedin">Likedin</option>
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
						<i className="fas fa-plus-circle label-perfil icon-add" />
					</div>
					<span className="label-perfil mt-5">
						<strong>Registered social networks:</strong>
					</span>
					<div className="col d-flex justify-content-around align-items-baseline py-3 mt-2">
						<div className="d-flex align-items-baseline">
							<input type="radio" name="social" value="instagram" className="mr-3" />
							<label htmlFor="male">
								<div className="InstagramLogo d-flex justify-content-center align-items-center text-center">
									<i className=" fab fa-instagram" />
								</div>
							</label>
						</div>
						<div className="d-flex align-items-baseline">
							<input type="radio" name="social" value="facebook" className="mr-3" />
							<label htmlFor="female">
								<div className="FacebookLogo d-flex justify-content-center align-items-center text-center">
									<i className=" fab fa-facebook-f" />
								</div>
							</label>
						</div>
						<div className="d-flex align-items-baseline">
							<input type="radio" name="social" value="twitter" className="mr-3" />
							<label htmlFor="other">
								<i className="TwitterLogo fab fa-twitter" />
							</label>
						</div>
						<div className="d-flex align-items-baseline">
							<input type="radio" name="social" value="linkedin" className="mr-3" />
							<label htmlFor="other">
								<div className="LinkedinLogo d-flex justify-content-center align-items-center text-center">
									<i className=" fab fa-linkedin-in" />
								</div>
							</label>
						</div>
					</div>
					<div className="d-flex justify-content-center mt-3">
						<i className="fas fa-minus-circle label-perfil icon-delete" />
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<button className="Save-Button mt-5 mb-5">Save changes!</button>
			</div>
		</div>
	);
}
