import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = {
  card: {
    width: '45%',
    margin: '150px auto 30px',
    padding: '20px'
  },
  buttonDiv: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
      width: '30%',
      margin: '0 15px'
  },
  header: {
      //border: '1px solid red',
      marginTop: '0',
      marginBottom: '30px'
  }
};

class AddRegistry extends React.Component {

  render() {
    return (
      <Card style={styles.card}>
        <h4 style={styles.header}>Whenever you create an online registry, you can save the link here.</h4>
        <div>
        Registry Link (Required)
        <TextField
        style={{marginBottom: '30px'}}
        fullWidth={true}
        onChange={this.props.handleInputChange}
        type="text"
        name="registryLink"/>
        Display Name (Required)
        <TextField
        fullWidth={true}
        onChange={this.props.handleInputChange}
        type="text"
        name="displayName"/>
          <div style={styles.buttonDiv}>
            <Button variant="outlined" onClick={this.props.addRegistry} style={styles.button}>Add Registry</Button>
            <Button variant="outlined" onClick={this.props.handleClose} style={styles.button}>Cancel</Button>
          </div>
          </div>
      </Card>
    );
  }
}

export default AddRegistry;