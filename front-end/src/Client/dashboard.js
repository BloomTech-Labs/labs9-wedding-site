import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Share from '@material-ui/icons/Share';
import Add from '@material-ui/icons/Add';

const styles = {
    dashboardContainer: {
        margin: '50px auto 50px',
        width: '80%',
        position: 'relative',
    },
    cardDivTop: {
        display: 'flex',
      },
    cardTopLeft: {
      width: '50%',
      marginRight: '10px',
      height: '200px',
      padding: '15px'
    },
    cardTopRight: {
        width: '50%',
        marginLeft: '10px',
        height: '200px',
        padding: '15px 15px 30px'
      },
    cardBottom: {
        marginTop: '30px',
        height: '200px',
        padding: '15px'
    },
    location: {
        position: 'absolute',
        right: '0px',
        top: '25px',
    },
    buttonTop: {
        display: 'block',
        margin: '10% auto',
        width: '50%',
        height: '30%',
    },
    buttonBottom: {
        width: '25%',
        height: '100px',
        margin: '5px 15px 0 0'
    },
  };

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
};


class Dashboard extends Component {
    constructor() {
        super();
            
    }

    render() {
      return (
          <div style={styles.dashboardContainer}>
            <Button>
                Change Design
            </Button>
            <h1>Bri &amp; Ryan's Wedding<br/>June 4, 2019</h1>
            <div style={styles.location}>
                <Share/>
                <p>Wedding Reception Hall<br/>San Diego, CA</p>
            </div>
           
            
            <div style={styles.cardDivTop}>
                <Card style={styles.cardTopLeft}>
                    Guest List
                    <Button variant="outlined" style={styles.buttonTop}>
                        Import CSV
                    </Button>
                </Card>
                <Card style={styles.cardTopRight}>
                    RSVP
                    <Pie
                        data={data}
                        width={100}
                        height={50}
                        options={{ maintainAspectRatio: false}}
                        />
                </Card>
            </div>

                <Card style={styles.cardBottom}>
                    Registry
                    <CardContent>
                        <Button variant="outlined" style={styles.buttonBottom}>
                            Amazon Registry
                        </Button>
                        <Button variant="outlined" style={styles.buttonBottom}>
                            <Add/>
                            Add Registry
                        </Button>
                    </CardContent>
                </Card>
          </div>
      );
    }
  }
  
  export default Dashboard;
