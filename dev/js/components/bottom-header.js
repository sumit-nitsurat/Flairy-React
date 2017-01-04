import React from 'react';
import {Link} from 'react-router';
const BHeader = () => (
    <section className="header_bottom_part bg_light">
    <div className="container-fluid">
      <div className="d_table w_full d_xs_block" style={{marginTop: "0px"}}>
        <div className="col-lg-2 col-md-2 col-sm-2 d_table_cell d_xs_block f_none v_align_m logo t_xs_align_c"> <a href="index.php" className="d_inline_m m_xs_top_20 m_xs_bottom_20">
          <h3>FlairyEgg.in</h3>
          </a> </div>
        <div className="col-lg-10 col-md-10 col-sm-10 t_align_r d_table_cell d_xs_block f_none">
          <div className="relative clearfix t_align_r">
            <button id="menu_button" className="r_corners tr_all color_blue db_centered m_bottom_20 d_none d_xs_block"> <i className="icon-menu"></i> </button>
            <nav role="navigation" className="d_inline_m d_xs_none m_xs_right_0 m_right_15 t_align_l m_xs_bottom_15">

              <ul className="hr_list main_menu fw_light">

                <li className="current container3d relative f_xs_none m_xs_bottom_5"><Link to="/"> <a className="color_dark fs_large relative r_xs_corners">Home</a></Link>
                </li>
               <li className="container3d relative f_xs_none m_xs_bottom_5"><Link to="/about"> <a className="color_dark fs_large relative r_xs_corners">About </a></Link> </li>
				 <li className="container3d relative f_xs_none m_xs_bottom_5"> <a className="color_dark fs_large relative r_xs_corners" href="event.php">Frame </a></li>

				 <li className="container3d relative f_xs_none m_xs_bottom_5"> <a className="color_dark fs_large relative r_xs_corners" href="frame.php">event </a></li>

                <li className="container3d relative f_xs_none m_xs_bottom_5"> <a className="color_dark fs_large relative r_xs_corners" href="contact.php">Contact </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>);

export default BHeader;
