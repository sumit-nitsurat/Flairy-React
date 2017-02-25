import React, {Component} from 'react';
import classNames from 'classnames';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
     <div id="header_container">
                <div id="header">
                    <div><a className="home"><span className="glyphicon glyphicon-home glyphicon_rel"></span></a>
                    </div>
                    <div><a href="" className="previous-page arrow"><span className="glyphicon glyphicon-chevron-left glyphicon_rel"></span></a>
                    </div>
                    <div><a href="" className="next-page arrow"><span className="glyphicon glyphicon-chevron-right glyphicon_rel"></span></a>
                    </div>
                    <div className="news-scroll">
                        <span><i className="fa fa-line-chart"></i>RECENT ACTIVITY : </span>
                        <ul id="marquee" className="marquee">
                            <li>
                                className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa.</li>
                            <li>
                                className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa.
                            </li>
                            <li>
                                className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa.
                            </li>
                            <li>
                                className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa.
                            </li>
                            <li>
                                className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa.
                            </li>
                            <li>
                                className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce tincidunt adipiscing,massa.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>);
        }
}
export default Header;