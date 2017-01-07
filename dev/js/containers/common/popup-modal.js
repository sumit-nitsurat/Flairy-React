import React, {Component} from 'react';

class PopupModal extends React.Component {
  render() {

    let modalStyle = {
      outline: 0,
      borderRadius: '1px',
      border: '5px solid #A3A3A6',
      position: 'absolute',
      top: '150%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: 'rgb(255, 255, 255)'
    }

    let backdropStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
      <div>
        <div className={this.props.className} style={modalStyle}>{this.props.children}</div>
        <div style={backdropStyle} onClick={e => this.close(e)}/>
      </div>
    )
  }

    close(e) {
        e.preventDefault()
        if (this.props.onClose) {
            this.props.onClose()
        }
    }
}

export default PopupModal; 