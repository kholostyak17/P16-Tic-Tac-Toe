import React, { useState } from "react";
import PropTypes from "prop-types";
import Square from "./square.js";

const Board = props => {
	const [value, setValue] = useState(true);

	function changeValue(position) {
		setValue(!value);
	}

	const printSquare = position => {
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
		<div className="">
			<div className="row text">
				<div className="col-12 col-sm-5">
					{"Movimiento: ".concat(props.state.stepNumber)}
				</div>
				<div className="col-12 col-sm-5 offset-sm-2">
					{"Turno: "}
					{props.state.nextPlayer == true ? (
						<i className="fas fa-sun"></i>
					) : (
						<i className="fas fa-moon"></i>
					)}
				</div>
			</div>
			<div className="board">
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
		</div>
	);
};
export default Board;

Board.propTypes = {
	state: PropTypes.object,
	winner: PropTypes.bool,
	allSquares: PropTypes.array,
	callBackFunc: PropTypes.func
};
