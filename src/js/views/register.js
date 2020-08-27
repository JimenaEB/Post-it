import React from "react";
import "../../styles/register.scss";
import { Link } from "react-router-dom";
import { InputIconBox } from "../component/inputiconbox";

export const Register = () => {
	return (
		<div className="text-center mt-5">
			<h2 className="NewUserTitle">New User</h2>
			<br />
			<form>
				<div className="UsernameInput flex-container">
					<span>
						<InputIconBox to="/inputiconbox" iconBox="fas fa-user-alt" />
					</span>
					<input className="InputU ml-1" type="text" id="Username" name="Username" placeholder="Username" />
				</div>
				<br />
				<div className="EmailInput flex-container">
					<span>
						<InputIconBox to="/inputiconbox" iconBox="fas fa-unlock" />
					</span>
					<input className="InputE ml-1" type="text" id="Email" name="Email" placeholder="Email" />
				</div>
				<br />
				<div className="PasswordInput flex-container">
					<span>
						<InputIconBox to="/inputiconbox" iconBox="far fa-envelope" />
					</span>
					<input className="InputP ml-1" type="text" id="Password" name="Password" placeholder="Password" />
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
			<button className="RegisterButton">Register!</button>
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
