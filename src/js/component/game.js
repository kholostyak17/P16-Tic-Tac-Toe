import React, { Component } from "react";
import Board from "./board";

export default class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			turn: true,
			stepNumber: 0,
			history: [{ squares: Array(9).fill(null) }]
		};
	}
	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		squares[i] = this.state.turn ? "X" : "O";
		this.setState({
			history: history.concat({
				squares: squares
			}),
			turn: !this.state.turn,
			stepNumber: history.lenght
		});
	}
	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];

		return (
			<div>
				<Board
					onClick={i => {
						this.handleClick(i);
					}}
					squares={current.squares}
				/>
			</div>
		);
	}
}
