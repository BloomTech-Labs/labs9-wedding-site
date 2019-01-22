import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import ReactDropzone from "react-dropzone";

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
      padding: '15px 15px 30px'
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
        width: '23%',
        height: '100px',
        margin: '5px 15px 0 0'
    },
    dropZone: {
        width: '60%',
        height: '60%',
        margin: '20px auto auto',
        borderWidth: 2,
        borderColor: '#bdbdbd',
        borderStyle: 'dashed',
        borderRadius: 5,
        textAlign: 'center',
        padding: '15px'
    }
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

    componentDidMount() {
        let wedding_id = localStorage.getItem('weddingID');
        let userdata = cookies.get('USERDATA')
        let oauth_id = cookies.get('userID')
        //console.log('userdata:', userdata)
        if(wedding_id){
            axios.post('https://vbeloved.now.sh/loaduser', {...userdata, wedding_id, oauth_id})
            .then(res => {
                console.log(res)
                this.setState({
                   userLoaded: true 
                })
            })
            .catch(err => console.log(err))
        }
    }

    // must use "multipart/form-data" when including a file in the body of a POST request
    handleonDrop = (files, rejectedFiles) => {
        files.forEach(file => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('filename', file.name);
            //axios.post('http://localhost:8888/upload', formData)
            axios.post('https://vbeloved.now.sh/upload', formData)
            .then((res => {
                console.log(res)
            }))
            .catch(err => {
                console.log(err)
            })
        });
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
                    Guest List 
                    <ReactDropzone
                        accept=".csv"
                        onDrop={this.handleonDrop}>
                        {({getRootProps, getInputProps}) => (
                            <div {...getRootProps()} style={styles.dropZone}>
                            <input {...getInputProps()} />
                                Drag and drop files or click here to import CSV
                            </div>
                        )}
                    </ReactDropzone>
                </Card>
                <Card style={styles.cardTopRight}>
                    RSVP
                    <Pie data={this.chartData}
                        style={styles.pieChart}
                        options={{ maintainAspectRatio: false}}
                        />
                </Card>
            </div>

                <Card style={styles.cardBottom}>
                    Registry
                    <CardContent>
                        <Button variant="outlined" style={styles.buttonBottom} href="https://www.amazon.com/wedding/home" target="_blank">
                            Amazon
                        </Button>
                        <Button variant="outlined" style={styles.buttonBottom} href="https://www.target.com/gift-registry/wedding-registry" target="_blank">
                            Target
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