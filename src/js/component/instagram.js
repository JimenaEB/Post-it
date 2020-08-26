import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "../../styles/instagram.scss";

export default function Instagram(props) {
	return (
		<Fragment>
			<div className="container border preview-instagram">
				<div className="row d-flex align-items-center justify-content-between top">
					<div className="col d-flex justify-content-start py-3 align-items-center ">
						<img
							src={props.imgProfile}
							alt="profile-pic"
							className="rounded-circle mr-4 profile-instagram"
							width="40"
							height="40"
						/>
						<h5 className="username-instagram">{props.name}</h5>
					</div>
					<div className="col d-flex justify-content-end">
						<i className="fas fa-ellipsis-h options-instagram" />
					</div>
				</div>
				<div className="row">
					<img src={props.imgPost} alt="post-pic" className="w-100 h-50" />
				</div>
				<div className="row d-flex justify-content-between icons-instagram">
					<div className="d-flex align-items-center col justify-content-around py-2">
						<h3>
							<i className="fas fa-heart" />
						</h3>
						<h3 className="comment">
							<i className="far fa-comment" />
						</h3>
						<h3>
							<i className="far fa-paper-plane" />
						</h3>
					</div>
					<div className=" d-flex col justify-content-end align-items-center">
						<h3>
							<i className="far fa-bookmark" />
						</h3>
					</div>
				</div>
				<div className="bottom">
					<div className="row">
						<div className="col">
							<p>1937 likes</p>
						</div>
					</div>
					<div className="row px-3">
						<p>
							<strong>{props.name}</strong> {props.description}
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

Instagram.propTypes = {
	name: PropTypes.string,
	imgProfile: PropTypes.string,
	imgPost: PropTypes.string,
	description: PropTypes.string
};
