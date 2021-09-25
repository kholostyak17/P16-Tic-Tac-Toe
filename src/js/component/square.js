import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	let print = "";
	if (props.value == true) {
		print = "fas fa-star";
	}
	if (props.value == false) {
		print = "fas fa-moon";
	}
	return (
		<div
			className="col-4 square"
			onClick={print === "" ? props.callBackFunc : null}>
			<i className={print}></i>
		</div>
	);
};
export default Square;

Square.propTypes = {
	value: PropTypes.any,
	callBackFunc: PropTypes.func
};
