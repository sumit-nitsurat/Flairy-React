import React, {Component} from 'react';
import classNames from 'classnames';

class FilterJobs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <section className='section_filter_jobs'>
            <div>
                <div className='filter_heading'><span className='glyphicon glyphicon-minus-sign'></span> SUB CATEGORIES </div>
                <div style={{paddingLeft: '20px'}}>
                    <span className='sub_cat'><input type='checkbox' name='web-dev' value='web'/> Web Devlopment </span><br/>
                    <span className='sub_cat'><input type='checkbox' name='mobile-dev' value='mobile'/> Mobile App Devlopment </span> <br/>
                    <span className='sub_cat'><input type='checkbox' name='desktop-dev' value='desktop'/> Desktop Software Devlopment </span> <br/>
                    <span className='sub_cat'><input type='checkbox' name='game-dev' value='game'/> Game Devlopment </span> <br/>
                </div>
            </div>
            <div>
                <div className='filter_heading'><span className='glyphicon glyphicon-minus-sign'></span> PROJECT TYPE </div>
                <div style={{paddingLeft: '20px'}}>
                    <span className='sub_cat'><input type='checkbox' name='hourly' value='hourly'/> Hourly </span><br/>
                    <span className='sub_cat'><input type='checkbox' name='fixed' value='fixed'/> Fixed Price </span> <br/>
                </div>
            </div>
        </section>
    );
  }

}

export default FilterJobs;