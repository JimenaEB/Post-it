import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "../../styles/twitter.scss";

export default function Twitter(props) {
	if (props.type == "post") {
		return (
			<Fragment>
				<div className="container border preview-twitter">
					<div className="row py-3 d-flex justify-content-between align-items-center">
						<div className="col d-flex justify-content-start align-items-center">
							<img
								src={props.profile}
								alt="profile"
								className="rounded-circle profile-twitter mr-2"
								width="60"
								height="60"
							/>
							<h4 className="mr-3 username-twitter ">
								<strong>{props.name}</strong>
							</h4>
							<h5 className="text-secondary details-twitter ">@{props.username} - 0 min</h5>
						</div>

						<div className="arrow-twitter">
							<i className="fas fa-chevron-down text-secondary mr-5" />
						</div>
					</div>
					<div className="row py-3 px-3">
						<h4 className="tweet">{props.tweet}</h4>
					</div>
					<div className="row px-3 py-2">
						<img src={props.imgPost} alt="post" className="rounded twitter-post" />
					</div>
					<div className="row d-flex justify-content-between w-100 text-secondary icons-twitter">
						<h4>
							<i className="col far fa-comment" />
						</h4>
						<h4>
							<i className=" col fas fa-retweet" />
						</h4>
						<h4>
							<i className="col far fa-heart" />
						</h4>
						<h4>
							<i className="col fas fa-share-alt" />
						</h4>
					</div>
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div className="container border calendar-twitter">
					<div className="row py-3 pr-5 pl-2 d-flex align-items-center">
						<div className="col p-0 imgContainer-twitter">
							<img
								src={props.profile}
								alt="profile"
								className="rounded-circle profile-twitter"
								width="60"
								height="60"
							/>
						</div>

						<h4 className="mb-0 username-twitter col p-0 pr-2">
							<strong>{props.name}</strong>
						</h4>
					</div>
					<div className="row py-1 px-3">
						<h4 className="tweet">{props.tweet}</h4>
					</div>
					<div className="row px-3 py-2">
						<img src={props.imgPost} alt="post" className="rounded twitter-post" />
					</div>
					<div className="row d-flex justify-content-around w-100 text-secondary icons-twitter pl-3">
						<h4>
							<i className="col far fa-comment p-0" />
						</h4>
						<h4>
							<i className=" col fas fa-retweet p-0" />
						</h4>
						<h4>
							<i className="col far fa-heart p-0" />
						</h4>
						<h4>
							<i className="col fas fa-share-alt p-0" />
						</h4>
					</div>
				</div>
			</Fragment>
		);
	}
}

Twitter.propTypes = {
	name: PropTypes.string,
	username: PropTypes.string,
	tweet: PropTypes.string,
	profile: PropTypes.object,
	types: PropTypes.string,
	imgPost: PropTypes.string
};
