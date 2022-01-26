import React from 'react';

const UpcommingFeatureArea = () => {
    return (
        <>
            <div className="upcoming-featured-area pd-top-120 pd-bottom-120">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 offset-md-1 col-md-6 col-sm-10 align-self-center">
                            <div className="ps-5 ms-5">
                                <div className="section-title">
                                    <h2 className="title">Available Soon</h2>
                                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation</p>
                                </div>
                                <ul className="pl-list-inner style-1">
                                    <li><i className="fa fa-check"></i>Pro features coming soon ...</li>
                                    <li><i className="fa fa-check"></i>Personalized inbox</li>
                                    <li><i className="fa fa-check"></i>Bookmark links</li>
                                    <li><i className="fa fa-check"></i>Browse by category</li>
                                    <li><i className="fa fa-check"></i>Search through archives</li>
                                    <li><i className="fa fa-check"></i>Dark version available soon</li>
                                </ul> 
                            </div>                  
                        </div>
                        <div className="col-lg-5 col-md-5 d-none d-md-block align-self-center">
                            <div className="thumb me-5 span3 wow rollInRight">
                                <img src="assets/img/featured/2.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );
};

export default UpcommingFeatureArea;