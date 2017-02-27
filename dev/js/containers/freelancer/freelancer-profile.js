import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

class FreelancerProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <section>
                <div className="col-md-3 productbox"> 
                    <img src="upload/file/" className="img-responsive"/>
                        <div className="producttitle">abcs</div>
                        <p> Thus su here </p>
                        <div className="productprice">
                        <div> className="pricetext">Category : </div>
                </div>   
                <div className="productprice"></div>
                    <div className="pricetext">
                        <button type="button" className="btn-link" data-toggle="modal"  style={{marginLeft:'38px', 'font-size': '12px'}} data-target="#delete_modal">delete</button>
                        <button type="button" className="btn-link"  style={{marginLeft: '38px', 'font-size':'12px;'}}><a href="sellArt.php">Sell</a></button>
                    </div>	
                </div>
        </section>
    );
  }
}

export default FreelancerProfile;