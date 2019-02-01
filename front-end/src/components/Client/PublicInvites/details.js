import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    opacity:.9,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Itinerary" />
            <Tab label="Attire" />
            <Tab label="Meals" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
          <strong>Evening Schedule</strong> 
          <br/><br/>
          5:00pm Ceremony<br/>
          6:00pm Dinner<br/>
          7:00pm Wedding Cake<br/>
          8:00pm Toasts<br/>
          9:30pm Dancing<br/>
          11:00pm Toss the Bouquet<br/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
          <strong>Black Tie Dress Code</strong>
          <br/><br/>
          <strong>For the Ladies</strong> <br/>
          <br/>
          Women have options — they can go a bit dressier and wear a formal floor-length gown,
          or they can choose a dressy cocktail dress, paired with heels or dressy flats. Dressy
          pants suits are also acceptable.<br/>
          <br/>
          <strong>For the Men</strong><br/>
          <br/>
          Men must wear a tuxedo. A black bow tie, black vest or cummerbund, and patent leather shoes
          are also suggested. A white dinner jacket and black tuxedo trousers
          are also acceptable.
          </TabContainer>
          <TabContainer dir={theme.direction}>
          <strong>Dinner</strong>
          <br/><br/>
          Dinner will consist of lobster with mashed potatoes served with green beans,
          accompanied by choice of champagne, red, or white wine. 
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);