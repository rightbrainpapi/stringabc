import React, { Component } from "react";

class GameBox extends Component {
	// onClose = (e) => {
	// 	this.props.onClose && this.props.onClose(e);
	// };
	render() {
		return (
			<div className="GameContainer">
				<div class="GameBox" id="GameBox">
					<h4>GameBox Window</h4>
				</div>
				<button className="Submit">Submit</button>
			</div>
		);
	}
}

export default GameBox;
