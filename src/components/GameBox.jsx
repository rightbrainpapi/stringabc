import React, { Component } from "react";
import AlphaCards from "./AlphaCards";
import AlphaChoice from "./AlphaChoice";

class GameBox extends Component {
	// onClose = (e) => {
	// 	this.props.onClose && this.props.onClose(e);
	// };
	render() {
		return (
			<div className="GameContainer">
				<div class="GameBox" id="GameBox">
					<div className="HeaderSect">
						<h1 className="title">GameBox Window</h1>
						<h3 className="Timer">0:30</h3>
					</div>
					<AlphaCards />
					<AlphaChoice />
				</div>
				<button className="Submit">Submit</button>
			</div>
		);
	}
}

export default GameBox;
