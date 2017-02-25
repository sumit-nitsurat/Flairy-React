import React, {Component} from 'react';
import AllJobs from '../../containers/jobs/all-jobs';
import FilterJobs from '../../containers/jobs/filter-jobs';

class JobsView extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                <AllJobs/>
                <FilterJobs/>
            </div>
        );
    }
}
export default JobsView;