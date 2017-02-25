import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      
    let imageStyle = {
        width: "50px",
        height: "50px",
        marginLeft: "-66px",
        marginBottom: "-58px",
        marginTop: "-21px"
    }

    return (
    <section className="hs-content-wrapper" style={{marginTop: '2%'}}>
        <div>
            <h3 className="color_dark fw_light m_bottom_15 t_align_c heading_3">How we works</h3>
            <p className="m_bottom_40 t_align_c heading_4">Four step process to follow your heart </p>
            <div>
                <div className="row m_bottom_30" >
                    <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
                            <h4 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover img-text">Programmer</a>
                                <img src="../images/programmer.jpg" className="img-circle background_img" onClick={this.showDeatil.bind(this, 'programmers')} alt="" style={{imageStyle}}/>
                            </h4>
                            <p className="fs_medium m_bottom_10">For programmers looking to code.</p>
                        </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
							<h4 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover img-text">Creative Designer</a>
                                    <img src="../images/dance.jpg" className="img-circle background_img" alt="" style={{imageStyle}}/>
                            </h4>
                            <p className="fs_medium m_bottom_10">Upload your artistic work here to get recognized by valuable people .</p>
                        </figure>
                    </div>
			        <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
                            <h4 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover img-text">Writter</a>
                                    <img src="../images/photography.jpg" className="img-circle background_img" alt="" style={{imageStyle}}/>
                            </h4>
                            <p className="fs_medium m_bottom_10" >Participates in the events created by organizers to hire the suitable talent .</p>
                        </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
                            <h4 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover img-text">Sales And Marketing</a>
                                    <img src="../images/magic.jpg" className="img-circle background_img" alt="" style={{imageStyle}}/>
                            </h4>
                            <p className="fs_medium m_bottom_10" >Get the chance to showcase your talent in front of live audience .</p>
                        </figure>
                    </div>
                </div>
                <div className="row m_bottom_30" >
                    <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
                            <h4 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover img-text">Customer Service</a>
                                <img src="../images/music.jpg" className="img-circle background_img" alt="" style={{imageStyle}}/>
                            </h4>
                            <p className="fs_medium m_bottom_10">For programmers looking to code.</p>
                        </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
							<h4 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover img-text">Legal Advisors</a>
                                    <img src="../images/dance.jpg" className="img-circle background_img" alt="" style={{imageStyle}}/>
                            </h4>
                            <p className="fs_medium m_bottom_10">Upload your artistic work here to get recognized by valuable people .</p>
                        </figure>
                    </div>
			        <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
                            <h4 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover img-text">Accountent And Consultent</a>
                                    <img src="../images/photography.jpg" className="img-circle background_img" alt="" style={{imageStyle}}/>
                            </h4>
                            <p className="fs_medium m_bottom_10" >Participates in the events created by organizers to hire the suitable talent .</p>
                        </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
                            <h4 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover img-text">Human Resourses</a>
                                    <img src="../images/magic.jpg" className="img-circle background_img" alt="" style={{imageStyle}}/>
                            </h4>
                            <p className="fs_medium m_bottom_10" >Get the chance to showcase your talent in front of live audience .</p>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>);
  }
  showDeatil(category) {
      browserHistory.push('/jobs/' + category);
  }
}
export default Categories;
