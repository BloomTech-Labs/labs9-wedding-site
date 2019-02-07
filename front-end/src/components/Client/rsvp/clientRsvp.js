import React, { Component } from 'react';
import AddQuestion from './addQuestion';
import axios from 'axios';
import Sidebar from '../clientNav';
import './clientRsvp.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Snackbar from '@material-ui/core/Snackbar';
import { Close } from '@material-ui/icons';

const serverURL = process.env.REACT_APP_LOCAL_URL

// define styles for material-ui components
const styles = {
    closeIcon: {
        cursor: 'pointer',
        float: 'right'
    },
    button: {
       
    }
  };
// test data
const defaultCouple = [{
    "id": 116,
    "first_name": "partner1",
    "last_name": "last_name",
    "email": "Alexane60@hotmail.com",
    "phone": null,
    "address": "050 Zboncak Rest, Daniellefurt, GA 23176-2988",
    "wedding_id": 121,
    "guest": 0
  },
  {
    "id": 117,
    "first_name": "partner2",
    "last_name": "last_name",
    "email": "Jamarcus50@gmail.com",
    "phone": null,
    "address": "0279 Spencer Forges, East Vicenta, HI 87319",
    "wedding_id": 121,
    "guest": 0
  }]


class Rsvp extends Component {
    constructor(props) {
        super(props);
        const weddingId = localStorage.getItem('weddingID')
        // this.getCouple(weddingId)
        console.log('this.props.couple', this.props.couple)
        let couple = this.getCouple(weddingId)
        // couple = (!couple.length) ? couple : defaultCouple
        couple = (this.props.couple.length) ? this.props.couple : defaultCouple
        console.log('couple', couple)
        
        this.state = {
           category: '',
           question: '',
           modalOpen: false,
           snackbarOpen: false,
           questions: [
            {
                wedding_id: localStorage.getItem('weddingID'),
                category: 'First Name',
                multiple_choice: false,
                question: '',
                answer: ''
            },
            {
                wedding_id: localStorage.getItem('weddingID'),
                category: 'Last Name',
                multiple_choice: false,
                question: '',
                answer: ''
            },
            {
                wedding_id: localStorage.getItem('weddingID'),
                category: 'Attendance',
                multiple_choice: true,
                question: 'Will you be attending our wedding?',
                answer: 'Attending,Not attending,Maybe'
            },
            {
                wedding_id: localStorage.getItem('weddingID'),
                category: 'Email',
                multiple_choice: false,
                question: 'What is your email address?',
                answer: ''
            },
            {
                wedding_id: localStorage.getItem('weddingID'),
                category: 'Phone',
                multiple_choice: false,
                question: 'What is your phone number?',
                answer: ''
            },
            {
                wedding_id: localStorage.getItem('weddingID'),
                category: 'Address',
                multiple_choice: false,
                question: 'What is your mailing address?',
                answer: ''
            },
            {
                wedding_id: localStorage.getItem('weddingID'),
                category: 'Wedding Team',
                multiple_choice: true,
                question: 'Are you a friend or family of... ?',
                answer: `${couple[0].first_name},${couple[1].first_name},Both`
            },
            ]
        }
    }

    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // load user and questions when component mounts
    componentDidMount() {
        let vbtoken = localStorage.getItem('vbtoken');
        let oauth_id = localStorage.getItem('vbtoken');

        if(vbtoken){
            axios.post(`${process.env.REACT_APP_LOCAL_URL}/loaduser`, {oauth_id, vbtoken})
            .then(res => {
                console.log(res)
                this.props.setUser(res.data.couple[0], res.data.couple[1], res.data.guests, [ {...res.data.couple[0]}, {...res.data.couple[1]} ], res.data.wedding_data.event_address, res.data.wedding_data.event_date, res.data.couple[0].email, res.data.couple[0].phone)
                this.props.login()
                this.setState({
                   userLoaded: true 
                })
            })
            .then(() => {
                const w_id = localStorage.getItem('weddingID');
                axios
                .get(`${serverURL}/${w_id}/allquestions`)
                .then(res => {
                    if (res.data.length > 0) {
                        this.setState({ questions: res.data })
                    }
                })
            })
            .catch(err => console.log(err))
        } 
        else {
            this.props.history.push('/login')
        }
    }

