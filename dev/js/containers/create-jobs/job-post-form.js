import React, {Component} from 'react';

class JobPostForm extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <section>
            <div className="col-lg-9 col-md-6 col-sm-6 m_xs_bottom_30 create_job">
                <h3 className="color_dark fw_light m_bottom_15 heading_1 t_align_c">CREATE A JOB</h3>
                <p className="m_bottom_35 heading_2 t_align_c"> Get your work done for FREE.</p>
                <form name=""  id="" action="" method="post" >
                    <ul>
                        <li className="m_bottom_10">
                            <input type="text" name="title" id="title" required required placeholder="Title" className="w_full r_corners fw_light"/>
                        </li>
                        <li className="row m_bottom_10">
                            <div className="col-lg-6 col-md-6 col-sm-6 w_xs_full m_xs_bottom_10">
                                <input type="text" name="name" id="name" required placeholder="Name*" className="w_full r_corners fw_light"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 w_xs_full">
                                <input type="email" name="email" id="email" required required placeholder="Email*" className="w_full r_corners fw_light"/>
                            </div>
                        </li>
                        <li className="m_bottom_5">
                            <textarea className="w_full r_corners fw_light height_3" required required name="message" id="message" placeholder="Description of the Project"></textarea>
                        </li>
                        <li className="m_bottom_10">
                            <button className="button_type_5 color_blue transparent r_corners fs_medium tr_all m_right_10 m_sm_bottom_10" type="submit" name="contact">Create Job</button>
                        </li>
                    </ul>
                </form>
            </div>
            </section>
        );
    }
}
export default JobPostForm;