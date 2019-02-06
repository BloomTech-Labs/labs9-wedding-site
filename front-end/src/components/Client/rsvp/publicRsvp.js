import React, { Component } from 'react';
import axios from 'axios';

import './clientRsvp.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box } from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { Redirect } from 'react-router'

// const { formatStr } = require('../../../universal/helperFunctions')
const formatStr = (str) => str.replace(' ', '_').toLowerCase()

// define styles for material-ui components
const styles = {
    rsvpContainer: {
        marginTop: '150px'
    },
    topDiv: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    closeIcon: {
        cursor: 'pointer'
    },
    buttonDiv: {
        margin: '60px auto 30px',
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        width: '20%',
        margin: '0 auto 30px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: '40px',
        marginRight: '40px',
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
};

const url = process.env.REACT_APP_LOCAL_URL

class PublicRsvp extends Component {
    constructor(props) {
        super(props);
        const { pathname } = props.location;
        // get last part of url (wedding_id)
        const w_id = pathname.substr(pathname.lastIndexOf('/') + 1);

        this.state = {
            category: '',
            question: '',
            modalOpen: false,
            weddingId: w_id,
            loading: false,
            weddingExists: true,
            success: false,
            questions: []
        }
        this.getQuestions(w_id)
    }

    getQuestions = (wed_id) => {

        axios.get(`${url}/${wed_id}/allquestions`)
            .then(qs => {
                this.setState(prevState => {

                    const newQuestions = ([...prevState.questions, ...qs.data]) 
                    console.log(newQuestions)

                    return ({
                        "questions": [...qs.data],
                        weddingExists: true,
                        loading: false
                    })
                })
            }).catch(error => { console.log(error) })
    }

    // function to conditionally render cards based on the type of card
    renderCards = (q, i) => {
        // console.log(this.state.questions[i])
        const { category } = q
        if (q.category === 'Guest Name') {
            return <Card className="rsvpCard" style={styles.card} key={i}>
                <CardContent>
                    {q.category}
                </CardContent>
                <CardContent>
                    {q.question}
                    <TextField
                        fullWidth={true}
                        id="standard-name"
                        label={category}
                        className={styles.textField}
                        value={this.state[parseInt(i)]}
                        onChange={this.handleChange(i)}
                        margin="normal"
                    ></TextField>
                    <TextField fullWidth={true} label="Last Name"></TextField>
                </CardContent>
            </Card>
        } else if (q.multiple_choice > 0) {
            return <Card className="rsvpCard" style={styles.card} key={i}>
                <CardContent style={styles.topDiv}>
                    {q.category}

                </CardContent>
                <CardContent>
                    <FormControl component="fieldset">
                        <FormLabel
                            component="legend"
                        >{q.question}</FormLabel>
                        <RadioGroup
                            label={category}
                            value={this.state[parseInt(i)]}
                            onChange={this.handleChange(i)}
                            id="standard-name"
                        >
                            {q.answer ? q.answer.split(",").map(option =>
                                <FormControlLabel
                                    control={<Radio />}
                                    value={option}
                                    label={option}
                                    labelPlacement="end"
                                />) : <div/>}
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
        } else {
            return <Card className="rsvpCard" style={styles.card} key={i}>
                <CardContent style={styles.topDiv}>
                    {q.category}
                </CardContent>
                <CardContent>
                    {q.question}
                    <TextField fullWidth={true}
                        id="standard-name"
                        label={category}
                        className={styles.textField}
                        value={this.state[parseInt(i)]}
                        onChange={this.handleChange(i)}
                        margin="normal"
                    ></TextField>
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

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    extractAnswers = () => {
        
        const identObj = {
            'first_name': 1,
            'last_name': 1,
            'email': 1,
            'phone': 1,
            'address': 1,
        }

        const guestFields = {
            "attendance": 'attending',
            "wedding_team": 'related_spouse',
        }

        let dynamicAnswers = []
        let guestObj = {}
        const userObj = this.state.questions.map((question, i) => {
            // Must set question answer as this.state[i]
            //  return the question
            // when the question category matches one of the identObj properties
            // when the question category doesn't match we must push this question into dynamicAnswers
            question.answer = this.state[i]
            const questionCategory = formatStr(question.category)
            if ( identObj[questionCategory] ) {
                return question;
            } else if(guestFields[questionCategory]) {
                guestObj[guestFields[questionCategory] ] = question.answer;
            } else {
                dynamicAnswers.push({question_id: question.id, answer: question.answer})
                return false;
            }
        }).filter(q => q).reduce((accObj, question) => {
            // set question.category to a property in the accumlator obj
            // then return that object
            accObj[formatStr(question.category)] = question.answer
            return accObj
        }, {})
        // some variables that every guest will have
        userObj.wedding_id = parseInt(this.state.weddingId, 10)
        userObj.guest = 1

        const responseObj = {
            wedding_id: parseInt(this.state.weddingId, 10),
            userObj,
            guestObj,
            answers: dynamicAnswers
        }

        console.log('responseObj', responseObj)

        return responseObj;
    }
    sendAnswers = () => {
        const answers = this.extractAnswers()
        axios.post(`${url}/answer`, answers)
            .then(success => {
                console.log('data successfuly recorded in server', success)
                this.setState({ success: true })
            }).catch(error => console.log(error))
    }

    saveAnswers = () => {
        const responseObj = this.extractAnswers()
        localStorage.setItem('rsvpAnswers', JSON.stringify(responseObj))
        console.log('saved!', responseObj)
    }

    render() {
        function validateEmail(email) {
            // eslint-disable-next-line
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        const emailIndex = this.state.questions ? this.state.questions.findIndex(question => question.category === 'Email') : -1
        
        return (
            <div className="clientRsvp publicRsvp" >

                <div className="clientRsvpContainer">
                    {this.state.questions.map((question, i) => {
                        return this.renderCards(question, i)
                    })}
                            {/* <Button variant="outlined" 
                                onClick={this.saveAnswers} 
                                style={styles.button}
                            >Save Answers</Button> */}
                    <Typography component="div" style={styles.buttonDiv}>
                    {this.state[emailIndex] && validateEmail(this.state[emailIndex]) ? (
                            <Button variant="outlined" 
                                onClick={this.sendAnswers} 
                                style={styles.button}
                            >Submit</Button>
                        ) : (
                        <div className="disabledBox">
                            <Box textAlign="center" m={1}>
                                * Please enter Email
                            </Box>
                            <Button variant="outlined" disabled style={styles.button}>submit</Button>
                        </div>
                    )}
                    {this.state.success ? (
                        <div className="successMessage">
                            <Box textAlign="center" m={1}>
                                rsvp saved!
                            </Box>
                            <Redirect to={`/${this.state.weddingId}/invite`} />
                        </div>
                    ) : (<div></div>)}
                    </Typography>
                </div>
            </div>
        )
    }
  }
  
export default PublicRsvp;