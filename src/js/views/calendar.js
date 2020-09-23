import React, { Fragment } from "react";
import "../../styles/calendar.scss";
import Postit from "../component/postit.js";
export default function Calendar() {
	return (
		<Fragment>
			<div className="container-fluid d-flex justify-content-center">
				<div className=" row container-calendar d-flex justify-content-between rounded-lg">
					<div className="col-3 d-flex align-items-baseline justify-content-around text-white">
						<i className="fas fa-arrow-circle-left icon-calendar" />

						<h3>
							<strong>Agosto 2020</strong>
						</h3>

						<i className="fas fa-arrow-circle-right icon-calendar" />
					</div>
					<div className="col-3 d-flex align-items-baseline justify-content-around text-white">
						<i className="fas fa-arrow-circle-left icon-calendar" />

						<h3>
							<strong>Semana 1</strong>
						</h3>

						<i className="fas fa-arrow-circle-right icon-calendar" />
					</div>
				</div>
			</div>
			<div className="container-fluid my-3">
				<div className="row">
					<div className="col mx-2 column-calendar bg-light py-2">
						<div className="rounded-lg bg-dark container text-center text-white py-2 mb-3">
							<h3>Lunes</h3>
						</div>
					</div>
					<div className="col mx-2 column-calendar bg-light py-2">
						<div className="rounded-lg bg-dark container text-center text-white py-2">
							<h3>Martes</h3>
						</div>
					</div>
					<div className="col mx-2 column-calendar bg-light py-2">
						<div className="rounded-lg bg-dark container text-center text-white py-2">
							<h3>Mièrcoles</h3>
						</div>
					</div>
					<div className="col mx-2 column-calendar bg-light py-2">
						<div className="rounded-lg bg-dark container text-center text-white py-2">
							<h3>Jueves</h3>
						</div>
					</div>
					<div className="col mx-2 column-calendar bg-light py-2">
						<div className="rounded-lg bg-dark container text-center text-white py-2">
							<h3>Viernes</h3>
						</div>
					</div>
					<div className="col mx-2 column-calendar bg-light py-2">
						<div className="rounded-lg bg-dark container text-center text-white py-2">
							<h3>Sàbado</h3>
						</div>
					</div>
					<div className="col mx-2 column-calendar bg-light py-2">
						<div className="rounded-lg bg-dark container text-center text-white py-2">
							<h3>Viernes</h3>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
