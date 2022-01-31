import React from 'react';

const FormAndMap = () => {
    return (
        <>
            <div className="contact-page pd-bottom-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 align-self-center">
                            <div className="contact-touch">
                                <div className="title">
                                    Phone Number
                                </div>
                                <span>+22 3254 345 423</span>
                                <div className="title">
                                    Email
                                </div>
                                <span>contact@appcon.com</span>
                                <div className="title">
                                    Address
                                </div>
                                <span className="mb-0">Ausmod tempor incidi Mirpur Rd, Dhaka D22 CR2</span>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-3">
                            
                            <div className="contact-map">
                                <div className="embed-responsive embed-responsive-21by9">
                                    <div className="embed-responsive-item d-flex flex-column justify-content-center">
                                        <iframe id="mapcanvas" src="https://maps.google.com/maps?q=&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-12">
                            <div className="blog-comment-form">
                                <div className="title">
                                    Send Message
                                </div>
                                <form className="text-center">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Website"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Your Message" rows="8"></textarea>
                                    </div>
                                    
                                    <button type="submit" className="common-btn">SEND COMMENT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
        </>
    );
};

export default FormAndMap;