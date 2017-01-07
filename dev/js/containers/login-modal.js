import React, {Component} from 'react';
import classNames from 'classnames';

class LoginModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let cName = classNames({
        'login-popup' : true
    });
    let btnStyle = {
        marginLeft: '18%',
        marginTop: '15px',
        width: '70%'
    }, loginSection = {
        top: 0,
        marginLeft: "100%",
        position: "absolute",
        height: "100%",
        width: "43%",
        background:"#000000",
        padding: "10px 10px 10px 10px"
    },loginHeading = {
        fontFamily: "fantasy",
        fontSize: "24px",
        marginTop: "20px",
        fontWeight: "400",
        fontStyle: "italic"
    }
    return (
      <div style={loginSection}>
                <div style={loginHeading}>
                    <h4 className="modal-title">One step away to explore the world of opportunities !!!</h4>
                </div>
                <div>
                    <button className="btn btn-lg btn-primary btn-block" style={btnStyle}>
                        <i className="icon-facebook" style={{padding:"8px"}}></i>Login with Facebook</button>
                    <button className="btn btn-lg btn-danger btn-block" style={btnStyle}>
                        <i className="icon-mail" style={{padding:"8px"}}></i>Login with Gmail</button>                
                </div>
      </div>
    )
  }

  closeModal() {
    this.props.onModalClose();
  }
}

export default LoginModal;