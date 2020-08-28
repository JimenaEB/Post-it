import React, { useState } from "react";
import "../../styles/post.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Twitter from "../component/twitter.js";
import Instagram from "../component/instagram.js";

const useStyles = makeStyles(theme => ({
	textField: {
		width: 200
	}
}));
export default function Post() {
	const classes = useStyles();
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const [selectedTime, setSelectedTime] = React.useState(new Date().getHours());
	// const [text, setText] = React.useState("");
	// const changeDate = () => {
	// 	let newDate = document.querySelector("#date").value;
	// 	setSelectedDate(newDate);
	// };
	// const changeTime = () => {
	// 	let newDate = document.querySelector("#time").value;
	// 	setSelectedTime(newDate);
	// };
	// const changeText = () => {
	// 	let newText = document.querySelector("#text").value;
	// 	setText(newText);
	// };

	return (
		<div className="container">
			<div className="row header post-header rounded-lg  text-center mb-4">
				<h1 className="text-white col">
					<strong>New Post</strong>
				</h1>
			</div>
			<div className="row">
				<form className="col container">
					<div className="col row">
						<div className="col d-flex justify-content-around align-items-baseline py-3">
							<div className="d-flex align-items-baseline">
								<input type="radio" name="social" value="instagram" className="mr-3" />
								<label htmlFor="male">
									<div className="InstagramLogo d-flex justify-content-center align-items-center text-center">
										<i className=" fab fa-instagram" />
									</div>
								</label>
							</div>
							<div className="d-flex align-items-baseline">
								<input type="radio" name="social" value="facebook" className="mr-3" />
								<label htmlFor="female">
									<div className="FacebookLogo d-flex justify-content-center align-items-center text-center">
										<i className=" fab fa-facebook-f" />
									</div>
								</label>
							</div>

							<div className="d-flex align-items-baseline">
								<input type="radio" name="social" value="twitter" className="mr-3" />
								<label htmlFor="other">
									<i className="TwitterLogo fab fa-twitter" />
								</label>
							</div>
							<div className="d-flex align-items-baseline">
								<input type="radio" name="social" value="linkedin" className="mr-3" />
								<label htmlFor="other">
									<div className="LinkedinLogo d-flex justify-content-center align-items-center text-center">
										<i className=" fab fa-linkedin-in" />
									</div>
								</label>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col d-flex flex-column">
							<label htmlFor="w3review" className="label-post">
								<strong>Text:</strong>
							</label>
							<textarea
								name="w3review"
								rows="3"
								cols="50"
								className="rounded"
								defaultValue=""
								id="text"
								// onChange={changeText}
							/>
							<label htmlFor="w3review" className="label-post">
								<strong>Tags:</strong>
							</label>
							<textarea name="w3review" rows="2" cols="50" className="rounded" defaultValue="" />
							<label htmlFor="w3review" className="label-post">
								<strong>Multimedia:</strong>
							</label>
							<div className="border rounded-lg px-3 py-2 d-flex align-items-center multimedia-container-post">
								<div>
									<img
										className="multimedia-post rounded"
										src="https://images.pexels.com/photos/3735532/pexels-photo-3735532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
										alt="multimedia-post"
									/>
								</div>
								<div>
									<img
										className="multimedia-post rounded mx-3"
										src="https://images.pexels.com/photos/3735532/pexels-photo-3735532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
										alt="multimedia-post"
									/>
								</div>
								<div>
									<img
										className="multimedia-post rounded"
										src="https://images.pexels.com/photos/3735532/pexels-photo-3735532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
										alt="multimedia-post"
									/>
								</div>
								<i className="fas fa-plus-circle label-post icon-post ml-4" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col py-3 d-flex flex-column justify-content-center align-center">
							<label htmlFor="w3review" className="label-post">
								<strong>Date:</strong>
							</label>
							<TextField
								id="date"
								label="Select Date"
								type="date"
								defaultValue={selectedDate}
								className={classes.textField}
								InputLabelProps={{
									shrink: true
								}}
								// onChange={changeDate}
							/>
						</div>
						<div className="col d-flex flex-column py-3">
							<label htmlFor="w3review" className="label-post">
								<strong>Time:</strong>
							</label>
							<TextField
								id="time"
								label="Select Time"
								type="time"
								defaultValue={selectedTime}
								className={classes.textField}
								InputLabelProps={{
									shrink: true
								}}
								inputProps={{
									step: 300 // 5 min
								}}
								// onChange={changeTime}
							/>
						</div>
					</div>
				</form>
				<div className="col container border-left">
					<Instagram
						name="Luigi"
						description="Fuck"
						type="post"
						imgProfile="https://images.pexels.com/photos/3735532/pexels-photo-3735532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						imgPost="https://images.pexels.com/photos/3735532/pexels-photo-3735532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					/>
				</div>
			</div>
		</div>
	);
}
