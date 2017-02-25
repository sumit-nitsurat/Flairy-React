import React, {Component} from 'react';
import classNames from 'classnames';
import SideNav from './side-nav';
import Header from './header';
import Categories from './categories';

class UserDetail extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <span>
                <SideNav/>
                <div className="hs-content-scroller">
                    <Header/>
                    {this.props.children}
                </div>
            </span>
        );
    }
}
export default UserDetail;