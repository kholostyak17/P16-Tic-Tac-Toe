import React, { useState, useEffect } from "react";
import PropTypes, { element } from "prop-types";
import PrintValue from "./printvalue.js";

const Board = () => {
	// const [value, setValue] = useState("sun"); //turno
	// const [print, setPrint] = useState(""); //ficha
	const [myMap, setMyMap] = useState(""); //tablero
	const [myArray, setMyArray] = useState([
		// array que contiene valores del juego
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	]);

	// const putValueInArray = position => {
	// 	if (myArray[position] == "") {
	// 		console.log(myArray, ": estado del array");
	// 		console.log(value, ": estado del valor");
	// 		setMyArray(myArray.splice(position, 1, value));
	// 		if (value == "sun") {
	// 			setValue("moon");
	// 			console.log(value);
	// 		}
	// 		if (value == "moon") {
	// 			setValue("sun");
	// 			console.log(value);
	// 		}
	// 	}
	// };

	// const setMyValue = () => {
	// 	if (value == "sun") {
	// 		setPrint(<i className="fas fa-sun"></i>);
	// 	}
	// 	if (val == "moon") {
	// 		setPrint(<i className="fas fa-moon"></i>);
	// 	}
	// 	myCallBackFunction(props.position);
	// 	console.log(props.value, "heyyyyyyyyyyyyyyyyy");
	// };

	useEffect(() => {
		console.log(myArray);
		setMyMap(
			myArray.map((element, index) => {
				console.log("HOLA!!!!");
				return (
					<PrintValue
						key={index}
						value={this.props.square[index]}
						onClick={() => this.props.onClick(index)}
					/>
				);
			})
		);
	}, []);

	return (
		<div className="container">
			<div className="row">{myMap}</div>
		</div>
	);
};

export default Board;
