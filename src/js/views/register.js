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

		if (username != "" && email != "" && password != "" && checkbox != false) {
			actions.createUser();
		}
	};

	return (
		<div className="text-center mt-5">
			<h2 className="NewUserTitle">New User</h2>
			<br />
			<form className="container-form container">
				<div className="PasswordInput flex-container  ">
					<span className="">
						<InputIconBox to="/inputiconbox" iconBox="fas fa-comment" />
					</span>
					<label className="mx-3 col-1 mr-5">Name:</label>
					<input className="InputP ml-1" type="text" id="Name" name="name" placeholder="Name" />
				</div>

				<br />
				<div className="UsernameInput flex-container">
					<span>
						<InputIconBox to="/inputiconbox" iconBox="fas fa-user-alt" />
					</span>
					<label className="mx-3 col-1 mr-5">Username:</label>
					<input className="InputU ml-1 " type="text" id="Username" name="Username" placeholder="Username" />
				</div>
				<br />
				<div className="EmailInput flex-container ">
					<span>
						<InputIconBox to="/inputiconbox" iconBox="far fa-envelope " />
					</span>
					<label className="mx-3 col-1 mr-5">Email:</label>
					<input className="InputE ml-1" type="text" id="Email" name="Email" placeholder="Email" />
				</div>
				<br />
				<div className="PasswordInput flex-container ">
					<span>
						<InputIconBox to="/inputiconbox" iconBox="fas fa-unlock" />
					</span>
					<label className="mx-3 col-1 mr-5">Password:</label>
					<input className="InputP ml-1 " type="text" id="Password" name="Password" placeholder="Password" />
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
