import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
	return (
		<div>
			<Link to="/profile">
				<h3>
					<i className="fas fa-home text-dark" />
				</h3>
			</Link>
		</div>
	);
}
