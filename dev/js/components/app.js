import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import BHeader from './bottom-header';
import THeader from './top-header';
const App = () => (
    <div>
        <THeader />
        <BHeader />
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
