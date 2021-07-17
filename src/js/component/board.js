import React, { useState } from "react";
import PropTypes from "prop-types";
import Square from "./square.js";

const Board = () => {
	const [value, setValue] = useState(true);

	function changeValue(position) {
		setValue(!value);
	}

	return (
		<div className="container">
			<div className="row">
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(0);
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(1);
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(2);
					}}>
					<PrintValue value={value} />
				</div>
			</div>
			<div className="row">
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(3);
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(4);
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(5);
					}}>
					<PrintValue value={value} />
				</div>
			</div>
			<div className="row">
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(6);
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(7);
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(8);
					}}>
					<PrintValue value={value} />
				</div>
			</div>
		</div>
	);
};

export default Board;
