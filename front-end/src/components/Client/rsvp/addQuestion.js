import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./clientRsvp.css";

const styles = {
  card: {
    width: '45%',
    margin: '150px auto 30px',
    padding: '20px'
  },
  // buttonDiv: {
  //   marginTop: '30px',
  //   display: 'flex',
  //   justifyContent: 'center'
  // },
  // button: {
  //     width: '30%',
  //     margin: '0 15px'
  // }
};

class addQuestion extends React.Component {
  constructor(props) {
    super(props);
        
  }

  render() {
    return (
      <Card style={styles.card}>
        <div>
        Category (Required)
        <TextField
        style={{marginBottom: '30px'}}
        fullWidth={true}
        onChange={this.props.handleInputChange}
        type="text"
        name="category"/>
        Question (Required)
        <TextField
        fullWidth={true}
        onChange={this.props.handleInputChange}
        type="text"
        name="question"/>
          <div style={styles.buttonDiv} className="addQuestionButtons">
            <Button className="addQuestionButton" variant="outlined" onClick={this.props.addQuestion} style={styles.button}>Add Question</Button>
            <Button className="addQuestionButton" variant="outlined" onClick={this.props.handleClose} style={styles.button}>Cancel</Button>
          </div>
          </div>
      </Card>
    );
  }
}

export default addQuestion;