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

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];

		return (
			<div>
				<Board
					onClick={i => this.onClick(i)}
					squares={current.squares}
				/>
			</div>
		);
	}
}
