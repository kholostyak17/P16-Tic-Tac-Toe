import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import Board from "./board";

const Game = props => {
	const [state, setState] = useState({
		nextPlayer: true,
		stepNumber: 0,
		history: [["", "", "", "", "", "", "", "", ""]]
	});
	const handleClick = position => {
		console.log("click en casilla ", position + 1);
		// 	const history = state.history.slice(0, state.stepNumber + 1);
		// 	const currentPlayer = history[history.length - 1];  // selecciono el jugador actual
		// 	const squares = currentPlayer.squares.slice();  //recoge array con todos los valores
		// 	squares[index] = state.nextPlayer ? "X" : "O";  //asigno valor a casilla: true(sun) o false(moon)
		// 	setState({
		// 		nextPlayer: !state.nextPlayer,
		// 		stepNumber: history.lenght,
		// 		history: history.concat({squares: squares}),
		// 	});  //alterno valor, asigno posición en array de la proxima acción,
	};
	const currentValues = state.history[state.stepNumber];
	console.log(currentValues, "hey");
	return (
		<div>
			<Board callBackFunc={handleClick} allSquares={currentValues} />
		</div>
	);
};
export default Game;

Game.propTypes = {
	// allSquares: PropTypes.array,
	// callBackFunc: PropTypes.func
};
