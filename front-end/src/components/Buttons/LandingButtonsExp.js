import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingButtonsExp.css";

const LandingButtonsExp = () => {
	return (
		<div className="landingButtons">
			<nav>
				<ul>
					<div className="moving">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							{/*<Link to="/pricing">Pricing </Link>*/}
							<a href="#pricing">Pricing</a>
						</li>
						<li>
							{/*<Link to="/designs">Designs</Link>*/}
							<a href="#designs">Designs</a>
						</li>
					</div>
				</ul>
			</nav>
		</div>
	);
};

export default LandingButtonsExp;
