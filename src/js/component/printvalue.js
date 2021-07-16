import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const PrintValue = props => {
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
		<div className="col-4 square" onClick={props.callbackfunc}>
			{props.value}
		</div>
	);
};
export default PrintValue;

PrintValue.propTypes = {
	value: PropTypes.string,
	callbackfunc: PropTypes.func
};
// const isEmptyValue = () => {
// 	if (print != "") {
// 		setValue(props.value);
// 	}
// };
