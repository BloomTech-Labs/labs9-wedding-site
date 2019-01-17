import React, { Component } from 'react';
import AddQuestion from './addQuestion';
import axios from 'axios';

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

// define styles for material-ui components
const styles = {
    rsvpContainer: {
        marginTop: '150px'
    },
    card: {
      width: '30%',
      margin: '0 auto 30px',
      padding: '0 20px 20px'
    },
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
                category: 'Guest Name',
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

    // componentDidMount(){
    //    
    // }

    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // adds a question to the default question array
    addQuestion = () => {
        let newQuestion = {
            wedding_id: localStorage.getItem('weddingID'),
            category: this.state.category,
            multiple_choice: false,
            question: this.state.question,
            answer: ''
        }
        this.state.questions.push(newQuestion);
        this.handleClose();
    };

    // save all the questions to the database
    saveQuestions = () => {
        axios
        .post('https://vbeloved.now.sh/questions', {questions: this.state.questions})
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    };

    // function to conditionally render cards based on the type of card
    renderCards = (q, i) => {
        if (q.category === 'Guest Name') {
            return  <Card style={styles.card} key={i}>
            <CardContent>
                {q.category}
            </CardContent>
            <CardContent>
                {q.question}
                <TextField fullWidth={true} label="First Name"></TextField>
                <TextField fullWidth={true} label="Last Name"></TextField>
            </CardContent>
            </Card>
        } else if (q.multiple_choice === true) {
            return <Card style={styles.card} key={i}>
            <CardContent>
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
                <CardContent>
                    {q.category}
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
        <div style={styles.rsvpContainer}>
            {this.state.questions.map((q, i) => 
                this.renderCards(q, i)
            )}
            <Button variant="outlined" onClick={this.handleOpen}>Add Question</Button>
            <Button variant="outlined" onClick={this.saveQuestions}>Save</Button>
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
      );
    }
  }
  
  export default Rsvp;
