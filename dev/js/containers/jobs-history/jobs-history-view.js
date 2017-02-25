import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

class JobsHistoryView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <section>
            <div className='jobs-history'>
                <ul className="nav nav-tabs">
                    <li role="presentation"><Link to="/jobs-history/all" activeClassName="active">ALL JOBS</Link></li>
                    <li role="presentation"><Link to="/jobs-history/in-progress" activeClassName="active">IN PROGRESS</Link></li>
                    <li role="presentation"><Link to="/jobs-history/payment-requested" activeClassName="active">PAYMENT REQUESTED</Link></li>
                    <li role="presentation"><a href="#">PAYMENT DONE</a></li>
                </ul>  
                {this.props.children}
            </div>
        </section>
    );
  }

}

export default JobsHistoryView;