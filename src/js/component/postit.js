import React from "react";
import "../../styles/postit.scss";
import Instagram from "./instagram.js";
import Twitter from "./twitter.js";
import Facebook from "./facebook.js";

export default function Postit() {
	return (
		<div className="container-fluid border postit">
			<div className="d-flex justify-content-center">
				<i className="fas fa-map-pin calendar-pin" />
			</div>
			<div className="row d-flex pb-3 justify-content-around p-0">
				<i className="fas fa-pen icons-calendar" />
				<i className="fas fa-trash text-danger icons-calendar" />
			</div>
			<div className="row">
				<div className="col mb-3">
					<Facebook
						name="Luigi"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed enim congue, lobortis erat ut, mollis urna. Praesent non lectus enim. Mauris massa est, vestibulum nec fringilla in, scelerisque ut nisi. Nunc sed nunc a nunc tempus ullamcorper. Nunc nec aliquam est. Donec nulla ipsum, varius sit amet scelerisque non, viverra id sapien. Ut elementum quam sit amet ante tincidunt, pellentesque condimentum risus blandit. Ut sed elit malesuada, egestas neque vel, efficitur tellus."
						type="calendar"
						imgProfile="https://images.pexels.com/photos/3735532/pexels-photo-3735532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						imgPost="https://images.pexels.com/photos/3735532/pexels-photo-3735532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					/>
				</div>
			</div>
		</div>
	);
}
