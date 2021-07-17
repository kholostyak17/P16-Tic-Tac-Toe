import React, { useState } from "react";
import PropTypes from "prop-types";
import Square from "./square.js";

const Board = props => {
	const [value, setValue] = useState(true);

	function changeValue(position) {
		setValue(!value);
	}

	const printSquare = position => {
		console.log(props.allSquares[position], "my valorrr");
		return (
			<Square
				value={props.allSquares[position]}
				callBackFunc={() => {
					props.callBackFunc(position);
				}}
			/>
		);
	};

	return (
		<div className="container">
			<div className="row">
				{printSquare(0)}
				{printSquare(1)}
				{printSquare(2)}
			</div>
			<div className="row">
				{printSquare(3)}
				{printSquare(4)}
				{printSquare(5)}
			</div>
			<div className="row">
				{printSquare(6)}
				{printSquare(7)}
				{printSquare(8)}
			</div>
		</div>
	);
};
export default Board;

Board.propTypes = {
	allSquares: PropTypes.array,
	callBackFunc: PropTypes.func
};
