import React, { Fragment } from "react";
import "../../styles/twitter.scss";

export default function Twitter() {
	return (
		<Fragment>
			<div className="container border preview-twitter">
				<div className="row py-3 px-3 d-flex justify-content-between align-items-center">
					<div className="col d-flex align-items-center">
						<img
							src="https://images.pexels.com/photos/3028448/pexels-photo-3028448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt="profile"
							className="rounded-circle profile"
							width="60"
							height="60"
						/>
						<div className="mx-3 d-flex align-items-baseline mt-3">
							<h4 className="mb-0 mr-3 username">
								<strong>Luigi</strong>
							</h4>
							<p className="text-secondary details">@luigirp - 0 min</p>
						</div>
					</div>
					<div className="arrow">
						<i className="fas fa-chevron-down text-secondary mr-5" />
					</div>
					<div className="row py-3 px-3">
						<h4 className="tweet">
							No me puedo creer que el 2-8 vaya a ser su último partido y que todo termine con una disputa
							entre abogados. Es que es demencial. El mejor jugador de la historia del club saliendo del
							club de esta manera. Ni en la peor de nuestras pesadillas. Costará asimilarlo.
						</h4>
					</div>
					<div className="row d-flex justify-content-between w-100 text-secondary icons">
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
