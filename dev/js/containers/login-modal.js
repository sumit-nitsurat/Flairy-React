import React, {Component} from 'react';
import classNames from 'classnames';

class LoginModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let cName = classNames({
        'login-btn': this.props.isFullSection
    });
    let btnStyle = {
        marginLeft: '18%',
        marginTop: '15px',
        width: '70%'
    },loginHeading = {
        fontFamily: "fantasy",
        fontSize: "24px",
        marginTop: "20px",
        fontWeight: "400",
        fontStyle: "italic"
    }
    return (
      <div className={this.props.classNames}>
                <div style={loginHeading}>
                    <h4 className="modal-title">One step away to explore the world of opportunities !!!</h4>
                </div>
                <div className={cName}>
                    <button className="btn btn-lg btn-primary btn-block" style={btnStyle}>
                        <i className="icon-facebook" style={{padding:"8px"}}></i>Login with Facebook</button>
                    <button className="btn btn-lg btn-danger btn-block" style={btnStyle}>
                        <i className="icon-mail" style={{padding:"8px"}}></i>Login with Gmail</button>                
                </div>
      </div>
    )
  }
}

export default LoginModal;

React.defaultPorps = {
    isFullSection : false
}