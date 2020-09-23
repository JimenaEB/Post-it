import React from "react";
import "../../styles/login.scss";
import { Link } from "react-router-dom";
import { InputIconBox } from "../component/inputiconbox";

export default function Login() {
	return (
		<div className="text-center mt-5">
			<h2 className="LoginTitle">Log-in</h2>

			<form>
				<div className="EmailInput flex-container d-flex flex-column mt-4">
					<div className="row">
						<label className="emailLabel col-1 offset-3 mb-0">Email:</label>
					</div>
					<div className="row d-flex justify-content-center">
						<span>
							<InputIconBox to="/inputiconbox" iconBox="far fa-envelope " />
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

				<div className="PasswordInput flex-container d-flex flex-column mt-3">
					<div className="row">
						<label className="passwordLabel col-1 mb-0 offset-4">Password:</label>
					</div>
					<div className="row d-flex justify-content-center">
						<span>
							<InputIconBox to="/inputiconbox" iconBox="fas fa-lock" />
						</span>
						<input
							className="InputP ml-1"
							type="text"
							id="Password"
							name="Password"
							placeholder="Enter your password"
						/>
					</div>
				</div>
			</form>
			<div className="d-flex flex-column mt-3">
				<button className="LoginButton mt-4">Sign in!</button>
				<a href="#" className="linkRegister mt-3">
					If you do not have an account, please register here
				</a>
			</div>
			<div className="mt-4">
				<div>
					<span className="font-weight-bold">Sign in with:</span>
					<div>
						<i className="GoogleLogo fab fa-google" />
						<i className="InstagramLogo fab fa-instagram" />
						<i className="TwitterLogo fab fa-twitter" />
						<i className="LinkedinLogo fab fa-linkedin-in" />
						<i className="FacebookLogo fab fa-facebook-f" />
					</div>
				</div>
			</div>
		</div>
	);
}
