import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import ReactDropzone from "react-dropzone";
import AddRegistry from './addRegistry';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Share from '@material-ui/icons/Share';
import Add from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import ClientSelections from './ClientSelections'

import './dashboard.css';
import Sidebar from './clientNav';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies()
const serverURL = process.env.REACT_APP_LOCAL_URL

const styles = {
    cardDivTop: {
        display: 'flex',
    },
    cardBottom: {
        marginTop: '30px',
        minHeight: '200px',
        padding: '15px',
        display: 'flex'
    },
    weddingInfo: {
        display: 'flex',
    },
    buttonTop: {
        display: 'block',
        margin: '10% auto',
        width: '50%',
        height: '30%',
    },
    buttonBottom: {
        width: '20%',
        minWidth: '200px',
        height: '100px',
        margin: '15px 5px'
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
    constructor(props) {
        super(props);

        this.state = {
            attending: 300,
            notAttending: 50,
            maybe: 100,
            modalOpen: false,
            userLoaded: false,
            registryLink: "",
            displayName: "",
            registry: []
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

    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const vbtoken = cookies.get('vbtoken'); //"VB Token"; this is a token created in the Passport redirect function, and set in a cookie in the Axios response below. Purpose here is to check if the user is still logged in(expires in 10m)
        const oauth_id = params.get("vbTok"); //Hashed OAuth ID set in the query section of the Passport redirect URL. 
        const userExists = params.get("vbEx"); // Boolean set in the query section of the Passport redirect URL that determines if the user exists or not.

        console.log('vbtoken:', vbtoken)
        console.log('oauth_id:',oauth_id)
        console.log('userExists:', userExists)
        console.log('bool:', (oauth_id || userExists))
        
        if((oauth_id && userExists !== 'undefined') || vbtoken){
            axios.post(`${serverURL}/loaduser`, {oauth_id, vbtoken})
            .then(res => {
                console.log(res)
                cookies.set('vbtoken', oauth_id, {maxAge: 600})
                localStorage.setItem('weddingID', res.data.couple[0].wedding_id)
                this.props.login() //toggles the state of the user to loggedIn (in MainContent component)
                this.props.setUser(res.data.couple[0], res.data.couple[1], res.data.guests, [ {...res.data.couple[0]}, {...res.data.couple[1]} ]);
                this.props.toggleRegistered();
                
                this.setState({
                        userLoaded: true 
                     })
                
                
            })
            .then(() => {
                const w_id = localStorage.getItem('weddingID');
                axios
                .get(`${serverURL}/${w_id}/registries`)
                .then(res => {
                        this.setState({ registry: res.data })
                })
            })
            .catch(err => console.log(err))
        }
        
        else if(oauth_id && userExists === "undefined"){
            cookies.set('authID', oauth_id)
        } 
        else {
            this.props.history.push('/signup')
        }
    }
    

    // add a registry to the database
    addRegistry = () => {
        axios
            .post(`${serverURL}/registry`, {
                wedding_id: localStorage.getItem('weddingID'),
                link: this.state.registryLink,
                name: this.state.displayName
            })
            .then(res => {
                console.log(res);
                this.setState({ registry: res.data });
                this.handleClose();
            })
            .catch(err => console.log(err));
    };

    // must use "multipart/form-data" when including a file in the body of a POST request
    handleonDrop = (files, rejectedFiles) => {
        const wedding_id = localStorage.getItem('weddingID')
        files.forEach(file => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('filename', file.name);
            formData.append('wedding_id', wedding_id);
            axios.post(`${serverURL}/upload`, formData)
                .then((res => {
                    console.log(res)
                }))
                .catch(err => {
                    console.log(err)
                })
        });
    }

    // functions to open and close modal
    handleOpen = () => {
        this.setState({ modalOpen: true });
    };

    handleClose = () => {
        this.setState({ modalOpen: false });
    };

    render() {
        
        return (
            
        <div className="dashboard">
            <Sidebar />
            {!this.props.registered ? <ClientSelections toggleRegistered={this.props.toggleRegistered}/> : !this.state.userLoaded ? <div>Loading...</div> :
            <div className="dashboardContainer" style={styles.dashboardContainer}>
                <Button>
            Change Design
            </Button>
            <div className="weddingInfo" style={styles.weddingInfo}>
                <div className="userInfo">
                    <h1>Bri &amp; Ryan's Wedding<br />June 4, 2019</h1>
                </div>
                <div className="location">
                    <Share />
                    <p>Wedding Reception Hall<br />San Diego, CA</p>
                </div>
            </div>
            <div className="cardDivTop" style={styles.cardDivTop}>
                <Card className="cardTopLeft" style={styles.cardTopLeft}>
                    Guest List
                    <ReactDropzone
                        accept=".csv"
                        onDrop={this.handleonDrop}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()} style={styles.dropZone}>
                                <input {...getInputProps()} />
                                Drag and drop files or click here to import CSV
                            </div>
                        )}
                    </ReactDropzone>
                </Card>
                <Card className="cardTopRight" style={styles.cardTopRight}>
                    RSVP
                    <Pie data={this.chartData}
                        style={styles.pieChart}
                        options={{ maintainAspectRatio: false }}
                    />
                </Card>
            </div>
            <div>
            <Card className="Registry" style={styles.cardBottom}>
                Registry
                <CardContent>
                    {this.state.registry.map((r, i) => {
                        return(
                            <Button key={i} variant="outlined" style={styles.buttonBottom} href={r.link} target="_blank">
                                {r.name}
                            </Button>
                        )
                    })}
                    <Button variant="outlined" style={styles.buttonBottom} onClick={this.handleOpen}>
                        <Add />
                        Add Registry
                    </Button>
                </CardContent>
            </Card>
            <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <AddRegistry
                    addRegistry={this.addRegistry}
                    handleClose={this.handleClose}
                    handleInputChange={this.inputHandler} />
            </Modal>
            </div>
            </div>
            }
        </div>
        )
    }

}

export default Dashboard;
