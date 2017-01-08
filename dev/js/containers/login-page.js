import React, {Component} from 'react';
import classNames from 'classnames';
import LoginModal from './login-modal';
class LoginPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let cName = classNames({
        'loginSection' : true
    });
    return (
        <LoginModal classNames={cName} isFullSection={true}/>
    )
  }

}

export default LoginPage;