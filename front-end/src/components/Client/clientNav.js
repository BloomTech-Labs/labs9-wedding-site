import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Sidebar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
    <div className="clientNavSidebar">
          <Link to="/vb/dashboard" onClick={this.props.handletoggle}>Dashboard</Link>
          <Link to="/vb/billing" onClick={this.props.handletoggle}>Billing</Link>
          <Link to="/vb/settings" onClick={this.props.handletoggle}>Settings</Link>
          <Link to="/vb/rsvp" onClick={this.props.handletoggle}>RSVP</Link>
          <Link to="/vb/guestlist" onClick={this.props.handletoggle}>Guest List</Link>
    </div>
    );
  }
}

export default Sidebar;