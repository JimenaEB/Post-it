import React, { useContext } from "react";
import "../../styles/register.scss";
import { Link } from "react-router-dom";
import { InputIconBox } from "../component/inputiconbox";
import { Context } from "../store/appContext";

export const Register = () => {
	const { actions } = useContext(Context);

	const handleRegister = () => {
		let username = document.querySelector("#Username").value;
		let email = document.querySelector("#Email").value;
		let password = document.querySelector("#Password").value;
		let checkbox = document.querySelector("#TermsConditionsPrivacy").checked;
		let name = document.querySelector("#Name").value;

		if (username != "" && email != "" && password != "" && checkbox != false && name != "") {
			actions.createUser(username, email, password, name);
		}
	};

	return (
		<div className="text-center mt-0">
			<h2 className="NewUserTitle">New User</h2>

			<form className="container-form container">
				<div className="NameInput flex-container d-flex flex-column mt-3">
					<div className="row">
						<label className="col-1 mb-0 offset-3 nameLabel">Name:</label>

					</div>
					<div className="row d-flex justify-content-center">
						<span>
							<InputIconBox to="/inputiconbox" iconBox="fas fa-user-alt" />
						</span>
						<input
							className="InputP ml-1"
							type="text"
							id="Name"
							name="name"
							placeholder="Enter your name"
						/>
					</div>
				</div>

				<div className="UsernameInput d-flex flex-column mt-2">
					<div className="row">
						<label className="col-1 mb-0 offset-3 usernameLabel">Username:</label>

					</div>
					<div className="row d-flex justify-content-center">
						<span>
							<InputIconBox to="/inputiconbox" iconBox="fas fa-comment" />
						</span>
						<input
							className="InputP ml-1"
							type="text"
							id="Username"
							name="Username"
							placeholder="Enter your username"
						/>
					</div>
				</div>

				<div className="EmailInput flex-container d-flex flex-column mt-2">
					<div className="row">
						<label className="col-1 mb-0 offset-3 emailLabel">Email:</label>
					</div>
					<div className="row d-flex justify-content-center">
						<span>
							<InputIconBox to="/inputiconbox" iconBox="far fa-envelope" />
						</span>
						<input
							className="InputE ml-1"
							type="text"
							id="Email"
							name="Email"
							placeholder="Enter your email"
						/>
					</div>
				</div>

				<div className="PasswordInput flex-container d-flex flex-column mt-2">
					<div className="row">
						<label className="col-1 mb-0 offset-3 passwordLabel">Password:</label>

					</div>
					<div className="row d-flex justify-content-center">
						<span>
							<InputIconBox to="/inputiconbox" iconBox="fas fa-unlock" />
						</span>
						<input
							className="InputP ml-1 "
							type="text"
							id="Password"
							name="Password"
							placeholder="Enter your password"
						/>
					</div>
				</div>

				<div className="TermsConditionsPrivacy mt-3">
					<input
						type="checkbox"
						id="TermsConditionsPrivacy"
						name="TermsConditionsPrivacy"
						value="TermsConditionsPrivacy"
					/>
					<label> Accept the terms, conditions and Privacy Policy </label>
				</div>
			</form>
			<button className="RegisterButton mt-2" onClick={() => handleRegister()}>
				Register!
			</button>

			<div className="mt-4">
				<span className="font-weight-bold">Register with:</span>

				<div>
					<i className="GoogleLogo fab fa-google" />
					<i className="InstagramLogo fab fa-instagram" />
					<i className="TwitterLogo fab fa-twitter" />
					<i className="LinkedinLogo fab fa-linkedin-in" />
					<i className="FacebookLogo fab fa-facebook-f" />
				</div>
			</div>
		</div>
	);
};
