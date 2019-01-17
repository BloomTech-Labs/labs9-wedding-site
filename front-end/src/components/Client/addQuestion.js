import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

class addQuestion extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <Card>
        <div className="delete-modal">
        Category (Required)
        <TextField
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
          <div>
            <button onClick={this.props.addQuestion}>Add Question</button>
            <button onClick={this.props.handleClose}>Cancel</button>
          </div>
          </div>
      </Card>
    );
  }
}

export default addQuestion;