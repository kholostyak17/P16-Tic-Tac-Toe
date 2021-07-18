import React, { Component, useState, useEffect } from "react";
import AppModal from "./modal.js";
import PropTypes from "prop-types";
import Board from "./board";

const Game = props => {
	const [state, setState] = useState({
		nextPlayer: true,
		stepNumber: 0,
		history: [{ squares: Array(9).fill(null) }]
	});
	const [winner, setWinner] = useState(null);
	const calculateWinner = squares => {
		const victoryLines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < victoryLines.length; i++) {
			const winValues = victoryLines[i];
			if (
				squares[winValues[0]] != null &&
				squares[winValues[0]] == squares[winValues[1]] &&
				squares[winValues[1]] == squares[winValues[2]]
			) {
				return squares[winValues[0]];
			}
		}
	};

	const handleClick = position => {
		if (winner == null) {
			console.log("Click en casilla: ", position + 1);
			const history = state.history.slice(0, state.stepNumber + 1);
			const currentStep = history[history.length - 1]; //selecciono el jugador actual
			const squares = currentStep.squares; //aqui hago una  array con todos los valores
			squares[position] = state.nextPlayer ? true : false; //asigno valor a casilla: true(sun) o false(moon)

			setState({
				history: history.concat({ squares: squares }), //añado última lista de valores
				nextPlayer: !state.nextPlayer, //alterno próximo valor
				stepNumber: history.length //nº de movimiento en el que nos encontramos
			});

			console.log("Valores actuales del tablero: ", squares);
			const winner = calculateWinner(squares); //calculo si hay un ganador
			if (winner != null) {
				setWinner(winner);
				setTimeout(() => {
					alert("ha ganado!!!");
				}, 250);
			}
		}
	};

	const setNewGame = () => {
		setState({
			nextPlayer: true,
			stepNumber: 0,
			history: [{ squares: Array(9).fill(null) }]
		});
		setWinner(null);
	};

	const currentValuesToPrint = state.history[state.stepNumber].squares;

	return (
		<div className="game">
			<div className="d-flex justify-content-around pt-4 buttons">
				<AppModal />
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => setNewGame()}>
					New game
				</button>
			</div>
			<Board
				state={state}
				winner={winner}
				callBackFunc={handleClick}
				allSquares={currentValuesToPrint}
			/>
		</div>
	);
};
export default Game;
