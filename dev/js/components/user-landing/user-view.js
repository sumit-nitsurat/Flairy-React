import React, {Component} from 'react';
import UserDetail from '../../containers/user-landing/user-detail';
import Categories from '../../containers/user-landing/categories';

class UserView extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <UserDetail>
                    <Categories/>
            </UserDetail>
        );
    }
}
export default UserView;