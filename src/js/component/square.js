import React, { useState } from "react";
import PropTypes from "prop-types";
const Square = props => {
	const [value, setValue] = useState(undefined);
	let print = "";
	if (value == true) {
		print = "fas fa-sun";
	}
	if (value == false) {
		print = "fas fa-moon";
	}
	return (
		<div className="value" onClick={() => setValue(props.value)}>
			<i className={print}></i>
		</div>
	);
};
export default Square;

Square.propTypes = {
	value: PropTypes.bool
};
