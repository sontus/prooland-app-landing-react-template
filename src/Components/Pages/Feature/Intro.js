import React from 'react';

const Intro = () => {
    return (
        <>
            <section className="intro-area text-center pd-bottom-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-intro-wrap">
                                <div className="thumb">
                                    <img src="assets/img/intro/1.png" alt="img"/>
                                </div>
                                <h4><a href="">Free Setup</a></h4>
                            </div>                  
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-intro-wrap">
                                <div className="thumb">
                                    <img src="assets/img/intro/2.png" alt="img"/>
                                </div>
                                <h4><a href="">Quick Access</a></h4>
                            </div>                  
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-intro-wrap">
                                <div className="thumb">
                                    <img src="assets/img/intro/3.png" alt="img"/>
                                </div>
                                <h4><a href="">Manage User</a></h4>
                            </div>                  
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-intro-wrap">
                                <div className="thumb">
                                    <img src="assets/img/intro/4.png" alt="img"/>
                                </div>
                                <h4><a href="">Daily Updates</a></h4>
                            </div>                  
                        </div>
                    </div>
                </div>      
            </section>
        </>
    );
};

export default Intro;