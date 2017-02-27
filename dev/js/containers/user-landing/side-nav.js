import React, {Component} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<aside className="hs-menu" id="hs-menu">
            <div className="hs-headline">
                <div> FlairyEgg.in </div>
                <div className="img-wrap">
                    <img src={this.props.user.profile_pic} alt="" width="150" height="150" />
                </div>
                <div className="profile_info">
                    <h1>{this.props.user.name}</h1>
                    <h4>{this.props.user.userType}</h4>
                    <h6><span className="fa fa-location-arrow"></span>&nbsp;&nbsp;&nbsp;San Francisco , CA</h6>
                </div>
                <div style={{'clear':'both'}}></div>
            </div>
            <div className="separator-aside"></div>
            <nav>
                <a href="/profile"><span className="menu_name">CATEGORIES</span><span className="glyphicon glyphicon-globe glyphicon_rel f_right"></span> </a>
                <a href="/jobs-history/all"><span className="menu_name">JOBS HISTORY</span><span className="glyphicon glyphicon-fire glyphicon_rel f_right"></span> </a>
                <a href="#section3"><span className="menu_name">PROFILE</span><span className="glyphicon glyphicon-user glyphicon_rel f_right"></span> </a>
                <a href="#section4"><span className="menu_name">INBOX</span><span className="glyphicon glyphicon-envelope glyphicon_rel f_right"></span> </a>
            </nav>
            <div className="aside-footer">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa fa-github"></i></a>
            </div>
        </aside>);
        }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(SideNav);