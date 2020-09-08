import React, { useContext, useState } from "react";
import "../../styles/login.scss";
import { InputIconBox } from "../component/inputiconbox";
import { Context } from "../store/appContext";

export const Login = props => {
	const { actions } = useContext(Context);
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");

	const handleEmail = event => {
		setEmail(event.target.value);
	};

	const handlePassword = event => {
		setPassword(event.target.value);
	};

	const handleLogin = () => {
		let newEmail = document.querySelector("#Email").value;
		let newPassword = document.querySelector("#Password").value;

		if (newEmail != "" && newPassword != "") {
			actions.getUsers(newEmail, newPassword);
		}
	};

	return (
		<div className="text-center mt-5">
			<h2 className="LoginTitle">Log-in</h2>
			<br />
			<form>
				<div className="EmailInput flex-container">
					<span>
						<InputIconBox to="/inputiconbox" iconBox="fas fa-unlock" />
					</span>
					<input
						className="InputE ml-1"
						type="text"
						id="Email"
						name="Email"
						placeholder="Email"
						onChange={e => handleEmail(e)}
					/>
				</div>
				<br />
				<div className="PasswordInput flex-container">
					<span>
						<InputIconBox to="/inputiconbox" iconBox="far fa-envelope" />
					</span>
					<input
						className="InputP ml-1"
						type="text"
						id="Password"
						name="Password"
						placeholder="Password"
						onChange={e => handlePassword(e)}
					/>
				</div>
			</form>
			<br />

			<button className="LoginButton" onClick={() => handleLogin()}>
				Sign in!
			</button>
			<br />
			<br />
			<a href="#" className="linkRegister">
				If you do not have an account, please register here
			</a>
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
};
