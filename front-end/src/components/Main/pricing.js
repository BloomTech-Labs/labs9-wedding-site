import React from "react";

import Prices from "./Prices";
// import StickyTop from '../Navigation/topBar';

//images
import flower1 from "./images/flower1.png";
import flower2 from "./images/flower2.png";
import flower3 from "./images/flower3.png";
import flower4 from "./images/flower4.png";
import flower5 from "./images/flower5.png";
import styled from "styled-components";
//font
// import './SnellBTRegulear.otf';
import "./fonts.css";

const Pricing = () => {
	return (
		<div className="separate">
			<Prices />
			<div className="separate_text">
				<span className="font">Watch your invite</span>
				<span className="font2">Bloom</span>
				<span className="font3">
					Choose any package that
					<br />
					fits your invitation needs
				</span>
			</div>
			<div>
				<img src={flower1} alt="yellow flower" style={yellow3} />
				<img src={flower2} alt="pink flowers" style={pinks1} />
				<img src={flower4} alt="red1 flower" style={red1} />
				<img src={flower4} alt="red flower" style={red2} />
				<img src={flower3} alt="blue flower" style={blue} />
				<img src={flower5} alt="lavender flower" style={purple} />
			</div>
			<div className="color">
				<img src={flower2} alt="pink flowers" style={pinks2} />
				<img src={flower3} alt="blue flower" style={blue2} />
				<Yellow2Img src={flower1} alt="yellow flower" />
				<img src={flower5} alt="lavender flower" style={purple2} />
				<img src={flower4} alt="red flower" style={red3} />
				{/* <img src={flower1} alt='yellow flower' style={yellow1} /> */}
			</div>
		</div>
	);
};

const yellow1 = {
	height: 80,
	display: "flex",
	flexDirection: "column",
	marginTop: 10,
	position: "relative",
	left: 20,
	top: 360,
	zIndex: 600,
	transition: "all 0.3s"
};

const Yellow2Img = styled.img`
	height: 200px;
	width: 200px;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	position: absolute;
	left: 2%;
	top: 350px;
	z-index: 600;
	transition: all 0.3s;
	@media (max-width: 800px) {
		left: -9%;
		top: 183px;
	}
	@media (max-width: 700px) {
		left: -9%;
		top: 120px;
		height: 100px;
		width: 100px;
	}
`;

const yellow3 = {
	height: 300,
	display: "flex",
	flexDirection: "column",
	marginTop: 10,
	position: "absolute",
	left: "82.5%",
	top: 300,
	zIndex: 400,
	transition: "all 0.3s"
};

const pinks1 = {
	height: 600,
	width: 840,
	display: "flex",
	flexDirection: "column",
	marginTop: 10,
	position: "absolute",
	left: "46%",
	top: 50,
	zIndex: 450,
	transition: "all 0.3s"
};

const pinks2 = {
	height: 600,
	display: "flex",
	flexDirection: "column",
	marginTop: 10,
	position: "absolute",
	left: "-40%",
	top: 60,
	transition: "all 0.3s"
};

const blue = {
	height: 200,
	width: 200,
	display: "flex",
	flexDirection: "column",
	marginTop: 10,
	position: "absolute",
	left: "50%",
	top: 581,
	zIndex: 690,
	transform: "rotate(-20deg)",
	transition: "all 0.3s"
};

const blue2 = {
	height: 300,
	width: 300,
	display: "flex",
	flexDirection: "column",
	marginTop: 10,
	position: "absolute",
	left: "-10%",
	top: 373,
	zIndex: 450,
	transition: "all 0.3s"
};

const red1 = {
	height: 190,
	width: 190,
	display: "flex",
	flexDirection: "column",
	marginTop: 10,
	position: "absolute",
	left: "92%",
	top: 520,
	zIndex: 600,
	transition: "all 0.3s"
};

const red2 = {
	height: 300,
	display: "flex",
	flexDirection: "column",
	marginTop: 10,
	position: "absolute",
	left: "43.3%",
	top: 300,
	zIndex: 400,
	transition: "all 0.3s"
};

const red3 = {
	height: 190,
	width: 190,
	display: "flex",
	flexDirection: "column",
	marginTop: 10,
	position: "absolute",
	left: "-1%",
	top: 620,
	transition: "all 0.3s"
};

const purple = {
	height: 220,
	width: 220,
	display: "flex",
	flexDirection: "column",
	marginTop: 10,
	position: "absolute",
	left: "47%",
	top: 410,
	zIndex: 490,
	transition: "all 0.3s"
};

const purple2 = {
	height: 200,
	width: 220,
	display: "flex",
	flexDirection: "column",
	marginTop: 10,
	position: "absolute",
	left: 100,
	top: 500,
	zIndex: 400,
	transition: "all 0.3s"
};

export default Pricing;
