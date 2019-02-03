import React, { Component } from "react";
import Modal from "react-responsive-modal";

export default class SuccessModal extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  
  render() {
    const { open } = this.state;
    return (
      <div>
        <div className="example">
          <button className="btn btn-action" onClick={this.onOpenModal} style={{position:'absolute', top:200}}>
            Open
          </button>{" "}
          <a
            href="https://github.com/pradel/react-responsive-modal/blob/master/docs/examples/focus-trapped.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            See source code
          </a>
          <Modal open={open} onClose={this.onCloseModal} focusTrapped>
            <h2>Your Payment Has Been Processed!</h2>
            <form action="">
              {/* <button>close</button> */}
            </form>
          </Modal>
        </div>
      </div>
    );
  }
}
