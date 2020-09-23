import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "../../styles/linkedin.scss";

export default function Linkedin(props) {
	if (props.type == "post") {
		return (
			<Fragment>
				<div className="container border preview-linkedin">
					<div className="row d-flex align-items-center flex-nowrap p-1">
						<div className="col-2 p-0">
							<img className="profile-linkedin" src={props.imgProfile} alt="perfil" />
						</div>
						<div className="username-linkedin col-8 container">
							<span>{props.name}</span>
						</div>
						<div className="col-1">
							<i className="options-linkedin fas fa-ellipsis-v" />
						</div>
					</div>
					<div className="row description-linkedin border-top">
						<p className="m-0">{props.description}</p>
					</div>
					<div className="row">
						<img className="w-100 h-50" src={props.imgPost} alt="job" />
					</div>
					<div className="row icons-linkedin d-flex justify-content-between border">
						<div className="col-3 offset-1 p-0">
							<i className="far fa-thumbs-up" /> Recommend
						</div>
						<div className="col-3 p-0">
							<i className="far fa-comment-alt" /> Comment
						</div>
						<div className="col-2 p-0">
							<i className="fas fa-share" /> Share
						</div>
						<div className="col-2 p-0">
							<i className="far fa-paper-plane" /> Send
						</div>
					</div>
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div className="container border calendar-linkedin">
					<div className="row d-flex align-items-center flex-nowrap p-1">
						<div className="col-2 p-0">
							<img className="profile-linkedin" src={props.imgProfile} alt="perfil" />
						</div>
						<div className="username-linkedin col-8 container">
							<span>{props.name}</span>
						</div>
						<div className="col-1">
							<i className="options-linkedin fas fa-ellipsis-v" />
						</div>
					</div>
					<div className="row description-linkedin border-top">
						<p className="m-0">{props.description}</p>
					</div>
					<div className="row">
						<img className="w-100 h-50" src={props.imgPost} alt="job" />
					</div>
					<div className="row icons-linkedin d-flex justify-content-between border">
						<div className="col-3 offset-1 p-0">
							<i className="far fa-thumbs-up" /> Recommend
						</div>
						<div className="col-3 p-0">
							<i className="far fa-comment-alt" /> Comment
						</div>
						<div className="col-2 p-0">
							<i className="fas fa-share" /> Share
						</div>
						<div className="col-2 p-0">
							<i className="far fa-paper-plane" /> Send
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

Linkedin.propTypes = {
	imgProfile: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	imgPost: PropTypes.string,
	type: PropTypes.string
};
