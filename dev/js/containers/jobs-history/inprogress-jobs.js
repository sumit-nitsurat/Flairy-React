import React, {Component} from 'react';
import classNames from 'classnames';

class InProgressJobs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div style={{height: '200px'}}>
            <span className='no_data_found'> No Data Found In progress</span>
        </div>
    );
  }

}

export default InProgressJobs;