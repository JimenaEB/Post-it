import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile.js";
import { Logo } from "../component/logo";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/logo">
				<span className="navbar-brand mb-0 h1">
					<Logo />
				</span>
			</Link>
			<div className="ml-auto">
				<Profile />
			</div>
		</nav>
	);
};
