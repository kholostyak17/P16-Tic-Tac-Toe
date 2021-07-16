import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const Square = props => {
	// const [value, setValue] = useState(undefined);

	// const [print, setPrint] = useState("");
	// const myCallBackFunction = props.callbackfunc;

	// const setMyValue = () => {
	// 	if (props.value == "sun") {
	// 		setPrint(<i className="fas fa-sun"></i>);
	// 	}
	// 	if (props.value == "moon") {
	// 		setPrint(<i className="fas fa-moon"></i>);
	// 	}
	// 	myCallBackFunction(props.position);
	// 	console.log(props.value, "heyyyyyyyyyyyyyyyyy");
	// };

	return (
		<div className="col-4 square" onClick={props.onClick}>
			{props.value}
		</div>
	);
};
export default Square;

Square.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func
};
// const isEmptyValue = () => {
// 	if (print != "") {
// 		setValue(props.value);
// 	}
// };
