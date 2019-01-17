import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./pricing.css";

// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import grey from "@material-ui/core/colors/grey";

//images for pricing packages
import couple5 from "./images/couple5.png";
import couple3 from "./images/couple3.png";
import couple1 from "./images/couple1.png";

const PackageContainer = styled.div`
  display: flex;
  position: absolute;
  top: 200px;
  margin-left: 800px;
  height: 500px;
  width: 40%;
  z-index:500;
  /* margin: auto; */
  /* width: 40%;
height: 400px;
display:flex;
justify-content: space-around;
align-items: center; */
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
              <p>This is a short description</p>
              </div>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Package 1
            </Typography>
            <Typography component="p">
              Here is a brief description of what this package offers
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
                </CardActions> */}
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
              <p>This is a short description</p>
              </div>
          </div>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Package 2
            </Typography>
            <Typography component="p">
              Here is a brief description of what this package offers
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
                </CardActions> */}
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
              <p>This is a short description</p>
              </div>
          </div>
          {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Package 3
                  </Typography>
                        <Typography component="p">
                            Here is a brief description of what this package offers
                  </Typography>
                    </CardContent> */}
        </CardActionArea>
        {/* <CardActions>
                </CardActions> */}
      </Card>
    </PackageContainer>
  );
}

Prices.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Prices);
