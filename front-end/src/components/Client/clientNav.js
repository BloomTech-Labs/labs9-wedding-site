import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
    <div className="clientNavSidebar">
        <Link to="/vb/dashboard">Dashboard</Link>
        <Link to="/vb/billing">Billing</Link>
        <Link to="/vb/settings">Settings</Link>
        <Link to="/vb/rsvp">RSVP</Link>
        <Link to="/vb/guestlist">Guest List</Link>
    </div>
    );
  }
}

export default Sidebar;