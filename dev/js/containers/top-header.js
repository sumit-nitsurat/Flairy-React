import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginModal from './login-modal';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class THeader extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isPopupModalVisible: false
        }
    }
    render() {
    return (
        <section className="header_top_part">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 t_xs_align_c">
                    <ul className="hr_list fs_small color_grey_light">
                        <li className="m_right_20 f_xs_none m_xs_right_0 m_xs_bottom_5"> <a href="mailto:#" className="color_grey_light d_inline_b color_black_hover"><span className="circle icon_wrap_size_1 d_inline_m m_right_8"><i className="icon-mail-alt"></i></span>info @companyname.com</a> </li>
                        <li className="m_right_20 f_xs_none m_xs_right_0 m_xs_bottom_5"> <span className="circle icon_wrap_size_1 d_inline_m m_right_8"><i className="icon-phone-1"></i></span>(123) -456-7890 </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 t_align_r t_xs_align_c">
                    <ul className="hr_list d_inline_b social_icons">
                        <li className="m_right_8">
                            <a href="#" className="color_grey_light facebook circle icon_wrap_size_1 d_block">
                                <i className="icon-facebook-1"></i>
                            </a>
                        </li>
                        <li className="m_right_8">
                            <a href="#" className="color_grey_light twitter circle icon_wrap_size_1 d_block">
                                <i className="icon-twitter-1"></i>
                            </a>
                        </li>
                        <li className="m_right_8">
                            <a href="#" className="color_grey_light linkedin circle icon_wrap_size_1 d_block">
                                <i className="icon-linkedin-squared"></i>
                            </a>
                        </li>
                 </ul>
            </div>
        </div>
    </div>
    {this.state.isPopupModalVisible ? this.makePopupModal() : null}
  </section>);
  }

showModal() {
   this.setState({
       isPopupModalVisible: true
   });
} 

makePopupModal() {
    return (
        <div>
            <LoginModal onModalClose={this.onModalClose.bind(this)}/>
        </div>
    );
}

onModalClose() {
    this.setState({
       isPopupModalVisible: false
   });
}

}

export default THeader;
