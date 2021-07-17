import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import Board from "./board";

const Game = props => {
	const [state, setState] = useState({
		nextPlayer: true,
		stepNumber: 0,
		history: [{ squares: Array(9).fill(null) }]
	});
	const handleClick = position => {
		console.log("click en casilla ", position + 1);
		const history = state.history.slice(0, state.stepNumber + 1);
		const currentStep = history[history.length - 1]; // selecciono el jugador actual
		const squares = currentStep.squares; //aqui hago una  array con todos los valores
		squares[position] = state.nextPlayer ? true : false; //asigno valor a casilla: true(sun) o false(moon)
		console.log(
			history,
			"pollas",
			currentStep,
			"squares",
			squares,
			squares[position]
		);
		setState({
			nextPlayer: !state.nextPlayer,
			stepNumber: history.lenght,
			history: history.concat({ squares: squares })
		}); //alterno valor, e introduzco el nuevo array en el historial
	};
	const currentValuesToPrint = state.history[state.stepNumber];
	console.log(currentValuesToPrint, "hey");
	return (
		<div>
			<Board
				callBackFunc={handleClick}
				allSquares={currentValuesToPrint}
			/>
		</div>
	);
};
export default Game;

Game.propTypes = {
	// allSquares: PropTypes.array,
	// callBackFunc: PropTypes.func
};
