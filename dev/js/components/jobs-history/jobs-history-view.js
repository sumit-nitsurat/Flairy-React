import React, {Component} from 'react';
import UserDetail from '../../containers/user-landing/user-detail';
import JobsHistory from '../../containers/jobs-history/jobs-history';

class JobsHistoryView extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <UserDetail>
                <JobsHistory/>
            </UserDetail>
        );
    }
}
export default JobsHistoryView;