import React from "react";
import "../../styles/postit.scss";
import Instagram from "./instagram.js";

export default function Postit() {
	return (
		<div className="container border postit">
			<div className="row">
				<div className="col-10">
					<Instagram
						name="Luigi"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed enim congue, lobortis erat ut, mollis urna. Praesent non lectus enim. Mauris massa est, vestibulum nec fringilla in, scelerisque ut nisi. Nunc sed nunc a nunc tempus ullamcorper. Nunc nec aliquam est. Donec nulla ipsum, varius sit amet scelerisque non, viverra id sapien. Ut elementum quam sit amet ante tincidunt, pellentesque condimentum risus blandit. Ut sed elit malesuada, egestas neque vel, efficitur tellus."
						type="calendar"
						imgProfile="https://images.pexels.com/photos/3735532/pexels-photo-3735532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						imgPost="https://images.pexels.com/photos/3735532/pexels-photo-3735532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					/>
				</div>
				<div className="col-2" />
			</div>
		</div>
	);
}
