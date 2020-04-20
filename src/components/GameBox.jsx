import React, { Component } from "react";
import AlphaCards from "./AlphaCards";
import AlphaChoice from "./AlphaChoice";

class GameBox extends Component {
	state = {
		alphaCard: [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		],
		alphaChoice: [],
		submit: false,
	};
	submitChoice = (e) => {
		console.log("submitting the Choice");
		this.setState({
			show: !this.state.show,
		});
	};

	render() {
		return (
			<div className="GameContainer">
				<div className="GameBox" id="GameBox">
					<div className="HeaderSect">
						<h1 className="title">AlphaCards Window</h1>
						<h3 className="Timer">0:30</h3>
					</div>
					<AlphaCards />
					<AlphaChoice />
				</div>
				<button
					className="Submit"
					onClick={(e) => {
						this.submitChoice(e);
					}}
				>
					Submit
				</button>
			</div>
		);
	}
}

export default GameBox;
