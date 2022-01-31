import React from 'react';

const UpCommingFeature = () => {
    return (
        <>
        <div className="upcoming-featured-area pd-top-100 pd-bottom-140">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-5 offset-md-1 col-md-6 col-sm-11 align-self-center">
                        <div className="section-title mb-0 pb-5">
                            <h2 className="title">Improve Your Life Style</h2>
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation</p>
                        </div>
                        <ul className="pl-list-inner style-1">
                            <li><i className="fa fa-check"></i>IP68 Waterproof and HD Touch Screen.</li>
                            <li><i className="fa fa-check"></i>24/7 Heart Rate and Blood Pressure Monitoring.</li>
                            <li><i className="fa fa-check"></i>Sports and Auto-Sleep Tracking.</li>
                            <li><i className="fa fa-check"></i>Notification Alerts and Multiple Functions.</li>
                            <li><i className="fa fa-check"></i>Wide Compatibility and Battery Life.</li>
                        </ul> 
                        <a className="btn btn-blue mt-4" href="#"><i className="fa fa-shopping-cart"></i> ORDER NOW</a>                  
                    </div>
                    <div className="col-lg-5 col-md-5 d-none d-md-block align-self-center">
                        <div className="thumb span3 wow rollInRight">
                            <img src="assets/img/featured/4.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        </>
    );
};

export default UpCommingFeature;