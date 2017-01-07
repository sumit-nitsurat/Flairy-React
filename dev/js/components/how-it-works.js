import React from 'react';

 let imageStyle = {
        width: "50px",
        height: "50px",
        marginLeft: "-66px",
        marginBottom: "-58px",
        marginTop: "-21px"
    }
const HowItWorks = () => (
   
    <section className="section_offset" style={{background: "thistle"}}>
        <div className="container">
            <h3 className="color_dark fw_light m_bottom_15 t_align_c heading_3">How we works</h3>
            <p className="m_bottom_40 t_align_c heading_4">Four step process to follow your heart </p>
            <div data-appear-animation="fadeInUp" data-appear-animation-delay="800">
                <div className="row m_bottom_30" >
                    <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
                            <h6 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover">Create Profile</a>
                                <img src="images/music.jpg" className="img-circle" alt="" style={{imageStyle}}/>
                            </h6>
                            <p className="fs_medium m_bottom_10">Create your artistic profile to reach the right audience .</p>
                        </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
							<h6 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover">Upload Talent</a>
                                    <img src="images/dance.jpg" className="img-circle" alt="" style={{imageStyle}}/>
                            </h6>
                            <p className="fs_medium m_bottom_10">Upload your artistic work here to get recognized by valuable people .</p>
                        </figure>
                    </div>
			        <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
                            <h6 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover">Paticipate in event</a>
                                    <img src="images/photography.jpg" className="img-circle" alt="" style={{imageStyle}}/>
                            </h6>
                            <p className="fs_medium m_bottom_10" >Participates in the events created by organizers to hire the suitable talent .</p>
                        </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                        <figure className="item_services">
                            <h6 className="m_bottom_5 relative">
                                <a href="#" className="color_dark d_block n_sc_hover">Get hired</a>
                                    <img src="images/magic.jpg" className="img-circle" alt="" style={{imageStyle}}/>
                            </h6>
                            <p className="fs_medium m_bottom_10" >Get the chance to showcase your talent in front of live audience .</p>
                        </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
            
export default HowItWorks;
