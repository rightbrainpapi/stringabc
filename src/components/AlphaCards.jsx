import React, { Component } from "react";

class AlphaCards extends Component {
	render() {
		return (
			<div className="AlphaCardsContainer">
				<div className="AlphaCards" id="AlphaCards">
					<div className="Letter">A</div>
				</div>

				<div className="AlphaCards" id="AlphaCards">
					<div className="Letter">B</div>
				</div>

				<div className="AlphaCards" id="AlphaCards">
					<div className="Letter">A</div>
				</div>

				<div className="AlphaCards" id="AlphaCards">
					<div className="Letter">?</div>
				</div>
				<div className="AlphaCards" id="AlphaCards">
					<div className="Letter">?</div>
				</div>
			</div>
		);
	}
}

export default AlphaCards;
