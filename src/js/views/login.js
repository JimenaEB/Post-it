import React from "react";
import "../../styles/login.scss";
import { Link } from "react-router-dom";
import { InputIconBox } from "../component/inputiconbox";

export const Login = props => (
	<div className="text-center mt-5">
		<h2 className="LoginTitle">Log-in</h2>
		<br />
		<form>
			<div className="EmailInput flex-container ">
				<div className="row">
					<label className="col-1 mb-0 offset-4">Email:</label>
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
					<label className="col-1 mb-0 offset-4">Password:</label>
				</div>
				<div className="row d-flex justify-content-center">
					<span>
						<InputIconBox to="/inputiconbox" iconBox="fas fa-unlock" />
					</span>
					<input className="InputP ml-1 " type="text" id="Password" name="Password" placeholder="Password" />
				</div>
			</div>
		</form>
		<br />

		<button className="LoginButton">Sign in!</button>
		<br />
		<br />
		<Link to="/register">
			<a href="#" className="linkRegister">
				If you do not have an account, please register here
			</a>
		</Link>
		<br />
		<br />
		<br />
		<br />
		<div>
			<span className="font-weight-bold">Sign in with:</span>
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
