import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "../../styles/facebook.scss";

export default function Facebook(props) {
	if (props.type == "post") {
		return (
			<Fragment>
				<div className="container border rounded preview-facebook">
					<div className="row p-3 d-flex justify-content-between align-items-center">
						<div className="col d-flex align-items-center">
							<img
								className="rounded-circle"
								src={props.imgProfile}
								alt="profile-photo"
								height="60"
								width="60"
							/>
							<div className="col">
								<h6 className="username-facebook">
									<strong>{props.name}</strong>
								</h6>
								<h6 className="text-secondary">
									0h - <i className="fas fa-globe-americas" />
								</h6>
							</div>
						</div>
						<div className="col d-flex justify-content-end">
							<h5 className="text-secondary">
								<i className="fas fa-ellipsis-h" />
							</h5>
						</div>
					</div>
					<div className="row description-facebook px-3">
						<p>{props.description}</p>
					</div>
					<div className="row">
						<img src={props.imgPost} alt="image-Post" className="post-facebook" />
					</div>
					<div className="row d-flex justify-content-around py-3 align-items-center">
						<h5 className="text-secondary">
							<i className="far fa-thumbs-up" /> Like
						</h5>
						<h5 className="text-secondary">
							<i className="far fa-comment-alt" /> Comment
						</h5>
						<h5 className="text-secondary">
							<i className="fas fa-share" /> Share
						</h5>
					</div>
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div className="container border rounded calendar-facebook">
					<div className="row p-3 d-flex justify-content-between align-items-center">
						<div className="col d-flex align-items-center w-100 p-0">
							<img
								className="rounded-circle profile-facebook"
								src={props.imgProfile}
								alt="profile-photo"
								width="40"
							/>
							<div className="col pl-1 pr-0">
								<h6 className="username-facebook">
									<strong>{props.name}</strong>
								</h6>
							</div>
						</div>
					</div>
					<div className="row description-facebook px-3">
						<p>{props.description}</p>
					</div>
					<div className="row">
						<img src={props.imgPost} alt="image-Post" className="post-facebook" />
					</div>
					<div className="row d-flex justify-content-around py-3 align-items-center">
						<h5 className="text-secondary">
							<i className="far fa-thumbs-up" />
						</h5>
						<h5 className="text-secondary">
							<i className="far fa-comment-alt" />
						</h5>
						<h5 className="text-secondary">
							<i className="fas fa-share" />
						</h5>
					</div>
				</div>
			</Fragment>
		);
	}
}

Facebook.propTypes = {
	imgProfile: PropTypes.string,
	imgPost: PropTypes.string,
	name: PropTypes.string,
	post: PropTypes.string,
	description: PropTypes.string
};
