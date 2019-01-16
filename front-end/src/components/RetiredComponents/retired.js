import React, { Component } from 'react';
import Form from './form';
import Facebook from  '../Assets/icons/Facebook.png';
import google from '../Assets/icons/google.png';

const SignupPage = () => {
    return ( 
        <div>
            <Form />
            <img src={Facebook} alt='Facebook' style={facebook} />
            <img src={google} alt='Google' style={google2} />
        </div>
     );
}

const facebook={
        height:45,
        width:210,
        display:'flex',
        flexDirection:'column',
        marginTop:10,
        position:'absolute',
        left:720,
        top:400,
    }

const google2={
    height:45,
    width:210,
    display:'flex',
    flexDirection:'column',
    marginTop:10,
    position:'absolute',
    left:720,
    top:460,
}

 
export default SignupPage;