import React, { useState } from "react";
import PropTypes from "prop-types";
import Square from "./square.js";

const Board = props => {
	const [value, setValue] = useState(true);

	function changeValue(position) {
		setValue(!value);
	}
	// onClick={() => {
	// 					changeValue(0);
	// 				}};

	return (
		<div className="container">
			<div className="row">
				<Square value={props.value} onClick={props.onClick} />
				<Square value={props.value} onClick={props.onClick} />
				<Square value={props.value} onClick={props.onClick} />
			</div>
			<div className="row">
				<Square value={props.value} onClick={props.onClick} />
				<Square value={props.value} onClick={props.onClick} />
				<Square value={props.value} onClick={props.onClick} />
			</div>
			<div className="row">
				<Square value={props.value} onClick={props.onClick} />
				<Square value={props.value} onClick={props.onClick} />
				<Square value={props.value} onClick={props.onClick} />
			</div>
		</div>
	);
};

export default Board;

Board.propTypes = {
	value: PropTypes.bool,
	onClick: PropTypes.func
};
