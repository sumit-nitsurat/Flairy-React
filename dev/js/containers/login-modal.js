import React, {Component} from 'react';
import classNames from 'classnames';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class LoginModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cName = classNames({
        'login-btn': this.props.isFullSection
    });
    let loginHeading = {
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
                    {this.facebookLogin()} 
                    {this.googleLogin()}               
                </div>
      </div>
    )
  }
  responseFacebook(response) {
    console.log(response);
  };

  facebookLogin() {
      return (
           <FacebookLogin
                appId="xxxx"
                autoLoad={false}
                fields="name,email,picture"
                icon="fa-facebook fb-icon"
                cssClass="loginBtn"
                callback={this.responseFacebook.bind(this)}/>
      );
  }
  
    responseGoogle (response){
        console.log(response);
    }
 
    googleLogin() {
        let btnStyle ={
           background: '#9d261d'
        }
        return (
        <span>
        <GoogleLogin
            clientId="xxxx"
            buttonText="LOGIN WITH GMAIL"
            onSuccess={this.responseGoogle.bind(this)}
            onFailure={this.responseGoogle.bind(this)}
            offline={false}
            style={btnStyle}
            className='loginBtn'>
             <span>
                        <i className="icon-mail" style={{padding:"8px"}}></i>LOGIN WITH GMAIL</span>  
        </GoogleLogin>
        </span>);
    }
}

export default LoginModal;

React.defaultPorps = {
    isFullSection : false
}