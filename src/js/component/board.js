import React, { Component } from "react";
import PropTypes, { element } from "prop-types";
import PrintValue from "./printvalue.js";

export default class Board extends Component {
	// const [value, setValue] = useState("sun"); //turno
	// const [print, setPrint] = useState(""); //ficha
	// const [myArray, setMyArray] = useState([
	// 	// array que contiene valores del juego
	// 	"",
	// 	"",
	// 	"",
	// 	"",
	// 	"",
	// 	"",
	// 	"",
	// 	"",
	// 	""
	// ]);

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

	printSquare(index) {
		return (
			<PrintValue
				value={this.props.squares[index]}
				onClick={() => this.props.onClick(index)}
			/>
		);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					{this.printSquare(0)}
					{this.printSquare(1)}
					{this.printSquare(2)}
					{this.printSquare(3)}
					{this.printSquare(4)}
					{this.printSquare(5)}
					{this.printSquare(6)}
					{this.printSquare(7)}
					{this.printSquare(8)}
				</div>
			</div>
		);
	}
}

Board.propTypes = {
	squares: PropTypes.any,
	onClick: PropTypes.func
};
