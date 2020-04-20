import React, { Component } from "react";
import AlphaCards from "./AlphaCards";

class GameBox extends Component {
	// onClose = (e) => {
	// 	this.props.onClose && this.props.onClose(e);
	// };
	render() {
		return (
			<div className="GameContainer">
				<div class="GameBox" id="GameBox">
					<h1 className="title">GameBox Window</h1>
					<AlphaCards />
				</div>
				<button className="Submit">Submit</button>
			</div>
		);
	}
}

export default GameBox;
