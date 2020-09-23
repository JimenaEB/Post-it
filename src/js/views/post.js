import React, { useState, useContext } from "react";
import "../../styles/post.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Twitter from "../component/twitter.js";
import Instagram from "../component/instagram.js";
import Facebook from "../component/facebook.js";
import { Context } from "../store/appContext";
import { string } from "prop-types";

const useStyles = makeStyles(theme => ({
	textField: {
		width: 200
	}
}));

export default function Post() {
	const { store, actions } = useContext(Context);

	const classes = useStyles();
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const [selectedTime, setSelectedTime] = React.useState(new Date().getHours());

	const [text, setText] = useState("");
	const [imgs, setImgs] = useState("");
	const [listSocial, setListSocial] = useState([]);
	//const [activeSocialComponent, setActiveSocialComponent] = useState("");

	const onChangeText = event => {
		let text = event.target.value;
		setText(text);
	};

	const onChangeImg = event => {
		let url = event.target.value;
		setImgs(url);
		actions.addImg(url);
	};

	const onSubmit = () => {
		if ((listSocial != [] && selectedDate != [] && selectedTime != [] && text != "") || imgs != "") {
			actions.createPost(text, listSocial, imgs, selectedDate, selectedTime);
		}
	};

	// const changeTime = () => {
	// 	let newDate = document.querySelector("#time").value;
	// 	setSelectedTime(newDate);
	// };

	return (
		<div className="container">
			<div className="row header post-header rounded-lg text-center mb-4">
				<h2 className="text-white col">
					<strong>New Post</strong>
				</h2>
			</div>
			<div className="row">
				<form className="col container">
					<div className="col row">
						<div className="col d-flex justify-content-around align-items-baseline py-3">
							<div className="d-flex align-items-baseline">
								<input
									type="checkbox"
									name="social"
									id="Twitter"
									value="twitter"
									className="mr-3"
									onChange={() => {
										setListSocial(listSocial => [...listSocial, "twitter"]);
									}}
								/>
								<label htmlFor="male">
									<div className="TwitterLogo d-flex justify-content-center align-items-center text-center">
										<i className="fab fa-twitter" />
									</div>
								</label>
							</div>

							<div className="d-flex align-items-baseline">
								<input
									type="checkbox"
									name="social"
									id="Facebook"
									value="facebook"
									className="mr-3"
									onChange={() => {
										setListSocial(listSocial => [...listSocial, "facebook"]);
									}}
								/>
								<label htmlFor="female">
									<div className="d-flex justify-content-center align-items-center text-center">
										<i className="FacebookLogo fab fa-facebook-f" />
									</div>
								</label>
							</div>

							<div className="d-flex align-items-baseline">
								<input
									type="checkbox"
									name="social"
									id="Instagram"
									value="instagram"
									className="mr-3"
									onChange={() => {
										setListSocial(listSocial => [...listSocial, "instagram"]);
									}}
								/>
								<label htmlFor="other">
									<i className="InstagramLogo fab fa-instagram" />
								</label>
							</div>

							<div className="d-flex align-items-baseline">
								<input
									type="checkbox"
									name="social"
									id="Linkedin"
									value="linkedin"
									className="mr-3"
									onChange={() => {
										setListSocial(listSocial => [...listSocial, "linkedin"]);
									}}
								/>
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
								id="Text"
								onChange={onChangeText}
							/>

							<label htmlFor="w3review" className="label-post">
								<strong>Image URL:</strong>
							</label>

							<textarea
								name="w3review"
								rows="2"
								cols="50"
								className="rounded"
								defaultValue=""
								id="Img"
								onChange={onChangeImg}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col py-3 d-flex flex-column justify-content-center align-center">
							<label htmlFor="w3review" className="label-post">
								<strong>Date:</strong>
							</label>
							<TextField
								id="Date"
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
								id="Time"
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
					<Twitter
						name="Luigi"
						username="Luigi84"
						tweet={text}
						type="post"
						profile="https://images.pexels.com/photos/3735532/pexels-photo-3735532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						imgPost={imgs}
					/>
				</div>
			</div>
			<br />
			<div className="d-flex justify-content-center">
				<button className="PostItButton mt-5 mb-5" onClick={onSubmit}>
					Post It!
				</button>
			</div>
			<br />
			<br />
			<br />
		</div>
	);
}
