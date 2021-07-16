import React from "react";
import App from "./modal.js";
import Board from "./board.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Game from "./game.js";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<App />
			<Game />
		</div>
	);
}
