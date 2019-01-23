import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Pie} from 'react-chartjs-2';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Share from '@material-ui/icons/Share';
import Add from '@material-ui/icons/Add';

import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies()

const styles = {
    dashboardContainer: {
        margin: '150px auto 50px',
        width: '80%',
        position: 'relative'
    },
    cardDivTop: {
        display: 'flex',
      },
    cardTopLeft: {
      width: '50%',
      marginRight: '10px',
      height: '200px',
      padding: '5px 15px 30px'
    },
    cardTopRight: {
        width: '50%',
        marginLeft: '10px',
        height: '200px',
        padding: '5px 15px 30px'
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


class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            attending: 300,
            notAttending: 50,
            maybe: 100,
            userLoaded: false
        }

        this.chartData = {
            labels: [
                'Attending',
                'Not Attending',
                'Maybe'
            ],
            datasets: [{
                data: [this.state.attending, this.state.notAttending, this.state.maybe],
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
        }

    }
    componentDidMount(){
        
        let userdata = cookies.get('USERDATA');
        let oauth_id = cookies.get('userID');

        
        
        console.log('userdata:', userdata)
        if(userdata || oauth_id){
            axios.post(`http://${process.env.REACT_APP_LOCAL_URL || 'vbeloved.now.sh'}/loaduser`, {...userdata, oauth_id})
            .then(res => {
                console.log(res)
                this.props.toggleLoggedIn() //toggles the state of the user to loggedIn (in MainContent component)
                this.props.setUser(res.data.couple[0], res.data.couple[1], res.data.guests, [ {...res.data.couple[0]}, {...res.data.couple[1]} ])
                this.setState({
                   userLoaded: true 
                })
            })
            .catch(err => console.log(err))
        }

        else{
            this.props.history.push('/')
        }

    }

    render() {
      return (

        <div>
          
          { !this.state.userLoaded ? <div>Loading...</div> :
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
                <Link to={`/vb/guestlist`}>Guest List</Link>
                    
                    <Button variant="outlined" style={styles.buttonTop}>
                        Import CSV
                    </Button>
                </Card>
                <Card style={styles.cardTopRight}>
                <Link to={`/vb/rsvp`}>RSVP</Link>

                    <Pie data={this.chartData}
                        style={styles.pieChart}
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
                }
          
        </div>
      );
    }
  }
  
  export default Dashboard;