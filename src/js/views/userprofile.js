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
			<div className="row">
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
							<i className="editPhoto fas fa-user-edit label-perfil icon-add ml-4" />
							<i className="fas fa-plus-circle label-perfil icon-add ml-4" />
							<i className="fas fa-minus-circle label-perfil icon-delete ml-4" />
						</div>
					</div>
					<div className="row">
						<div className="col d-flex flex-column">
							<div className="d-flex flex-column mt-4">
								<label htmlFor="w3review" className="label-perfil">
									<strong>Name:</strong>
								</label>
								<textarea
									name="w3review"
									rows="2"
									cols="50"
									className="rounded"
									defaultValue=""
									id="name"
								/>
							</div>
							<div className="d-flex flex-column mt-4 mb-5">
								<label htmlFor="w3review" className="label-perfil">
									<strong>Username:</strong>
								</label>
								<textarea name="w3review" rows="2" cols="50" className="rounded" defaultValue="" />
							</div>
						</div>
					</div>
				</form>
				<div className="col container border-left">
					<span className="label-perfil">
						<strong>Add new social networks:</strong>
					</span>
					<div className="col d-flex justify-content-around align-items-baseline py-3">
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
					<div className="d-flex justify-content-center mt-5 mb-3">
						<i className="fas fa-plus-circle label-perfil icon-add ml-4" />
						<i className="fas fa-minus-circle label-perfil icon-delete ml-4" />
					</div>
				</div>
			</div>
		</div>
	);
}
