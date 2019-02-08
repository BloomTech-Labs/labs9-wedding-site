import React from "react";
// import { Redirect } from "react-router";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./pricing.css";

// import CardActions from '@material-ui/core/CardActions';
import CardMedia from "@material-ui/core/CardMedia";

// import Button from '@material-ui/core/Button';
import styled from "styled-components";
import grey from "@material-ui/core/colors/grey";

//images for pricing packages
import couple5 from "./images/couple5.png";
import couple3 from "./images/couple3.png";
import couple1 from "./images/couple1.png";

const PackageContainer = styled.div`
	display: flex;
	position: absolute;
  	right: 3%;
  	top: 22%;
	height: 500px;
	width: 40%;
	z-index: 500;
	display: flex;
  justify-content: space-around;
  @media (max-width: 1000px) {
		width: 50%;
	}
	@media (max-width: 900px) {
		width: 80%;
	}
	@media (max-width: 700px) {
		width: 100%;
	}
`;

const styles = {
	card: {
		maxWidth: 345,
		backgroundColor: grey[50]
	},
	media: {
		height: 500,
		objectFit: "cover"
	}
};

function Prices(props) {
	const { classes } = props;
	return (
		<PackageContainer>
			<Card className={classes.card}>
				<CardActionArea>
					<div class="bontent" id="secondoverride">
						<div class="bontent-overlay">
							<CardMedia
								className={classes.media}
								component="img"
								alt="Couple3"
								height="140"
								image={couple3}
								title="Package 1"
							/>
						</div>
						<div class="bontent-details fadeIn-top">
							<h3>Always</h3>
							<h4>The Always Package <br/> $0</h4>
            				<p>15-person Guest List</p>
            				<p>Unlimited Registries</p>
						</div>
					</div>
				</CardActionArea>
			</Card>
			<Card className={classes.card}>
				<CardActionArea>
					<div class="bontent" id="override">
						<div class="bontent-overlay">
							<CardMedia
								className={classes.media}
								component="img"
								alt="Couple1"
								height="140"
								image={couple1}
								title="Package 2"
							/>
						</div>
						<div class="bontent-details fadeIn-top">
							<h3>Forever</h3>
							<h4>The Forever Package <br/> $15.99</h4>
            				<p>30-person Guest List</p>
            				<p>Unlimited Registries</p>
						</div>
					</div>
				</CardActionArea>
			</Card>
			<Card className={classes.card}>
				<CardActionArea>
					<div class="bontent">
						<div class="bontent-overlay">
							<CardMedia
								className={classes.media}
								component="img"
								alt="Couple4"
								height="140"
								image={couple5}
								title="Package 3"
							/>
						</div>
						<div class="bontent-details fadeIn-top">
							<h3>Eternity</h3>
							<h4>The Eternity Package <br/> $39.99</h4>
            				<p>Unlimited Guest List</p>
            				<p>Unlimited Registries</p>
						</div>
					</div>
				</CardActionArea>
			</Card>
		</PackageContainer>
	);
}

Prices.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Prices);
