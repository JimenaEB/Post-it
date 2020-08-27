import React from "react";
import "../../styles/inputiconbox.scss";
import PropTypes from "prop-types";

export const InputIconBox = props => {
	return (
		<div className="InputIconBox align-items-center">
			<i className={props.iconBox} />
		</div>
	);
};

InputIconBox.propTypes = {
	iconBox: PropTypes.element
};
