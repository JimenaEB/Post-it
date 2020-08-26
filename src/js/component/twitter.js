import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "../../styles/twitter.scss";

export default function Twitter(props) {
    if (props.type=="post") {
        return (
		<Fragment>
			<div className="container border preview-twitter">
				<div className="row py-3 px-3 d-flex justify-content-between align-items-center">
					<div className="col d-flex align-items-center">
						<img
							src={props.profile}
							alt="profile"
							className="rounded-circle profile-twitter"
							width="60"
							height="60"
						/>
						<div className="mx-3 d-flex align-items-baseline mt-3 container-twitter">
							<h4 className="mb-0 mr-3 username-twitter">
								<strong>{props.name}</strong>
							</h4>
							<p className="text-secondary details-twitter">@{props.username} - 0 min</p>
						</div>
					</div>
					<div className="arrow-twitter">
						<i className="fas fa-chevron-down text-secondary mr-5" />
					</div>
					<div className="row py-3 px-3">
						<h4 className="tweet">{props.tweet}</h4>
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
			</div>
		</Fragment>
	);
    }
    else {
        return (
		<Fragment>
			<div className="container border calendar-twitter">
				<div className="row py-3 px-3 d-flex justify-content-between align-items-center">
					<div className="col d-flex align-items-center">
						<img
							src={props.profile}
							alt="profile"
							className="rounded-circle profile-twitter"
							width="60"
							height="60"
						/>
						<div className="mx-3 d-flex align-items-baseline mt-3 container-twitter">
							<h4 className="mb-0 mr-3 username-twitter">
								<strong>{props.name}</strong>
							</h4>
							<p className="text-secondary details-twitter">@{props.username} - 0 min</p>
						</div>
					</div>
					<div className="arrow-twitter">
						<i className="fas fa-chevron-down text-secondary mr-5" />
					</div>
					<div className="row py-3 px-3">
						<h4 className="tweet">{props.tweet}</h4>
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
    types: PropTypes.string
};
