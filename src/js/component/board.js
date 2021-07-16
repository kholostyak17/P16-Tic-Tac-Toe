import React, { useState, useEffect } from "react";
import PropTypes, { element } from "prop-types";
import PrintValue from "./printvalue.js";

const Board = () => {
	const [value, setValue] = useState("sun");
	const [myMap, setMyMap] = useState("");
	const [myArray, setMyArray] = useState([
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

	const putValueInArray = position => {
		console.log(myArray, "gato");
		if (myArray[position] == "") {
			console.log(value, "perro");
			setValue(!value);
			setMyArray(myArray.splice(position, 1, value));
			if (value == "sun") {
				console.log("si es sun ol");
				setValue("moon");
			}
			if (value == "moon") {
				setValue("sun");
			}
		}
	};
	useEffect(() => {
		console.log(myArray);
		setMyMap(
			myArray.map((element, index) => {
				console.log("HOLA!!!!");
				return (
					<PrintValue
						key={index}
						value={myArray[index]}
						position={index}
						callbackfunc={putValueInArray}
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
