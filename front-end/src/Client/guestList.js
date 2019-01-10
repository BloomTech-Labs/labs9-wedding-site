import React, { Component } from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const GuestListContainer = styled.div`
margin: 50px auto 50px;
width: 80%
`

// define styles for material-ui components
const styles = {
    paper: {
      margin: '30px 0 10px',
    },
    deleteButton: {
        float: 'right',
    },
  };

class GuestList extends Component {
    render() {
      return (
      <GuestListContainer>
          <Button variant="contained">Import CSV</Button>
          <Button variant="outlined" style={styles.deleteButton}>Delete</Button>
          <div className="guest-list-table">
          <Paper style={styles.paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell align="right">First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="right">Contact Email</TableCell>
                    <TableCell align="right">RSVP</TableCell>
                    <TableCell align="right">Mailing Address</TableCell>
                    <TableCell align="right">Who do you know?</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="right">Jesse</TableCell>
                        <TableCell align="right">Grossman</TableCell>
                        <TableCell align="right">jesse.grossman@gmail.com</TableCell>
                        <TableCell align="right">attending</TableCell>
                        <TableCell align="right">101 Lambda Rd</TableCell>
                        <TableCell align="right">bride</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Paige</TableCell>
                        <TableCell align="right">Grossman</TableCell>
                        <TableCell align="right">paige.grossman@gmail.com</TableCell>
                        <TableCell align="right">attending</TableCell>
                        <TableCell align="right">101 Lambda Rd</TableCell>
                        <TableCell align="right">bride</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </Paper>
          </div>
          <Button>Add Guest Manually</Button>
      </GuestListContainer>
      );
    }
  }
  
  export default GuestList;
