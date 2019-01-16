// import 'antd/dist/antd.css'
import './login.css'
import './SingleSignup.css';
import React, { Fragment } from 'react'
import { Keyframes, animated } from 'react-spring'
import { Avatar, Form, Icon, Input, Button, Checkbox } from 'antd'
import delay from 'delay'
import Form2 from './form';
import SingleSignup from './SingleSignup';
import Facebook from  '../Assets/icons/Facebook.png';
import google from '../Assets/icons/google.png';
import ProfilePic from './secondPic';

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

const items = [
  // <Avatar src="https://semantic-ui.com/images/avatar2/large/elyse.png" />,
  <ProfilePic />,
  <img src={Facebook} alt='Facebook' style={facebook} />,
  <img src={google} alt='Google' style={google2} />,
  
]

export default class Login extends React.Component {
  state = { open: undefined }
  toggle = () => this.setState(state => ({ open: !state.open }))
  render() {
    const state =
      this.state.open === undefined
        ? 'peek'
        : this.state.open
          ? 'open'
          : 'close'
    const icon = this.state.open ? 'fold' : 'unfold'
    return (
      <div style={{ background: '#AFD4E1', width: '100%', height: '800px' }}>
        <Icon
          type={`menu-${icon}`}
          className="sidebar-toggle"
          onClick={this.toggle}
        />
        <span className='alone2 single2'>Haven't registered before?</span>
        <SingleSignup />
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
                      {item}
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