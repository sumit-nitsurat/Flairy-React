import React from 'react';

const THeader = () => (
    <section className="header_top_part">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 t_xs_align_c">
                    <ul className="hr_list fs_small color_grey_light">
                        <li className="m_right_20 f_xs_none m_xs_right_0 m_xs_bottom_5"> <a href="mailto:#" className="color_grey_light d_inline_b color_black_hover"><span className="circle icon_wrap_size_1 d_inline_m m_right_8"><i className="icon-mail-alt"></i></span>info @companyname.com</a> </li>
                        <li className="m_right_20 f_xs_none m_xs_right_0 m_xs_bottom_5"> <span className="circle icon_wrap_size_1 d_inline_m m_right_8"><i className="icon-phone-1"></i></span>(123) -456-7890 </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 t_align_r t_xs_align_c">
                    <ul className="hr_list d_inline_b social_icons">
                        <li className="m_right_8"><a href="upload1.php" >Welcome</a></li>
                        <li className="m_right_8"><a href="logout.php" >Logout</a></li>
                        <li className="m_right_8"><a href="" data-toggle="modal" data-target="#login-modal" >Login</a></li>
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
  </section>);

export default THeader;
