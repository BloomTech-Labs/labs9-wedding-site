import React, { Component } from "react";
import MainContent from "./components/Main/MainContent";
import { withRouter } from "react-router";

class App extends Component {
	render() {
		return (
			<div>
				<MainContent {...this.props} />
			</div>
		);
	}
}

export default withRouter(App);
