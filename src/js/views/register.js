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
		<div className="text-center mt-5">
			<h2 className="NewUserTitle">New User</h2>
			<br />
			<form className="container-form container">
				<div className="NameInput flex-container  ">
					<div className="row">
						<label className="col-1 mb-0 offset-3">Name:</label>
					</div>
					<div className="row d-flex justify-content-center">
						<span>
							<InputIconBox to="/inputiconbox" iconBox="fas fa-user-alt" />
						</span>
						<input className="InputP ml-1" type="text" id="Name" name="name" placeholder="Name" />
					</div>
				</div>
				<br />
				<div className="UsernameInput flex-container">
					<div className="row">
						<label className="col-1 mb-0 offset-3">Username:</label>
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
							placeholder="Username"
						/>
					</div>
				</div>
				<br />
				<div className="EmailInput flex-container ">
					<div className="row">
						<label className="col-1 mb-0 offset-3">Email:</label>
					</div>
					<div className="row d-flex justify-content-center">
						<span>
							<InputIconBox to="/inputiconbox" iconBox="far fa-envelope " />
						</span>
						<input className="InputE ml-1" type="text" id="Email" name="Email" placeholder="Email" />
					</div>
				</div>
				<br />
				<div className="PasswordInput flex-container ">
					<div className="row">
						<label className="col-1 mb-0 offset-3">Password:</label>
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
							placeholder="Password"
						/>
					</div>
				</div>
				<br />
				<div className="TermsConditionsPrivacy">
					<input
						type="checkbox"
						id="TermsConditionsPrivacy"
						name="TermsConditionsPrivacy"
						value="TermsConditionsPrivacy"
					/>
					<label> Accept the terms, conditions and Privacy Policy </label>
				</div>
			</form>
			<button className="RegisterButton" onClick={() => handleRegister()}>
				Register!
			</button>
			<br />
			<br />
			<br />
			<br />
			<div>
				<span className="font-weight-bold">Register with:</span>
				<br />
				<div>
					<i className="InstagramLogo fab fa-instagram" />
					<i className="TwitterLogo fab fa-twitter" />
					<i className="LinkedinLogo fab fa-linkedin-in" />
					<i className="FacebookLogo fab fa-facebook-f" />
					<br />
					<br />
				</div>
			</div>
		</div>
	);
};
