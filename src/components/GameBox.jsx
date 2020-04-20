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
		minutes: 1,
		seconds: 0,
	};
	componentDidMount() {
		this.myInterval = setInterval(() => {
			const { seconds, minutes } = this.state;
			if (seconds > 0) {
				this.setState(({ seconds }) => ({
					seconds: seconds - 1,
				}));
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(this.myInterval);
				} else {
					this.setState(({ minutes }) => ({
						minutes: minutes - 1,
						seconds: 59,
					}));
				}
			}
		}, 1000);
	}
	submitChoice = (e) => {
		console.log("submitting the Choice");
		this.setState({
			show: !this.state.show,
		});
	};

	render() {
		const { minutes, seconds } = this.state;
		return (
			<div className="GameContainer">
				<div className="GameBox" id="GameBox">
					<div className="HeaderSect">
						<h1 className="title">AlphaCards Window </h1>
						{minutes === 0 && seconds === 0 ? (
							<h3 className="Timer">Bye-Bye</h3>
						) : (
							<h3>
								Time Remaining: {minutes}:
								{seconds < 10 ? `0${seconds}` : seconds}
							</h3>
						)}
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
