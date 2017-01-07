import React from 'react';
import LoginModal from '../containers/login-modal';
import HowItWorks from './how-it-works';

const MainCarousal = () => (
    <div>
    <section className="relative w_full" style={{marginTop: "0px",width:"70%"}}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img src="images/music_slide.jpg" alt="for musician at flairyegg" style={{width: "100%"}}/>
                        <div className="carousel-caption top_text font_12">
                            <h3 data-appear-animation="fadeInDownBig">Are you a MUSICIAN !!!</h3>
                            <p data-appear-animation="bounceInLeft" data-appear-animation-delay="500">Music is life.</p>
                        </div>
                </div>
                <div className="item">
                    <img src="images/photographer_slide.jpg" alt="for photographers at flairyegg" style={{width: "100%"}}/>
                        <div className="carousel-caption top_text font_12">
                            <h3 data-appear-animation="fadeInDownBig">Are you a PHOTOIGRAPHER !!!</h3>
                            <p data-appear-animation="bounceInLeft" data-appear-animation-delay="500">Photography is the way to see, what other`s don`t.</p>
                        </div>
                </div>
                <div className="item">
                    <img src="images/actor_slide.jpg" alt="for actors at flairyegg" style={{width: "100%"}}/>
                        <div className="carousel-caption top_text font_12">
                            <h3 data-appear-animation="fadeInDownBig">Are you an ACTOR !!!</h3>
                            <p data-appear-animation="bounceInLeft" data-appear-animation-delay="500">Acting makes you live many lives</p>
                        </div>
                </div>
                <div className="item">
                    <img src="images/fashion_slide.jpg" alt="for models at flairyegg" style={{width: "100%"}}/>
                        <div className="carousel-caption top_text font_12">
                            <h3 data-appear-animation="fadeInDownBig">Are you FASHION Freak !!!</h3>
                            <p data-appear-animation="bounceInLeft" data-appear-animation-delay="500">Fashion is freedom.</p>
                        </div>
                </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <LoginModal/>
    </section>
    <HowItWorks/>
    </div>);

export default MainCarousal;