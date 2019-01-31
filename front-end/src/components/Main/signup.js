// import 'antd/dist/antd.css'
import './signup.css'
import './SingleLogin.css';
import React, { Fragment } from 'react'
import { Keyframes, animated } from 'react-spring'
import { Avatar, Form, Icon, Input, Button, Checkbox } from 'antd'
import delay from 'delay'
import Form2 from './form';
import SingleLogin from './SingleLogin';
import Facebook from  '../Assets/icons/Facebook.png';
import google from '../Assets/icons/google.png';
import ProfilePic from './secondPic';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies()


// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [
    { x: 0, from: { x: -100 }, delay: 500 },
    { x: -100, delay: 800 },
  ],
  // single items,
  open: { delay: 0, x: 0 },
  // or async functions with side-effects
  close: async call => {
    await delay(400)
    await call({ delay: 0, x: -100 })
  },
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [
    { x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 },
    { x: -100, opacity: 0, delay: 0 },
  ],
  open: { x: 0, opacity: 1, delay: 100 },
  close: { x: -100, opacity: 0, delay: 0 },
})
const facebook={
  height:45,
  width:210,
  display:'flex',
  flexDirection:'column',
  marginTop:10,
  position:'absolute',
  left:20,
  top:100,
}

const google2={
height:45,
width:210,
display:'flex',
flexDirection:'column',
marginTop:10,
position:'absolute',
left:20,
top:160,
}



export default class SignupExp extends React.Component {
  toggle = () => this.setState(state => ({ open: !state.open }))
  state = { 
    open: undefined, 
    first_name: '',
    last_name: '',
    p_firstname: '',
    p_lastname: '',
    event_date: '',
    event_address: ''
}
toggle = () => this.setState(state => ({ open: !state.open }))


inputHandler = (e) => {

this.setState({
[e.target.name]: e.target.value
})

}

registerUser = () =>{
const {first_name, last_name, p_firstname, p_lastname, event_date, event_address} = this.state

cookies.set('USERDATA', {first_name: this.state.first_name, last_name, p_firstname, p_lastname, event_date, event_address}, {maxAge: 600} )
cookies.set('userID', '??')



/* THIS WAS ORIGINALLY A POST METHOD MEANT TO STORE THE REGISTRATION DATA IN MEMORY WHILE GOOGLE SIGN-IN LOADS. FOR NOW IT'S NOT NEEDED (COOKIES ABOVE ARE BEING USED INSTEAD) BUT IS BEING KEPT IN CASE NEEDED LATER.

axios.post(`http://${process.env.REACT_APP_LOCAL_URL || 'vbeloved.now.sh'}/signin/google`, {first_name, last_name, p_firstname, p_lastname, event_date, event_address})
.then(res => {
console.log(res)
localStorage.setItem('weddingID', `${res.data.id}`)
})
.catch(err => console.log(err))  */

}



  render() {
    const state =
      this.state.open === undefined
        ? 'peek'
        : this.state.open
          ? 'open'
          : 'close'
    const icon = this.state.open ? 'fold' : 'unfold';
    const items = [
      // <Avatar src="https://semantic-ui.com/images/avatar2/large/elyse.png" />,
      <ProfilePic />,
      <img src={Facebook} className='fb-button btn' name='fb-login' alt='Facebook' style={facebook} />,
      <img src={google} className='ggl-button btn'onClick={this.registerUser} alt='Google' style={google2} />

    ]
    return (
      <div style={{ background: '#AFD4E1', width: '100%', height: '800px', marginTop: '90px' }}>
        <Icon
          type={`menu-${icon}`}
          className="sidebar-toggle"
          onClick={this.toggle}
        />
        <span style={{position:'absolute', left:550, top:180, fontSize:13}}>*Required</span>
        <span className='alone single'>Already have an account?</span>
        <SingleLogin />
        <Form2 inputHandler={this.inputHandler}/>
        <Sidebar native state={state}>
          {({ x }) => (
            <animated.div
              className="sidebar"
              style={{
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
              }}>
              <Content
                native
                items={items}
                keys={items.map((_, i) => i)}
                reverse={!this.state.open}
                state={state}>
                {(item, i) => ({ x, ...props }) => (
                  <animated.div
                    style={{
                      transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                      ...props,
                    }}>
                    <Form.Item className={i === 0 ? 'middle' : ''}>
                    <a id="loginbtns" href={`${process.env.REACT_APP_LOCAL_URL}/signin/google`} >{item}</a>
                    </Form.Item>
                  </animated.div>
                )}
              </Content>
            </animated.div>
          )}
        </Sidebar>
      </div>
    )
  }
}