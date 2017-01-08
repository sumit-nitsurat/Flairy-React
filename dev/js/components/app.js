import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import BHeader from './bottom-header';
import THeader from '../containers/top-header';
import Footer from './footer';
var App = React.createClass({
  render: function() {
    return (
    <div>
        <header role='banner' className='relative'>
            <THeader />
            <BHeader />
        </header>
        {this.props.children}
        <Footer />
    </div>
);
}
});

export default App;
