import React, {Component} from 'react';
import classNames from 'classnames';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import request from 'superagent';
import {connect} from 'react-redux';
import {isUserLoggedIn} from '../actions/user-login'

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userType: 'freelancer'
    }
  }

  render() {
    let cName = classNames({
        'login-btn': this.props.isFullSection
    });
    
    let cNameUserType = classNames({
        'checkbox_login': true,
        'checkbox_login_full': this.props.isFullSection
    });
    let loginHeading = {
        fontFamily: "fantasy",
        fontSize: "18px",
        marginTop: "0px",
        fontWeight: "400",
        fontStyle: "italic"
    }
    return (
      <div className={this.props.classNames}>
                <div className={cName}>
                    <div style={loginHeading}>
                        <h4 className="modal-title">One step away to explore the world of opportunities !!!</h4>
                    </div>
                    <div className={cNameUserType}>
                        <label className="radio-inline">
                            <input type="radio" name="optradio" onChange={this.handleUserTypeChange.bind(this, 'freelancer')} checked={this.state.userType === 'freelancer'}/>I am a <span className="user_type">Freelancer</span>
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name="optradio" onChange={this.handleUserTypeChange.bind(this, 'client')}  checked={this.state.userType === 'client'}/>I want to <span className="user_type">Hire</span>
                        </label>
                    </div>
                    <div>
                        {this.facebookLogin()} 
                        {this.googleLogin()}
                    </div>               
                </div>
      </div>
    )
  }
  
  handleUserTypeChange(userType) {
      this.setState({
          userType: userType
      })
  }
  
  responseFacebook(response) {
      response.userType = this.state.userType;
      this.props.isUserLoggedIn(response, res => {
          browserHistory.push('/profile/'+ res.name);
      });
  }

  facebookLogin() {
      return (
           <FacebookLogin
                appId="550210801788005"
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
            clientId="519411860675-purm0dbhibe04b4hrv2uqsuodjnd39ma.apps.googleusercontent.com"
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

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        activeUser: state.activeUser
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({isUserLoggedIn: isUserLoggedIn}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(LoginModal);

React.defaultPorps = {
    isFullSection : false,
    activeUser: null
}