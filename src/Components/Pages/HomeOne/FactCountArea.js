import React from 'react';

const FactCountArea = () => {
    return (
        <>
            <section className="fact-count-area text-center">
                <div className="container">
                    <div className="fact-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fact-inner">
                                    <h2><span className="counter">50</span>K</h2>
                                    <h4>Happy Users</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fact-inner">
                                    <h2 className="counter">5462</h2>
                                    <h4>Awesome Design</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fact-inner">
                                    <h2><span className="counter">75</span>K</h2>
                                    <h4>Downloads</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fact-inner">
                                    <h2 className="counter">4.6</h2>
                                    <h4>App Rating</h4>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
        </>
    );
};

export default FactCountArea;