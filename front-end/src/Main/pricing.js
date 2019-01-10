import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import grey from '@material-ui/core/colors/grey';


const PackageContainer = styled.div`
padding:20px 0 20px 0;
margin: auto;
width: 60%;
display:flex;
justify-content: space-around;
align-items: center;
`


const styles = {
    card: {
        maxWidth: 345,
        backgroundColor: grey[50],

    },
    media: {
        height: 500,
    },
};

function Prices(props) {
    const { classes } = props;
    return (
        <PackageContainer>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                    />
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
                    <CardMedia
                        className={classes.media}
                    />
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
                    <CardMedia
                        className={classes.media}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Package 3
                  </Typography>
                        <Typography component="p">
                            Here is a brief description of what this package offers
                  </Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                </CardActions> */}
            </Card>
        </PackageContainer>
    );
}

Prices.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Prices);