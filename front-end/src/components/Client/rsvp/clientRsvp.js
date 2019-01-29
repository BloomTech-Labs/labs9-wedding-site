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
import { Close } from '@material-ui/icons';

const serverURL = process.env.REACT_APP_LOCAL_URL

// define styles for material-ui components
const styles = {
    card: {
      width: '40%',
      margin: '0 auto 30px',
      padding: '0 20px 20px',
    },
    closeIcon: {
        cursor: 'pointer',
        float: 'right'
    },
    button: {
        width: '30%',
        margin: '0 auto 30px'
    }
  };

class Rsvp extends Component {
    constructor() {
        super();

        this.state = {
           category: '',
           question: '',
           modalOpen: false,
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
                answer: 'Bride,Groom,Both'
            },
            ]
        }
    }

    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // load user questions when component mounts
    componentDidMount() {
        const w_id = localStorage.getItem('weddingID');
        axios
       .get(`${serverURL}/${w_id}/allquestions`)
       .then(res => {
               console.log(this.state.questions)
           if (res.data.length > 0) {
               this.setState({ questions: res.data })
               console.log(this.state.questions)
           }
       })
       .catch(err => {
           console.log(err)
       })
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
        //console.log(this.state.questions)
    };

    // delete a question
    deleteQuestion = (q_id, i) => {
        if (q_id) {
            axios
            .delete(`${serverURL}/${q_id}/deletequestion`)
            .then(res => {
                console.log(res)
                window.location.reload();
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
            console.log(res);
            window.location.reload();
        })
        .catch(err => console.log(err));
    };

    // function to conditionally render cards based on the type of card
    renderCards = (q, i) => {
        if (q.multiple_choice === 1 || q.multiple_choice === true) {
            return <Card style={styles.card} key={i}>
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
            return <Card style={styles.card} key={i}>
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


    render() {
      return (
        <div className="clientRsvp">
            <Sidebar />
            <div className="clientRsvpContainer">
             {this.state.questions.map((q, i) => 
                this.renderCards(q, i)
            )}
            <div className="buttonDiv">
                <Button variant="outlined" onClick={this.handleOpen} style={styles.button}>Add Question</Button>
                <Button variant="outlined" onClick={this.saveQuestions} style={styles.button}>Save</Button>
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
        </div>
        </div>
      );
    }
  }
  
export default Rsvp;