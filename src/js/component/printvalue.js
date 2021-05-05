import React, { useState } from "react";
import PropTypes from "prop-types";
const PrintValue = props => {
	const [value, setValue] = useState("polla");
	let print = "";
	//let check = 0;
	if (value == true /*&& check == 0*/) {
		print = "X";
		//check = check + 1;
	}
	if (value == false /*&& check == 0*/) {
		print = "O";
		//check = check + 1;
	}
	return (
		<div className="value" onClick={() => setValue(props.value)}>
			{print}
		</div>
	);
};
export default PrintValue;

PrintValue.propTypes = {
	value: PropTypes.bool
};
