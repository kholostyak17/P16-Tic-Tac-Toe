import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	let print = "";
	if (props.value === "sun") {
		print = "fas fa-sun";
	}
	if (props.value === "moon") {
		print = "fas fa-moon";
	}
	return (
		<div className="col-4 square" onClick={props.callBackFunc}>
			<i className={print}></i>
			{/* {props.value} */}
		</div>
	);
};
export default Square;

Square.propTypes = {
	value: PropTypes.any,
	callBackFunc: PropTypes.func
};
