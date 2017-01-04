import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import BHeader from './bottom-header';
import THeader from './top-header';
var App = React.createClass({
  render: function() {
    return (
    <div>
        <header role='banner' className='relative'>
            <THeader />
            <BHeader />
        </header>
        {this.props.children}
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);
}
});

export default App;