    getCouple = (w_id) => {
        const weddingId = localStorage.getItem('weddingID')
        w_id = !weddingId ? w_id : weddingId
        let couple;
        axios(`${serverURL}/invite/${w_id}`)
        .then(res => {
            let weddingDetails = res.data
            console.log(weddingDetails)
            couple = weddingDetails.couple;
            // this.props.setUser(
            //         weddingDetails.couple[0],
            //         weddingDetails.couple[1],
            //         null,
            //         weddingDetails.couple,
            //         weddingDetails.weddingDetails.event_address,
            //         weddingDetails.weddingDetails.event_date,
            //         weddingDetails.couple[0].email,
            //         weddingDetails.couple[0].phone,
            //     )
            })
        return couple
    }

    // adds a question to the default question array
    addQuestion = () => {
        let newQuestion = {
            wedding_id: localStorage.getItem('weddingID'),
            category: this.state.category,
            multiple_choice: false,
            question: this.state.question,
            answer: ''
        }
        let arrCopy = this.state.questions.slice();
        arrCopy.push(newQuestion);
        this.setState({ questions: arrCopy });
        this.handleClose();
    };

    // delete a question
    deleteQuestion = (q_id, i) => {
        if (q_id) {
            axios
            .delete(`${serverURL}/${q_id}/deletequestion`)
            .then(res => {
                const w_id = localStorage.getItem('weddingID');
                axios
                .get(`${serverURL}/${w_id}/allquestions`)
                .then(res => {
                    if (res.data.length > 0) {
                        this.setState({ questions: res.data })
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
        } else {
            let arrCopy = this.state.questions.slice();
            arrCopy.splice(i, 1);
            this.setState({ questions: arrCopy });
        }
    }

    // save all the questions to the database
    saveQuestions = () => {
        axios
        .post(`${serverURL}/questions`, {questions: this.state.questions})
        .then(res => {
        })
        .then(() => {
            const w_id = localStorage.getItem('weddingID');
            axios
            .get(`${serverURL}/${w_id}/allquestions`)
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({ questions: res.data, snackbarOpen: true })
                }
            })
        })
        .catch(err => console.log(err));
    };

    // function to conditionally render cards based on the type of card
    renderCards = (q, i) => {
        if (q.multiple_choice === 1 || q.multiple_choice === true) {
            return <Card className="rsvpCard" key={i}>
            <CardContent style={styles.topDiv}>
                {q.category}
            </CardContent>
            <CardContent>
                <FormControl component="fieldset">
                <FormLabel component="legend">{q.question}</FormLabel>
                <RadioGroup>
                    {q.answer.split(",").map(option =>  
                        <FormControlLabel value={option} control={<Radio />} label={option} 
                    />)}
                </RadioGroup>
                </FormControl>
            </CardContent>
            </Card>
        } else {
            return <Card className="rsvpCard" key={i}>
                <CardContent style={styles.topDiv}>
                    {q.category}
                    {
                    q.category === 'First Name' ? <p></p> :
                    q.category === 'Last Name' ? <p></p> :
                    q.category === 'Address' ? <p></p> :
                    q.category === 'Phone' ? <p></p> :
                    q.category === 'Email' ? <p></p> :
                    <Close onClick={() => this.deleteQuestion(q.id, i)} color="disabled" style={styles.closeIcon}/>
                    }
                </CardContent>
                <CardContent>
                    {q.question}
                    <TextField fullWidth={true}></TextField>
                </CardContent>
                </Card>
        }
    }

    // functions to open and close modal
    handleOpen = () => {
        this.setState({ modalOpen: true });
    };
    
    handleClose = () => {
        this.setState({ modalOpen: false });
    };

    handleSnackbarClose = () => {
        this.setState({ snackbarOpen: false });
    };


    render() {
      return (
        <div className="clientRsvp">
            <Sidebar />
            <div className="clientRsvpContainer">
                {this.state.questions.map((q, i) => 
                    this.renderCards(q, i)
                )}
                <div className="buttonDiv">
                    <Button variant="outlined" onClick={this.handleOpen} className="rsvpButton">Add Question</Button>
                    <Button variant="outlined" onClick={this.saveQuestions} className="rsvpButton">Save</Button>
                </div>

            <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <AddQuestion
                category={this.state.category}
                question={this.state.question}
                addQuestion={this.addQuestion}
                handleClose={this.handleClose}
                handleInputChange={this.inputHandler}/>
            </Modal>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.state.snackbarOpen}
                autoHideDuration={2000}
                onClose={this.handleSnackbarClose}
                message={<span>Questions Successfully Saved!</span>}
            />
        </div>
        </div>
      );
    }
  }
  
export default Rsvp;